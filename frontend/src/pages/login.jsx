import React, { useState } from 'react';
import logo from "../assets/HarmoniHealthLogo.png";
import { useNavigate } from 'react-router-dom';
import "./login.css";

function LoginPage() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const handleLogin = async () => {
    // direct to CAS
    console.log("Handle login");
    navigate('/dashboard');

    // const { BACKEND_API_URL } = config();
    // // send request to API endpoint
    // try {
    //   const response = await fetch(`${BACKEND_API_URL}/login?_id=${email}`, {
    //     method: 'GET',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     crossDomain: true,

    //   });
    //   if (!response.ok) {
    //     throw new Error('Failed to submit login Request');
    //   }
    //   // Handle success
    //   const responseJson = await response.json();
    //   // if success
    //   if (responseJson.state == 0) {
    //     const role = responseJson.data;
    //     console.log(netID + " successfully logs in as " + role)
    //     SetLocalStorage(netID, role);
    //     navigate('/');
    //   } else {
    //     console.error(netID + " fail to log in");
    //   }
    // } catch (error) {
    //   // Handle error
    //   console.error('Error submitting Login Request :', error);
    // }
  };

  const toSignUp = () => {
    navigate('/signup');
  };


  return (
    <div className="element">
      <div className="sign-up-wrapper">
        <div className="sign-up">
          <div className="frame">
            <div className="div">Log In</div>

            <div className="frame-2">
              <div className="link-text">
                <p className="by-creating-an">

                  <span className="text-wrapper-4">Terms of use</span>

                  <span className="text-wrapper-3"> and </span>

                  <span className="text-wrapper-4">Privacy Policy. </span>
                </p>
              </div>

              <div className="text-field">
                <div className="label">Email</div>
                <input className="text-field-2" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>

              <button className="button" onClick={handleLogin}>
                <div className="div-wrapper">
                  <div onClick={handleLogin} className="sign-up-2">Log In</div>
                </div>
              </button>
              <span className="text-wrapper-3">
                Not a user yet?
                <button onClick={toSignUp} style={{ background: 'none', border: 'none', color: 'blue', cursor: 'pointer', padding: 0 }}>
                  Sign Up
                </button>
              </span>
            </div>

          </div>

          <img className="logo" alt="Logo" src={logo} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;