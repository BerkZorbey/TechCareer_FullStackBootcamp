import './App.css';
import { suppliers } from './data/suppliers';

function App() {
  return (<>
    <table className="tableSuppliers">
      <thead>
        <tr>
          <td>Id</td>
          <td>Company Name</td>
          <td>Contact Name</td>
          <td>Contact Title</td>
        </tr>
      </thead>
      <tbody>
          {
              suppliers.map(data => {
                return <>
                  <tr>
                  <td>{data.id}</td>
                  <td>{data.companyName}</td>
                  <td>{data.contactName}</td>
                  <td>{data.contactTitle}</td>
                  </tr>  
                </>
              })
          }
      </tbody>
    </table>
  
  </>
  );
}

export default App;
