import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <main>
      <Router>
        <Navbar></Navbar>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
      </Router>
      <Footer />
    </main>
  );
}

export default App;
