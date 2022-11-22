import Shop from "../../components/ShopSection/Shop/Shop.js";
import Navbar from "../../components/navbar/Navbar.js";
import Footer from "../../components/footer/Footer.js";
import { PageWrapper } from "./ShopPage.styled.js";


export default function ShopPage() {
  return (
    <>
      <PageWrapper>
        <Navbar />
        <Shop />
        <Footer />
      </PageWrapper>
    </>
  );
}
