import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AddProduct() {
    const [product, setproduct] = useState({
        name : "",
        unitPrice : 0,
        unitsInStock : 0
    })
    var navigate = useNavigate();
    const addProduct = () => {
        setproduct({...product})
        if(product.name === '' || product.unitPrice === 0 || product.unitsInStock === 0){
            alert("No Empty Space Can Be Left")
        }
        else{
            axios.post('https://northwind.vercel.app/api/products',product)
            .then(res => { 
                alert("Product is added succesfully.")
                navigate(-1)
            })
        }
        
    }


  return (<>
  <br />
    <label htmlFor="name">Name</label>
    <input type="text" id="name" onChange={(e) =>   product.name = e.target.value  } />
    <br />
    <label htmlFor="unitPrice">Unit Price</label>
    <input type="number" id="unitPrice" onChange={(e) =>  product.unitPrice = e.target.value } />
    <br />
    <label htmlFor="unitsInStock">Units In Stock</label>
    <input type="number" id="unitsInStock" onChange={(e) =>  product.unitsInStock = e.target.value } />
    <br />
    <button onClick={() => addProduct()}>Add</button>
  </>
  )
}

export default AddProduct