import { useDispatch, useSelector } from "react-redux";
import { buy_cake } from "../redux/cake/cakeActions";

const CakeContainer = () => {
   const numOfCakes = useSelector((state) => state.cakes.numOfCakes);
   const dispatch = useDispatch();

   return (
      <div>
         <h3>Number Of Cakes : {numOfCakes}</h3>
         <button onClick={() => dispatch(buy_cake())}>Buy Cake</button>
      </div>
   );
};

export default CakeContainer;
