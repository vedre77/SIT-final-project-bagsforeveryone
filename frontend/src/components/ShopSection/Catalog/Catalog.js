import ProductCard from "../ProductCard/ProductCard.js";
import { CatalogGrid, PageHeader } from "./Catalog.styled.js";
import { useState, useEffect } from 'react';



function Catalog(props) {

  const [products, setProducts] = useState()
  const [after, setAfter] = useState([])
  const [page, setPage] = useState()
  const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY5NjQwNjYwLCJpYXQiOjE2NjgwODU0NjAsImp0aSI6IjU4NjNkOWY1MjUxZDRiNzM4NzY0NTc3MTNkZWI3YTk5IiwidXNlcl9pZCI6MX0.9gMDpZdC1yI3Os1QWDpmDOU-KU1XVeo-m-Qz-nuYiBQ";

  useEffect(() => {

    const config = {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }),
    };
    fetch("https://bag-for-everyone.propulsion-learn.ch/backend/api/product/", config)
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setProducts(data);
      });
     
  }, [props.page] );

  useEffect(() => {
       if (products) {
   
        if (page === "donate") {
          let limitProducts = products?.filter(product => {
            return (product.category === "DO")
          })
          let sortLimitedProducts = limitProducts?.sort((firstItem, secondItem) => 
            firstItem.id - secondItem.id)
          setAfter(sortLimitedProducts)

        }
        else {
          let sortLimitedProducts = []

          const limitProducts = products?.filter(product => {
            return (product.name === "Shopper Gold" || product.name === "Essential Bag")
          })

          sortLimitedProducts = limitProducts?.sort((firstItem, secondItem) => 
            firstItem.id - secondItem.id)
    
          setAfter(sortLimitedProducts)
          }
       }
       setPage(props.page)
  }, [products, props.page])

  return (
    <>
      <PageHeader>
        {
        props.page === "shop" ?
        <p>
          Welcome to the online shop of{" "}
          <span style={{ fontWeight: "bold" }}>bagforeveryone</span>
        </p> : 
      <p>
      Would you like to support our project without purchasing an article? No problem, just pick your desired way of 
      {" "}
      <span style={{ fontWeight: "bold" }}>donating</span>
      {" "} below
    </p>
    }
      </PageHeader>
        <CatalogGrid>
          {after.map((product, idx) => {
            return <ProductCard key={idx} product={product} category={page} />;
          })}
        </CatalogGrid>
    </>
  );
}

export default Catalog;
