import {userActions} from "../actionTypes"

const initialState={
  isLoggedIn:false,
  user:{},
}

export const userReducer=(state=initialState,{type, payload})=>{
  switch(type){
	case userActions.USER_LOGIN:
	  return state
	case userActions.USER_LOGOUT:
	  return state
	default:
		return state
  }
}
