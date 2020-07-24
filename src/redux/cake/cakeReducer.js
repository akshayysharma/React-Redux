import { BUY_CAKE } from "./cakeTypes";

const initState = {
  noOfCake: 10,
};

const cakeReducer = (state = initState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCake: state.noOfCake - 1,
      };
    default:
      return state;
  }
};

export default cakeReducer;
