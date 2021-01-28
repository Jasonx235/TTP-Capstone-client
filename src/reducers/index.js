import { combineReducers } from "redux";

import recipes from "./recipes";
import random from "./random";
import collection from "./collection";
export default combineReducers({
  recipes,
  random,
  collection,
});
