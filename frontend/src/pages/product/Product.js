import Footer from "../../components/footer/Footer.js";
import Navbar from "../../components/navbar/Navbar.js";
import ProductPageSidebar from "../../components/ShopSection/ProductPageSidebar/index.js";
import { PageWrapper } from "./Product.styled";
import { useParams } from 'react-router-dom';

export default function Product() {
   const {category} = useParams()
  return (
    <>
      <PageWrapper>
        <Navbar />
        <ProductPageSidebar category={category}/>
        <Footer />
      </PageWrapper>
    </>
  );
}
