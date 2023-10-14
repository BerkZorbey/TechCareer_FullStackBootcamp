import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import PageContent from './components/PageContent';
import Footer from './components/Footer';

function App() {
  return (<>
    <Navbar></Navbar>
    <Header></Header>
    <PageContent></PageContent>
    <Footer></Footer>
    </>
  );
}

export default App;
