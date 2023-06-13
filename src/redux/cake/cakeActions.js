import { BUY_CAKE } from "./cakeTypes";

export function buy_cake(numbers = 1) {
   return {
      type: BUY_CAKE,
      payload: numbers,
   };
}
