
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Homes from './Component/HomePage/Homes/Homes';
import Footer from './Component/HomePage/Footer/Footer';
import Login from './Component/Login/Login';
import Header from './Component/HomePage/Header/Header';
import Banner from './Component/HomePage/Banner/Banner';
import Explores from './Component/Explores/Explores';

function App() {
  return (
    <div className="App">
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
          <Route path="/banner">
           <Banner></Banner>
          </Route>
          <Route path="/explore">
           <Explores></Explores>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
     
    </div>
  );
}

export default App;
