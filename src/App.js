import React from "react";
import "./css/App.css";
// import Search from "./Components/Search";
import Header from "./Header";
import Footer from "./Footer";
// import Restaurant from "./Components/Restaurant";
import { BrowserRouter } from "react-router-dom";
// import MenuData from "./Data.json"
import Router from "./routes"

function App() {
  return (
    
      <BrowserRouter>
        <div className="App">
        <Header />
        <Router />
        <Footer />
        </div>
      </BrowserRouter>
    
  );
}

export default App;
