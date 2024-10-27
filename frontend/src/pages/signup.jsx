import React, { useState } from 'react';
// import { HaveAnAccount } from "./HaveAnAccount";
import logo from "../assets/HarmoniHealthLogo.png";
import { useNavigate } from 'react-router-dom';
import "./signup.css";

function LoginPage () {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const handleSignup = async () => {
      navigate('/form');
    };

    const toLogin = () => {
      navigate('/login');
    };

  return (
    <div className="element">
      <div className="sign-up-wrapper">
        <div className="sign-up">
          <div className="frame">
            <div className="div">Register</div>

            <div className="frame-2">
              <div className="link-text">
                <p className="by-creating-an">
                  <span className="text-wrapper-3">
                    By signing up, you agree to the{" "}
                  </span>

                  <span className="text-wrapper-4">Terms of use</span>

                  <span className="text-wrapper-3"> and </span>

                  <span className="text-wrapper-4">Privacy Policy. </span>
                </p>
              </div>

              <div className="text-field">
                <div className="label">Email</div>
                <input className="text-field-2" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>

              <button className="button" onClick={handleSignup}>
                <div className="div-wrapper">
                  <div className="sign-up-2">Sign in</div>
                </div>
              </button>
            </div>
            <span className="text-wrapper-3">
                Already a user?
                <button onClick={toLogin } style={{ background: 'none', border: 'none', color: 'blue', cursor: 'pointer', padding: 0 }}>
                  Log in
                </button>
              </span>
            {/* <HaveAnAccount className="have-an-account-login" /> */}
          </div>

          <img className="logo" alt="Logo" src={logo} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;