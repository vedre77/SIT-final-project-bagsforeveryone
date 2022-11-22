import Catalog from "../Catalog/Catalog.js";
import { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { IconContext } from "react-icons";
import Sidebar from "react-sidebar";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  PageSection,
  StickyCartContainer,
  SidebarHeader,
  Content,
  ProductContainer,
  AddRemoveContainer,
  SidebarFooter,
  SubTotalContainer,
  CheckoutContainer,
  FadingBackground

} from "./Shop.styled";
import { useNavigate } from "react-router-dom";
import { ModalProvider } from "styled-react-modal";
import StockInfoModal from "../../Utilities/Modals/StockInfoModal/StockInfoModal";
import { StickyButtonDiv } from "../../about/About.styles.js";

export default function Shop() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  let [cart, setCart] = useState([]);
  let localCart = localStorage.getItem("cart");
  const navigate = useNavigate();
  const {page} = useParams();
  const [pageRouting, setPageRouting] = useState()
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY5NjQwNjYwLCJpYXQiOjE2NjgwODU0NjAsImp0aSI6IjU4NjNkOWY1MjUxZDRiNzM4NzY0NTc3MTNkZWI3YTk5IiwidXNlcl9pZCI6MX0.9gMDpZdC1yI3Os1QWDpmDOU-KU1XVeo-m-Qz-nuYiBQ";
  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const [scenario, setScenario] = useState();
  
  useEffect(() => {

    localCart = JSON.parse(localCart);
    if (localCart) setCart(localCart);

      setPageRouting(page)
    
  }, [JSON.parse(localCart)?.length, page]);

  const onSetSidebarOpen = (open) => {
    setSidebarOpen(open);
  };

  const handleAddToCart = (product) => {

    const amountInCart = cart?.filter(item => item?.id === product?.id).length
      
    if (product.stock > amountInCart) {
    let cartCopy = [...cart];
      cartCopy.push(product);

      setCart(cartCopy);
      let stringCart = JSON.stringify(cartCopy);
      localStorage.setItem("cart", stringCart);
    } else {
      setScenario("low stock")
      toggleModal()
      // alert("This would exceed the available quantity")
    }
  };

const handleRemoveFromCart = (product) => {

  let cartCopy = [...cart];
  const index = cartCopy.map(object => object.id).indexOf(product.id)
  cartCopy.splice(index, 1)

  setCart(cartCopy);
  let stringCart = JSON.stringify(cartCopy);
  localStorage.setItem("cart", stringCart);

}

function toggleModal(e) {
  setOpacity(0);
  setIsOpen(!isOpen);
}

const resetIsOpen = () => {
  setIsOpen(false)
}





return (
    <>
    <ModalProvider backgroundComponent={FadingBackground}>
      <PageSection>
        <Sidebar
          sidebar={
            <>
              <SidebarHeader>
                <IconContext.Provider value={{ size: "80px", className: "arrow"}}>
                  <BsArrowRight onClick={() => onSetSidebarOpen(false)} />
                </IconContext.Provider>
                <p>Cart</p>
              </SidebarHeader>
              <Content>
                <>
                {
                cart.filter((value, index, self) =>
                index === self.findIndex((t) => (
                  t?.place === value?.place && t?.name === value?.name
                ))
                ).map((product, idx) => {
                  return (
                    <div key = {idx}>
                      <ProductContainer>
                        <img src={product?.image} alt="product in cart"></img>
                        <div>
                          <span style={{textAlign:"center"}}>{product?.name}</span>
                          <span>CHF {product?.price}</span>
                          <AddRemoveContainer>
                            <div onClick={() => handleAddToCart(product)}>+</div>
                            {cart?.filter(item => item?.id === product?.id).length}
                            <div onClick={() => handleRemoveFromCart(product)}>-</div>
                          </AddRemoveContainer>
                        </div>
                      </ProductContainer>
                    </div>
                  );
                })}
                </>
              </Content>
              <SidebarFooter>
                <SubTotalContainer>
                  <span>Subtotal</span>
                  <span style={{fontWeight:"bold"}}>
                  CHF {" "}
                    {cart?.reduce((prev, curr) => prev + curr?.price, 0)}                   
                    </span>
                </SubTotalContainer>
                <CheckoutContainer onClick={() => (navigate("/checkout"))}>Checkout</CheckoutContainer>
              </SidebarFooter>
            </>
          }
          open={sidebarOpen}
          pullRight={true}
          onSetOpen={onSetSidebarOpen}
          styles={{
            sidebar: {
              position: "fixed",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              alignItems: "center",
              background: "white",
              width: "20rem",
            },
          }}
        >
          <Catalog page={pageRouting}/>
          <StickyButtonDiv>
                <button onClick={() => navigate("/story")}>Story</button>
          </StickyButtonDiv>
        </Sidebar>
        <StockInfoModal isOpen={isOpen} scenario={scenario} onClick={resetIsOpen}/>
        <StickyCartContainer onClick={() => onSetSidebarOpen(true)}>
            <IconContext.Provider value={{ size: "100px" }}>
              <BsCart2 />
            </IconContext.Provider>
            <div>
              {
              JSON.parse(localCart)?.length != undefined ?
              JSON.parse(localCart)?.length : 0
              }
              </div>
          </StickyCartContainer>
      </PageSection>
      </ModalProvider>
    </>
  );
}
