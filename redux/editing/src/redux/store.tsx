import {
    combineReducers,
    compose,
    legacy_createStore
  } from "redux";
  
  import priceReducer from './reducer';
  
  const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  
  function configureStore() {
    return legacy_createStore(
      combineReducers({
        price: priceReducer,
      }),
      undefined,
      compose(
        ReactReduxDevTools,
      )
    );
  }
  
  export default configureStore;