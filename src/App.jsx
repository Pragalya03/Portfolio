import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";
const siteProps = {
  name: "Pragalya S",
  title: "Computer Science and Engineering Student",
  email: "pragalya03@gmail.com",
  gitHub: "Pragalya03",
  instagram: "the_cool.1",
  linkedIn: "pragalya-s-40b434291",
  medium: "",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
