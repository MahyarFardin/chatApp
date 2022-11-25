import React, {useRef, useState} from "react";
import { Input } from "../Input/Input.component";
import { Button } from "../Button/Button.component"
import {BiCheckDouble} from "react-icons/bi"
import {auth, addData, getUserData, currentUser} from "../../firebase"
import {createUserWithEmailAndPassword} from "firebase/auth"
import {useNavigate} from "react-router-dom"
// ================================back end functions =================================
// const signinFunc = require('../../../back-end/clientFunctions/signin')
import {signin}  from "../../clientFunctions/signin";

// ====================================================================================

export const AuthForm = (props) => {

	const userName=useRef(null)
	const email=useRef(null)
	const password=useRef(null)
	const confirmPassword=useRef(null)
	const [err,setErr]=useState(false)

	function handleSignIn(event){
	  event.preventDefault()
	  let data={
		  userName:userName.current.value,
		  email:email.current.value,
		  password:password.current.value,
		  confirmPassword:confirmPassword.current.value
	  }

	  if(data.password!==data.confirmPassword){
		  setErr(true)	
	  }
	  else{
		setErr(false)	
		console.log("test")
		/* if(signin(data)==200) */
		/* useNavigate() */
	  }
		 
		
	}		
	/*   createUserWithEmailAndPassword(auth, data.email, data.password) */
	/*   .then((userCredential) => { */
	/* 	addData(data) */
	/* 	console.log(currentUser.uid) */
	/*   }) */
	/*   .catch((error) => { */
	/*     const errorCode = error.code; */
	/* 	const errorMessage = error.message; */
	/*   }); */

	/* } */

	function handlelogIn(event){
	  event.preventDefault()
	  let data={
		email:email.current.value,
		password:password.current.value,
	  }
	  const allData=getUserData(data).then(i=>
	  console.log(i))

	}

  return (
    <form onSubmit={props.isSignIn ? handleSignIn:handlelogIn}>
	{
	  err && <p className="text-red-600 uppercase mt-4 underline text-center font-bold">Password mismatch</p>
	}
	{
	props.isSignIn &&
	  <div className="flex gap-2 mt-4">
      <Input ref={userName} type="text" setting={"required"}  placeholder={"Full Name"}  />
	  </div>
	
	  }


		<Input ref={email} type="email" setting={"required"}  placeholder={"Email"}  />
		<Input ref={password} type="password" setting={"required"}  placeholder={"Password"}  />
		{props.isSignIn &&  <Input ref={confirmPassword} type="text" setting={"required"}  placeholder={"Confirm password"}  />}
		<Button onChange={()=>props.isSignIn ?  handleSignIn:handlelogIn} addOn="" lable={"Done"} >
		<BiCheckDouble size={30} className="my-auto"/>
	  </Button>
    </form>
  );
};
