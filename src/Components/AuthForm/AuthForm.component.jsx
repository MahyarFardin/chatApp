import React, {useRef} from "react";
import { Input } from "../Input/Input.component";
import { Button } from "../Button/Button.component"
import {BiCheckDouble} from "react-icons/bi"
import {auth, addData, getUserData, currentUser} from "../../firebase"
import {createUserWithEmailAndPassword} from "firebase/auth"

// ================================back end functions =================================
// const signinFunc = require('../../../back-end/clientFunctions/signin')
import {signin}  from "../../clientFunctions/signin";

// ====================================================================================

export const AuthForm = (props) => {

	const userName=useRef(null)
	const email=useRef(null)
	const password=useRef(null)

	function handleSignIn(event){
	  event.preventDefault()
	  let data={
		  userName:userName.current.value,
		  email:email.current.value,
		  password:password.current.value,
		}
		signin(data)
		
	  createUserWithEmailAndPassword(auth, data.email, data.password)
	  .then((userCredential) => {
		addData(data)
		console.log(currentUser.uid)
	  })
	  .catch((error) => {
	    const errorCode = error.code;
		const errorMessage = error.message;
	  });

	}

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
	{props.isSignIn &&
	<div className="flex gap-2 mt-8">
      <Input ref={userName} type="text" setting={"required"}  placeholder={"Full Name"}  />
	  </div>}

		<Input ref={email} type="email" setting={"required"}  placeholder={"Email"}  />
		<Input ref={password} type="password" setting={"required"}  placeholder={"Password"}  />
	  	  <Button onChange={()=>props.isSignIn ?  handleSignIn:handlelogIn} addOn="" lable={"Done"} >
		<BiCheckDouble size={30} className="my-auto"/>
	  </Button>
    </form>
  );
};
