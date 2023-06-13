import { Provider } from "react-redux";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import store from "./redux/store";
import IceCreamContainer from "./components/IceCreamContainer";
import UsersContainer from "./components/UsersContainer";

const App = () => {
   return (
      <h1 className="app">
         <Provider store={store}>
            <CakeContainer />
            <IceCreamContainer />
            <UsersContainer />
         </Provider>
      </h1>
   );
};

export default App;
