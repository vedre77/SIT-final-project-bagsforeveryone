import { useNavigate } from "react-router-dom";
import {
  CheckoutContainer,
  CheckoutHeader,
  CheckoutForm,
  FormTitle,
  ShippingForm,
  DeliveryInfoForm,
  RightSide,
  LeftSide,
  ShoppingCart,
  AdressFormContainer,
  ProductContainer,
  AddRemoveContainer,
  TotalsContainer,
  Separator,
  Subtotal,
  OrderButton,
  ProductGrid,
  FadingBackground,
  ImageContainer,
  DetailsContainer
} from "./Checkout.styled.js";
import { useEffect, useState } from "react";
import { ModalProvider } from "styled-react-modal";
import StockInfoModal from "../../Utilities/Modals/StockInfoModal/StockInfoModal";
import { loadStripe } from "@stripe/stripe-js";
import { StickyButtonDiv } from "../../about/About.styles.js";

export default function Checkout() {
  let [cart, setCart] = useState([]);
  let localCart = localStorage.getItem("cart");
  // creating local states to control the input fields
  const [userData, setUserData] = useState("");
  const [buyer, setBuyer] = useState("");
  const [products, setProducts] = useState("");
  const [email, setEmail] = useState("");
  const [first_name, setFirst] = useState("");
  const [last_name, setLast] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [street, setStreet] = useState("");
  const [street_number, setNumber] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const [scenario, setScenario] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    localCart = JSON.parse(localCart);
    if (localCart) setCart(localCart);

    if (localStorage.getItem("bagsAuth")) {
      const url =
        "https://bag-for-everyone.propulsion-learn.ch/backend/api/user/me/";

      const config = {
        method: "GET",
        headers: new Headers({
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("bagsAuth")).bagsToken
          }`,
        }),
      };

      fetch(url, config)
        .then((response) => response.json())
        .then((data) => setUserData(data));
    }
  }, [JSON.parse(localCart)?.length]);

  // If the user is logged in... autofill his information
  useEffect(() => {
    if (userData) {
      handleAutoFill();
    }
  }, [userData]);

  const handleAutoFill = (e) => {
    setFirst(userData[0].first_name);
    setLast(userData[0].last_name);
    setBuyer(userData[0].id);
    setEmail(userData[0].email);
    setStreet(userData[0].street);
    setNumber(userData[0].street_number);
    setZip(userData[0].zip);
    setCity(userData[0].city);
    setCountry(userData[0].country);
  };

  //Order submit handler
  const handleOrderSubmit = async (e) => {
    e.preventDefault();

    // create order
    await handleCreateOrder();

  };

  // handle inputs
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleFirstChange = (e) => {
    setFirst(e.target.value);
  };
  const handleLastChange = (e) => {
    setLast(e.target.value);
  };
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
  const handleZipChange = (e) => {
    setZip(e.target.value);
  };
  const handleStreetChange = (e) => {
    setStreet(e.target.value);
  };
  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleCreateOrder = async () => {
    let apiCart = cart.map((product) => product.id);
    apiCart = JSON.stringify(apiCart);

    const url =
      "https://bag-for-everyone.propulsion-learn.ch/backend/api/order/";

    const body = {
      products: apiCart,
      email: email,
      first_name: first_name,
      last_name: last_name,
      street: street,
      street_number: street_number,
      zip: zip,
      city: city,
      country: country,
      phone: phone,
      shopping_note: note,
    };

    const config = {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(body)
    };

    await fetch(url, config)
      .then((response) => response.json())
      .then((data) => handlePayOrder(data.id));
  };

  //stripe logic
  const handlePayOrder = async (orderId) => {
    let stripeCart = [];
    const stripeCounter = {};
    cart.forEach((elem) => {
      if (!stripeCounter.hasOwnProperty(elem.stripe_price)) {
        stripeCounter[elem.stripe_price] = 1;
      } else {
        stripeCounter[elem.stripe_price] += 1;
      }
    });
    let stripeList = Object.entries(stripeCounter);
    stripeList.forEach((elem) => {
      stripeCart.push({ price: elem[0], quantity: elem[1] });
    });
    redirectToCheckout(stripeCart, orderId);
  };

  const [stripeError, setStripeError] = useState(null);
  if (stripeError) alert(stripeError);
  const [loading, setLoading] = useState(false);
  let stripePromise;

  const redirectToCheckout = async (list, orderId) => {
    const checkoutOptions = {
      lineItems: list,
      mode: "payment",
      successUrl: `${window.location.origin}/orderconfirmation/${orderId}`,
      cancelUrl: `${window.location.origin}/checkout`,
    };
    setLoading(true);

    const stripe = await getStripe();

    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    // console.log("Stripe checkout error", error);

    if (error) setStripeError(error.message);
    setLoading(false);
  };

  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
    }
    return stripePromise;
  };

  //cart logic
  const handleAddToCart = (product) => {
    const amountInCart = cart?.filter(
      (item) => item?.id === product?.id
    ).length;

    if (product.stock > amountInCart) {
      let cartCopy = [...cart];
      cartCopy.push(product);

      setCart(cartCopy);
      let stringCart = JSON.stringify(cartCopy);
      localStorage.setItem("cart", stringCart);
    } else {
      setScenario("low stock");
      toggleModal();
    }
  };

  const handleRemoveFromCart = (product) => {
    let cartCopy = [...cart];
    const index = cartCopy.map((object) => object.id).indexOf(product.id);
    cartCopy.splice(index, 1);

    setCart(cartCopy);
    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart);
  };

  const handleClearCart = (e) => {
    e.preventDefault();
    let cartCopy = [...cart];
    cartCopy = [];
    setCart(cartCopy);
    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart);
  };

  //Pop-up logic
  function toggleModal(e) {
    setOpacity(0);
    setIsOpen(!isOpen);
  }

  const resetIsOpen = () => {
    setIsOpen(false);
  };

  return (
    <>
      <ModalProvider backgroundComponent={FadingBackground}>
        <CheckoutContainer>
          <CheckoutHeader>Checkout</CheckoutHeader>
          <CheckoutForm onSubmit={(e) => handleOrderSubmit(e)}>
            <LeftSide>
              <FormTitle>1. Shipping</FormTitle>
              <ShippingForm>
                <input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Email adress"
                  onChange={handleEmailChange}
                ></input>
                <input
                  type="text"
                  name="first_name"
                  value={first_name}
                  placeholder="First Name"
                  onChange={handleFirstChange}
                ></input>
                <input
                  type="text"
                  name="last_name"
                  value={last_name}
                  placeholder="Last Name"
                  onChange={handleLastChange}
                ></input>
                <AdressFormContainer>
                  <input
                    type="text"
                    name="street"
                    value={street}
                    placeholder="Street"
                    onChange={handleStreetChange}
                  ></input>

                  <input
                    type="number"
                    name="street_number"
                    value={street_number}
                    placeholder="Street Number"
                    onChange={handleNumberChange}
                  ></input>

                  <input
                    type="number"
                    name="zip"
                    value={zip}
                    placeholder="ZIP"
                    onChange={handleZipChange}
                  ></input>

                  <input
                    type="text"
                    name="city"
                    value={city}
                    placeholder="City"
                    onChange={handleCityChange}
                  ></input>

                  <input
                    type="text"
                    name="country"
                    value={country}
                    placeholder="Country"
                    onChange={handleCountryChange}
                  ></input>
                </AdressFormContainer>
                <input
                  type="phone"
                  name="phone"
                  value={phone}
                  placeholder="Phone"
                  onChange={handlePhoneChange}
                ></input>
              </ShippingForm>
              <FormTitle>2. Delivery Information</FormTitle>
              <p>
                The products are shipped regularly by mail from Lesvos, Greece
                to the destination address. Normally a delivery takes 12-14
                weekdays, but there may be some delays. If you are unsure about
                your delivery, please do not hesitate to contact us.
              </p>

              <FormTitle>3. Shipping Notes</FormTitle>
              <p style={{paddingBottom: 0}}>
                At this point you have the opportunity to provide us with any
                additional order information. For example, specific color
                requests for the "Essential Bag" product, special packaging
                requests or additional address information. Please note that we
                cannot take all special requests into account, but we will do
                our best to fulfill your wishes.
              </p>
              <DeliveryInfoForm>
                <textarea
                  name="shippingnotes"
                  value={note}
                  style={{fontSize:"18px"}}
                  placeholder="Share your additional requests and comments... "
                  onChange={handleNoteChange}
                ></textarea>
              </DeliveryInfoForm>

              <FormTitle>4. Payment</FormTitle>
              <p>
                After clicking the "Place Order" buttone you will be redirected
                to the payment section. Once you proceed the payment, your order
                is fulfilled
              </p>

              <FormTitle>5. Order Confirmation</FormTitle>
              <p>
                As soon as your payment process is completed, you will receive
                an order confirmation by email.
              </p>
            </LeftSide>
            <RightSide>
              <ShoppingCart>
                <span style={{ fontWeight: "bold", fontSize: "28px", padding: "2rem 0 0 1rem", display:"flex", alignSelf:"center"}}>
                  Order Summary
                </span>
                <ProductGrid>
                  {cart
                    ?.filter(
                      (value, index, self) =>
                        index ===
                        self.findIndex(
                          (t) =>
                            t?.place === value?.place && t?.name === value?.name
                        )
                    )
                    .map((product, idx) => {
                      return (
                        <>
                          <ProductContainer key={idx}>
                            <ImageContainer>
                            <img
                              src={product?.image}
                              alt="product in cart"
                            ></img>
                            </ImageContainer>
                            <DetailsContainer>
                              { product?.name.length > 15 ?
                              <span className="ellipsis">{product?.name}</span> :
                              <span>{product?.name}</span>
                              }
                              <span>CHF {product?.price}</span>
                              <AddRemoveContainer>
                                <div onClick={() => handleAddToCart(product)}>
                                  +
                                </div>
                                <div>
                                {
                                  cart?.filter(
                                    (item) => item?.id === product?.id
                                  ).length
                                }</div>
                                <div
                                  onClick={() => handleRemoveFromCart(product)}
                                >
                                  -
                                </div>
                              </AddRemoveContainer>
                            </DetailsContainer>
                          </ProductContainer>
                        </>
                      );
                    })}
                </ProductGrid>
                <button
                  type="button"
                  name="orderItems"
                  onClick={handleClearCart}
                >
                  Clear Cart
                </button>

                <TotalsContainer>
                  <Separator></Separator>
                  <Subtotal>
                    <div>Subtotal</div>
                    <div>
                      CHF {cart?.reduce((prev, curr) => prev + curr?.price, 0)}
                    </div>
                  </Subtotal>
                </TotalsContainer>
              </ShoppingCart>

              <OrderButton type="submit" onClick={handleOrderSubmit}>
                Place Order
              </OrderButton>
            </RightSide>
          </CheckoutForm>
          <StickyButtonDiv>
            <button onClick={() => navigate("/story")}>Story</button>
          </StickyButtonDiv>
          <StockInfoModal
            isOpen={isOpen}
            scenario={scenario}
            onClick={resetIsOpen}
          />
        </CheckoutContainer>
      </ModalProvider>
    </>
  );
}
