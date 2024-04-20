import React from "react";
import Heads from "./Heads";
import Navbar from "./Navbar";
import List from "./List";
import Footer from "./Footer,";

const Main = () => {
  return (
    <div className="Main">
      <Navbar />
      <Heads />
      <List />
      <Footer />
    </div>
  );
};

export default Main;
