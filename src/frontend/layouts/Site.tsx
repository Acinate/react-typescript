import * as React from "react";

import Footer from "./../components/Footer/Footer";
import Header from "./../components/Header/Header";
import Navbar from "./../components/Navbar/Navbar";

export interface IBlogLayout {}

export default class Site extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Header />
        <Footer />
      </>
    );
  }
}
