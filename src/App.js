import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainBody from "./Components/Body1/MainBody";
import Hero from "./Components/Hero";
import ServiceCont from "./Components/ServiceCont/ServiceCont";
import MainServ from "./Components/Services/MainServ";

import Home from "./Components/Home";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import SignUp from "./Components/SignUp/SignUp";
import Login from "./Components/Login/Login";
import DashBoard from "./Components/DashBoard/DashBoard";
import { GlobalProvider } from "./Components/AppState/GlobalContext";
import LoginModal from "./Components/Login/LoginModal";
import ContactPage from "./Components/ContactPage/ContactPage";
import PrivateRoute from "./Components/AppState/PrivateRoute";
import UbaniProject from "./MrUbani/UbaniProject";
import ProductsCards from "./MrUbani/ProductsCards";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={UbaniProject} />
          <Route path="/product" component={ProductsCards} />
        </Switch>
      </Router>
      {/* <GlobalProvider>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/serv/:id" exact component={ServiceCont} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/login" component={LoginModal} />
            <PrivateRoute path="/contact" exact component={ContactPage} />
      
            <PrivateRoute path="/dashboard" exact component={DashBoard} />
          </Switch>
          <Footer />
        </Router>
      </GlobalProvider> */}
    </div>
  );
}

export default App;
