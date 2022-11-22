import Navbar from "../../components/navbar/Navbar.js";
import Footer from "../../components/footer/Footer.js";
import { PageWrapper } from "./createProductPage.styled.js";
import CreateNewProduct from "../../components/adminSection/createNewProduct/CreateNewProduct.js";


export default function CreateNewProductPage() {
  return (
    <>
      <PageWrapper>
        <Navbar />
        <CreateNewProduct />
        <Footer />
      </PageWrapper>
    </>
  );
}
