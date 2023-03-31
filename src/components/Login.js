import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {
  const [error] = useState("");
  const {googleSignIn,facebookSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleFacebookSignin = async (e)=>{
    e.preventDefault();
    try{
      await facebookSignIn();
      navigate("/home")
    }
    catch(error)
    {
      console.log(error.message);
    }
  }

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Firebase Auth Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <hr />
        <div>
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div>
        <br/>
        <div>
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleFacebookSignin}
          />
        </div>
      </div>
    </>
  );
};

export default Login;
