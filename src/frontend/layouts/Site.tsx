import * as React from "react";

import Footer from "./../components/Footer/Footer";
import Navbar from "./../components/Navbar/Navbar";
import Home from "../views/Site/Home";

export interface ISiteLayout { }

export default class Site extends React.Component {
  render() {
    return (
      <>
        <div className="app-navbar">
          <Navbar />
        </div>
        <div className="app-content">
          <Home />
        </div>
        <div className="app-footer">
          <Footer />
        </div>
      </>
    );
  }
}
