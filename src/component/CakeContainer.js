import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

const CakeContainer = (props) => {
  return (
    <div>
      <h2>Number of cake - {props.noOfCakes}</h2>
      <button onClick={props.buyCake}>Click Me</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    noOfCakes: state.noOfCake,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
