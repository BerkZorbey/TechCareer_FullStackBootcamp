import React from 'react';
import { Grid , TextField, Button } from '@mui/material';
import { useFormik } from "formik";
import { object, string ,number} from 'yup';
import axios from 'axios';

function AddProduct() {
  const AddProductSchema = object().shape({
    name: string().max(50, "Çok uzun").required("Boş bırakılamaz"),
    stock: number().required("Boş bırakılamaz"),
    unitPrice: number().required("Boş bırakılamaz"),
    quantityPerUnit: string().required("Boş bırakılamaz")
  });  

    const formik = useFormik({
        initialValues: {
          name: '',
          stock:0,
          unitPrice:0,
          quantityPerUnit:''
        },
        validationSchema: AddProductSchema,
        onSubmit: values => {
          addProduct(values);
        },
      });
      const addProduct = (data) => {
        axios.post("https://northwind.vercel.app/api/products", data)
          .then(res => {
            alert("Product added");
          })
      }
  
  return (<>
   <form  onSubmit={formik.handleSubmit}>
      <Grid container>
            <Grid item xs={12} lg={6}>
                <TextField name='name' label="Name" variant="standard" type='text' onChange={formik.handleChange}
                value={formik.values.name} />
                {
                  formik.errors.name ? <div style={{ color: "red" }}>{formik.errors.name}</div> : <></>
                }
            </Grid>
            <Grid item  xs={12} lg={6}>
                <TextField name='stock' label="Stock" variant="standard" type='number' onChange={formik.handleChange}
                value={formik.values.stock} /> 
                {
                  formik.errors.stock ? <div style={{ color: "red" }}>{formik.errors.stock}</div> : <></>
                }
            </Grid> 
            <Grid item  xs={12} lg={6}>
                <TextField name='unitPrice' label="Unit Price" variant="standard" type='number' onChange={formik.handleChange}
                value={formik.values.unitPrice} /> 
                {
                  formik.errors.unitPrice ? <div style={{ color: "red" }}>{formik.errors.unitPrice}</div> : <></>
                } 
            </Grid>
            <Grid item  xs={12} lg={6}>
                <TextField name='quantityPerUnit' label="Quantity Per Unit" variant="standard" type='text' onChange={formik.handleChange}
                value={formik.values.quanitityPerUnit} />   
                {
                  formik.errors.quantityPerUnit ? <div style={{ color: "red" }}>{formik.errors.quantityPerUnit}</div> : <></>
                } 
            </Grid>
            <Grid item  xs={12} lg={6}>
                <Button variant="contained" type='submit'>Add</Button>
            </Grid>
      </Grid>
  </form>
  </>
  )
}

export default AddProduct