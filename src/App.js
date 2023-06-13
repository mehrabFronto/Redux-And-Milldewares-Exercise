import { Provider } from "react-redux";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import store from "./redux/store";

const App = () => {
   return (
      <h1 className="app">
         <Provider store={store}>
            <CakeContainer />
         </Provider>
      </h1>
   );
};

export default App;
