import { useDispatch, useSelector } from "react-redux";
import { buy_cake } from "../redux/cake/cakeActions";
import { useState } from "react";

const CakeContainer = () => {
   const [numbers, setNumbers] = useState(1);
   const numOfCakes = useSelector((state) => state.cakes.numOfCakes);
   const dispatch = useDispatch();

   return (
      <div>
         <h3>Number Of Cakes : {numOfCakes}</h3>
         <input
            type="text"
            value={numbers}
            onChange={(e) => setNumbers(e.target.value)}
         />
         <button onClick={() => dispatch(buy_cake(numbers))}>
            Buy {numbers} Cake
         </button>
      </div>
   );
};

export default CakeContainer;
