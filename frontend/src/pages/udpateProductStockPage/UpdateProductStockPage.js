import Navbar from "../../components/navbar/Navbar.js";
import Footer from "../../components/footer/Footer.js";
import { PageWrapper } from './UpdateProductStockPage.styles';
import UpdateProductStock from "../../components/adminSection/updateProductStock/UpdateProductStock.js";


export default function UpdateProductStockPage() {
  return (
    <>
      <PageWrapper>
        <Navbar />
        <UpdateProductStock />
        <Footer />
      </PageWrapper>
    </>
  );
}
