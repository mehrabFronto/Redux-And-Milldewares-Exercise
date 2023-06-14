import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas/rootSaga";

// 1. create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
   rootReducer,
   composeWithDevTools(applyMiddleware(logger, thunk, sagaMiddleware)),
);

// 2. run the saga

sagaMiddleware.run(rootSaga);

export default store;
