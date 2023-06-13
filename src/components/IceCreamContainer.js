import { useDispatch, useSelector } from "react-redux";
import { buy_iceCream } from "../redux/iceCream/iceCreamActions";

const IceCreamContainer = () => {
   const numOfIceCreams = useSelector(
      (state) => state.iceCreams.numOfIceCreams,
   );

   const dispatch = useDispatch();

   return (
      <div>
         <h3>Number Of Ice Creams :{numOfIceCreams} </h3>
         <button onClick={() => dispatch(buy_iceCream())}>Buy Ice Cream</button>
      </div>
   );
};

export default IceCreamContainer;
