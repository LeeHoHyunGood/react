import { combineReducers, compose, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import loginReducer from "../member/login/state";
import commonReducer from "../common/state/index";
import memberReducer from "../member/update/state/index";
import loginSage from "../member/login/state/sage";
import signupSage from "../member/insert/state/sage";
import memberSage from "../member/update/state/sage";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";

const persistConfig = {
  key: "root",
  // localStorage에 저장합니다.
  storage,
  // auth, board, studio 3개의 reducer 중에 auth reducer만 localstorage에 저장합니다.
  whitelist: ["login"],
};

const reducer = combineReducers({
  login: loginReducer,
  common: commonReducer,
  member: memberReducer,
});

const rootReducer = persistReducer(persistConfig, reducer);
const sageMiddleware = createSagaMiddleware();
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sageMiddleware))
);

function* rootSage() {
  yield all([loginSage(), signupSage(), memberSage()]);
}
sageMiddleware.run(rootSage);

export default store;
