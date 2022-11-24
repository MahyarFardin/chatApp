import { combineReducers } from "@reduxjs/toolkit"
import {userReducer} from "./userReducer"

export const reducer= combineReducers({
  user:userReducer,
})
