import { combineReducers } from "redux";

import recipes from './recipes';
import random from './random';
export default combineReducers({
  recipes,
  random
});
