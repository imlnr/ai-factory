import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Mainroutes from './AllRoutes/Mainroutes';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Mainroutes/>
        {/* <Footer/> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
