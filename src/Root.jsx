import React from "react";
import PropTypes from "prop-types";

import Header from "./components/Header";
import Footer from "./components/Footer";


const Root = (props) =>{
  const {children} = props;
  return (
    <div>
      <Header />
        <div className="jumbotron2">
            <div className="container">
            {children}
            </div>
        </div>
      <Footer />
    </div>
  );
};

Root.defaultProps = {
  children: null
};
Root.propTypes = {
  children: PropTypes.element
};
export default Root;