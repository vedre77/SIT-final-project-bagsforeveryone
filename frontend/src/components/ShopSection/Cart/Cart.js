import { Content, ProductContainer, AddRemoveContainer } from './Cart.styled';
import {useState, useEffect} from 'react';



function Cart(props) {
  let [cart, setCart] = useState([]);
  let localCart = localStorage.getItem("cart");


  useEffect(() => {
    setCart(props.cart)
    localCart = JSON.parse(localCart);
    if (localCart) setCart(localCart);
  }, []);

  const handleAddToCart = (product) => {
    let cartCopy = [...cart];
    cartCopy.push(product);

    setCart(cartCopy);
    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart);
  };

  const handleRemoveFromCart = (product) => {
    let cartCopy = [...cart];
    const index = cartCopy.map((object) => object.id).indexOf(product.id);
    cartCopy.splice(index, 1);

    setCart(cartCopy);
    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart);
  };

  return (
    <>
      <Content>
        <>
          {cart.filter((value, index, self) =>
                index === self.findIndex((t) => t.place === value.place && t.name === value.name))
            .map((product, idx) => {
              return (
                <>
                  <ProductContainer key={idx}>
                    <img src={product.image} alt="product in cart"></img>
                    <div>
                      <span>{product.name}</span>
                      <span>CHF {product.price}</span>
                      <AddRemoveContainer>
                        <div onClick={() => handleAddToCart(product)}>+</div>
                        {cart?.filter((item) => item.id === product.id).length}
                        <div onClick={() => handleRemoveFromCart(product)}>
                          -
                        </div>
                      </AddRemoveContainer>
                    </div>
                  </ProductContainer>
                </>
              );
            })}
        </>
      </Content>
    </>
  );
}

export default Cart;
