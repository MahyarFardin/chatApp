import React, { useState } from "react";
import { BsGoogle, BsPaperclip } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { currentUser, auth, provider, addData } from "../../firebase";
import { Button } from "../Button/Button.component";
import { AuthForm } from "../AuthForm/AuthForm.component";

function signIn() {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log(currentUser.uid);
      addData({
        userName: user.displayName,
        email: user.email,
        image: user.photoURL,
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
}

const formType = (Form) => {
  if (Form === 1) {
    return <AuthForm isSignIn={true} />;
  } else if (Form === -1) {
    return <AuthForm isSignIn={false} />;
  } else return "";
};

export const AuthBlock = () => {
  const [Form, setForm] = useState(0);
  return (
    <div className="w-full h-screen bg-blue">
      <div className="w-full h-full flex overflow-hidden">
        <div className="w-96 h-[400px] self-center mx-auto bg-white rounded-md py-2 px-6  drop-shadow-2xl overflow-scroll">
          <h3 className="text-blue my-2 text-2xl font-bold text-center">
            Wellcome
          </h3>

          <p className="mt-8 h-12 text-sm text-gray">
            You can create your account or sign into your account. give it a try
            :)
          </p>

          <h3 className="mt-4">Make an account :)</h3>
          <div className="w-full flex flex-row justify-between my-2">
            <Button
              onChange={() => setForm((prev) => 1)}
              addOn="hover:drop-shadow-2xl h-14 w-1/2 bg-gradient-to-r from-blue to-lblue text-white flex align-middle justify-between px-6"
              lable="Form"
            >
              <BsPaperclip size={25} className="my-auto" />
            </Button>

            <Button
              onChange={signIn}
              addOn="hover:drop-shadow-2xl h-14 w-1/2 bg-gradient-to-r from-blue to-lblue text-white flex align-middle justify-between px-6"
              lable="Google"
            >
              <BsGoogle size={25} className="my-auto" />
            </Button>
          </div>

          <h3 className="mt-5">Enter your account</h3>

          <p className="h-12 text-sm text-gray">
            To use sign in with google press the upper one
          </p>

          <div className="w-full flex flex-row justify-between ">
            <Button
              onChange={() => setForm((prev) => -1)}
              addOn="hover:drop-shadow-2xl h-14 w-1/2 bg-gradient-to-r from-blue to-lblue text-white flex align-middle justify-between px-6"
              lable="LogIn"
            >
              <FiUser size={25} className="my-auto" />
            </Button>
          </div>

          {formType(Form)}

          {/* <Link to="#">
            <span>Forget Password</span>
            </Link> */}
        </div>
      </div>
    </div>
  );
};
