// import { useNavigate } from "react-router-dom";
import {
  OrderConfirmationContainer,
  Content,
} from "./OrderConfirmation.styled.js";
import { TbHeartHandshake } from "react-icons/tb";
import { IconContext } from "react-icons";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function OrderConfirmation() {
  const { orderId } = useParams();
  let [cart, setCart] = useState([]);
  let localCart = localStorage.getItem("cart");

  useEffect(() => {
    //get local cart details
    localCart = JSON.parse(localCart);
    if (localCart) setCart(localCart);
  }, []);

  useEffect(() => {
    if (cart) {
      //update the order status to paid
      handleOrderStatusUpdate(orderId);

      //get the product update set
      const updateSet = handleGetStockUpdateSet();

      //handle the stock updates
      updateProductStocks(updateSet);
    }
  }, [cart]);

  const handleOrderStatusUpdate = (orderId) => {
    const orderStatusUpdate = {
      status: "PA",
    };
    const bodyData = JSON.stringify(orderStatusUpdate);

    const config = {
      method: "PATCH",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("bagsAuth")).bagsToken
        }`,
      }),
      body: bodyData,
    };

    fetch(
      `https://bag-for-everyone.propulsion-learn.ch/backend/api/order/${orderId}/`,
      config
    ).then((response) => {
      return response.json();
    });
  };

  const updateProductStocks = (updateSet) => {
    updateSet.map((set) => {
      handleUpdateProductStock(set.product, set.amount);
    });

    localStorage.removeItem("cart")
  };

  const handleGetStockUpdateSet = () => {
    const productsReduced = cart?.filter(
      (value, index, self) =>
        index ===
        self.findIndex(
          (t) => t?.place === value?.place && t?.name === value?.name
        )
    );

    let productAmountSet = [];
    productsReduced?.forEach((product) => {
      const amount = cart?.filter((item) => item?.id === product?.id).length;
      
      let obj = {
        product: product,
        amount: amount,
      };

      productAmountSet.push(obj);
    });

    return productAmountSet;
  };

  const handleUpdateProductStock = (product, amountSold) => {
    const stockUpdateData = {
      stock: product.stock - parseInt(amountSold),
    };

    const bodyData = JSON.stringify(stockUpdateData);

    const config = {
      method: "PATCH",
      headers: new Headers({
        "Content-Type": "application/json",
        // Authorization: `Bearer ${
        //   JSON.parse(localStorage.getItem("bagsAuth")).bagsToken
        // }`,
      }),
      body: bodyData,
    };

    fetch(
      `https://bag-for-everyone.propulsion-learn.ch/backend/api/product/${product.id}/`,
      config
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {});
  };

  return (
    <>
      <OrderConfirmationContainer>
        <IconContext.Provider value={{ size: "400px", color: "#DABC39" }}>
          <TbHeartHandshake />
        </IconContext.Provider>
        <Content>
          <p style={{ fontWeight: "bold" }}>
            Thank you for submitting your order!
          </p>
          <p>
            Shortly you will receive order confirmation on your email address.
            Please get in touch with us if you do not receive any.
          </p>
        </Content>
      </OrderConfirmationContainer>
    </>
  );
}
