
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Homes from './Component/HomePage/Homes/Homes';
import Footer from './Component/HomePage/Footer/Footer';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import Header from './Component/HomePage/Header/Header';
import Banner from './Component/HomePage/Banner/Banner';
import Explores from './Component/Explores/Explores';
import Orders from './Component/Orders/Orders';
import AllOrders from './Component/AllOrders/AllOrders';
import ManageProduct from './Component/ManageProduct/ManageProduct';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Homes></Homes>
          </Route>
          <Route path="/homes">
            <Homes></Homes>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/banner">
           <Banner></Banner>
          </Route>
          <Route path="/explore">
           <Explores></Explores>
          </Route>
          <Route path="/order">
           <Orders></Orders>
          </Route>
          <Route path="/allOrders">
           <AllOrders></AllOrders>
          </Route>
          <Route path="/manageProduct">
           <ManageProduct></ManageProduct>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
     
    </div>
  );
}

export default App;
