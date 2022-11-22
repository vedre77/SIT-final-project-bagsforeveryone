import { useState, useEffect } from 'react';
import { PageContainer, Grid, ElementContainer, ContentContainer, IntroText } from './UpdateProductStock.styled'

export default function UpdateProductStock() {
  const [products, setProducts] = useState([])
  const [updateValue, setUpdateValue] = useState();
  const [refresh, setRefresh] = useState(false);
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
    fetch("https://bag-for-everyone.propulsion-learn.ch/backend/api/product/category/SH/", config)
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setProducts(data);
      });

  }, [refresh]);

  const handleChangeInput = (e) => {
    setUpdateValue(e.target.value)
  }


  const handleUpdateProductStock = (product) => {


    const stockUpdateData = {
      // stock: 4
      stock: product.stock + parseInt(updateValue)
    }

    const bodyData = JSON.stringify(stockUpdateData)

    const config = {
      method: "PATCH",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }),
      body: bodyData
    };

    fetch(`https://bag-for-everyone.propulsion-learn.ch/backend/api/product/${product.id}/`, config)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setRefresh(!refresh);
      });


  }

  return (
    <PageContainer>
      <IntroText>Update Product Stock</IntroText>
      <Grid>
        {
          products?.sort((firstItem, secondItem) => {
            return firstItem.stock - secondItem.stock
          }).map((product, idx) => {

            return <>
              {  product.stock > 5 ?
              <ElementContainer key={idx} style={{background: "rgba(0, 128, 0, 0.25)"}} >

                <img src={product.image} />
                <ContentContainer>
                  <div>Name: {product.name}</div>                
                  <p>Current in stock:
                    <span style={{ color: "green"}}> {product.stock}</span>
                  </p>
                  <label> Add to stock: <input type="number" min="1" placeholder='0' onChange={(e) => handleChangeInput(e)}></input></label>
                  <button onClick={() => handleUpdateProductStock(product)}>Update product stock</button>
                </ContentContainer>
              </ElementContainer> : 
              
              product.stock > 0 ?

              <ElementContainer key={idx} style={{background: "rgba(255, 166, 0, 0.25)"}} >

              <img src={product.image} />
              <ContentContainer>
                <div>Name: {product.name}</div>
                  <p>Current in stock:
                    <span style={{ color: "orange"}}> {product.stock}</span>
                  </p>
                <label> Add to stock: <input type="number" min="1" placeholder='0' onChange={(e) => handleChangeInput(e)}></input></label>
                <button onClick={() => handleUpdateProductStock(product)}>Update product stock</button>
              </ContentContainer>
            </ElementContainer> : 
             <ElementContainer key={idx} style={{background: "rgba(255, 0, 0, 0.25)"}} >

             <img src={product.image} />
             <ContentContainer>
               <div>Name: {product.name}</div>
               <p>Current in stock:
                 <span style={{ color: "red"}}> {product.stock}</span>
               </p>
               <label> Add to stock: <input type="number" min="1" placeholder='0' onChange={(e) => handleChangeInput(e)}></input></label>
               <button onClick={() => handleUpdateProductStock(product)}>Update product stock</button> 
             </ContentContainer>
           </ElementContainer> 
          }
            </>
          })
        }
      </Grid>
    </PageContainer>
  )
}

