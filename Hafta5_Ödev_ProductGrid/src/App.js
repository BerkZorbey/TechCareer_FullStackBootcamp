import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';


function App() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'Name',
      editable: false,
      width: 250
    },
    {
      field: 'unitPrice',
      headerName: 'Unit Price',
      type: 'number',
      width: 250,
      editable: false,
    },
    {
      field: 'unitsInStock',
      headerName: 'Stock',
      type: 'number',
      width: 250,
      editable: false,
    },
    {
      field: 'delete',
      headerName: 'Delete',
      headerAlign:'right',
      width: 250,
      editable: false,
      renderCell: (params) => (
        <Button variant="contained" color="primary" style={{marginLeft:'auto',marginRight:'auto'}} onClick={() => deleteProduct(params.id)}>
        Delete
      </Button>
      )
    }
  ];
  const [rows, setrows] = useState([]);

  useEffect(() => {
    getProduct();
  }, [])

  const getProduct = () => {
    axios.get("https://northwind.vercel.app/api/products")
    .then(res => setrows(res.data));
  }
  const deleteProduct = (id) => {
    axios.delete(`https://northwind.vercel.app/api/products/${id}`)
    .then(() => alert("Product deleted !"))
    .finally(() => getProduct());
  }
  return (<>
    <DataGrid columns={columns} autoHeight rows={rows} getRowClassName={(params) => params.row.unitsInStock <= 0 ? `super-app-theme--negative` : ``  }></DataGrid>
  </>
  );
}

export default App;
