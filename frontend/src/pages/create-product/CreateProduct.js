import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormWrapper, CreatePage } from './CreateProduct.styles';

const CreateNewProduct = () => {

    const [productImage, setProductImage] = useState(null)
    const [created, setCreated] = useState(false) // for button display or navigation
    const [productData, setProductData] = useState(
        {title: "",
        category: "",
        description: "",
        material: "",
        dimensions: "",
        price: ""
        }
    )

    const navigate = useNavigate();
    // const localToken = localStorage.getItem("token");

    const handleChange = e => {
        setProductData(prevFormData => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        })
    }
    
        const handleUpload = e => {
            const imageUrl = e.target.files;
            setProductImage(imageUrl[0]);
          }
          
          const CreateProduct = e => {
            e.preventDefault();
            const formData = new FormData();

            formData.append("title", productData.title);
            formData.append("category", productData.category);
            formData.append("description", productData.description);
            formData.append("material", productData.material);
            formData.append("dimensions", productData.dimensions);
            formData.append("price", productData.price);
            formData.append("image", productImage);
            const url = "https://bags.propulsion-learn.ch/backend/api/products/new/"
            const config = {
                method: "POST",
                headers: {           
                    // "Authorization": `Bearer ${localToken}`
                },
                body: formData,
            }
            fetch(url, config)
                .then(response => response.json())
                .then(data => {
                    setCreated(true)
                    setTimeout(() => navigate('/'), 2000)
                    return data.response
                })
        }
   
        return (
            <CreatePage>
                <Navbar />
                <p>Create a new product:</p>
                <form>
                    <FormWrapper>
                        <label>
                        Title *
                        </label>
                        <input type="text" name="title" onChange = {handleChange} required></input>
                        <label>
                        Category *
                        </label>
                        <select value={productData.category} name="category" onChange={handleChange} required>
                            <option value="">Select a value ...</option>
                            <option value="B">Bag</option>
                            <option value="P">Pouch</option>
                        </select>
                        <label>
                        Description *
                        </label>
                        <input type="text" name="description" onChange = {handleChange} required></input>
                        <label>
                        Material *
                        </label>
                        <input type="text" name="material" onChange = {handleChange} required></input>
                        <label>
                        Dimensions *
                        </label>
                        <input type="text" name="dimensions" onChange = {handleChange} required></input>
                        <label>
                        Price *
                        </label>
                        <input type="number" name="price" min={0} onChange = {handleChange}></input>
                        <input id="select" multiple type='file' name='image' accept='image/' onChange={e => handleUpload(e)}></input>
                        <label htmlFor="select" />
                        <button type={"submit"} onClick={CreateProduct}>{created ? 'SUCCESS!' : 'Created'}</button>
                    </FormWrapper>
                </form>
            </CreatePage>
        )
}
    


export default CreateNewProduct