import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = () => {

}

const middleware = [thunk];
const initialState = {}


const store = createStore(
      rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)
export default store