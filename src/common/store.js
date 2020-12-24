import { combineReducers, compose, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import loginReducer from "../member/login/state";
import commonReducer from "../common/state/index";
import loginSage from "../member/login/state/sage";
import signupSage from "../member/insert/state/sage";

const reducer = combineReducers({
  login: loginReducer,
  common: commonReducer,
});
const sageMiddleware = createSagaMiddleware();
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sageMiddleware))
);

function* rootSage() {
  yield all([loginSage(), signupSage()]);
}
sageMiddleware.run(rootSage);

export default store;
