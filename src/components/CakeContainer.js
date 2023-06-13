import { connect } from "react-redux";
import { buy_cake } from "../redux/cake/cakeActions";

const CakeContainer = (props) => {
   return (
      <div>
         <h3>Number Of Cakes : {props.numOfCakes}</h3>
         <button onClick={props.buyCake}>Buy Cake</button>
      </div>
   );
};

// 1. state : numOfCakes => to show the data
// 2. dispatch : buy_cake => to decrease data by dispatching an action
// 3. connect => redux => react

const mapStateToProps = (state) => {
   return {
      numOfCakes: state.numOfCakes,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      buyCake: () => dispatch(buy_cake()),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
