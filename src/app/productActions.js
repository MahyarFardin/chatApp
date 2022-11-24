import {userActions} from "./actionTypes"

export const login=(data)=>{
  return{
	type:userActions.USER_LOGIN,
	payload:data
  }
}
export const logout=()=>{
  return{
	type:useActions.USER_LOGOUT,
	payload:""
  }
}
