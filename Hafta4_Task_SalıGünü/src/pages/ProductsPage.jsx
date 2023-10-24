import React, { useEffect, useState } from 'react'
import axios from 'axios'

function ProductsPage() {
    const [products, setproducts] = useState([])

    useEffect(() => {
        loadProducts()
    },[])

    const loadProducts = () => {
        axios.get('https://northwind.vercel.app/api/products')
        .then(res => setproducts(res.data))
    }
    const deleteProduct = (id) => {
        axios.delete(`https://northwind.vercel.app/api/products/${id}`)
        .then(res => {
            alert("Product is deleted succesfully.")
            loadProducts()
        } )
    }

  return (<>
    <table>
        <thead>
            <th>Id</th>
            <th>Name</th>
            <th>UnitPrice</th>
            <th>Units In Stock</th>
            <th>Delete</th>
        </thead>
        <tbody>
            {
                products && products.map(item => {
                    return <tr style={{color: item.unitsInStock > 0 ? 'black' : 'red' }}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.unitPrice}</td>
                        <td>{item.unitsInStock}</td>
                        <button onClick={() => deleteProduct(item.id)}>Delete</button>
                    </tr>
                    
                })
            }
        </tbody>
    </table>
  </>
  )
}

export default ProductsPage