import Footer from "../../components/footer/Footer.js";
import Navbar from "../../components/navbar/Navbar.js";
import Checkout from "../../components/ShopSection/Checkout/Checkout.js";
import { PageWrapper } from "./CheckoutPage.styled.js";

export default function Product() {
  return (
    <>
      <PageWrapper>
        <Navbar />
        <Checkout />
        <Footer />
      </PageWrapper>
    </>
  );
}
