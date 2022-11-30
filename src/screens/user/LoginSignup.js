import React, { Fragment, useState, useRef } from "react";
import "./register.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { Link } from "react-router-dom";

function LoginSignup() {
  const [loginEmail, setloginEmail] = useState();
  const [loginPassword, setloginPassword] = useState();
  const loginTab = useRef(null);
  const switcherTab = useRef(null);
  const registerTab = useRef(null);
  const loginSubmit = (e) => {};
  const switchTabs = (e, tab) => {
    if (tab === "login") {
      switcherTab.current.classList.add("shiftToNeutral");
      switcherTab.current.classList.remove("shiftToRight");

      registerTab.current.classList.remove("shiftToNeutralForm");
      loginTab.current.classList.remove("shiftToLeft");
    }
    if (tab === "register") {
      switcherTab.current.classList.add("shiftToRight");
      switcherTab.current.classList.remove("shiftToNeutral");

      registerTab.current.classList.add("shiftToNeutralForm");
      loginTab.current.classList.add("shiftToLeft");
    }
  };

  return (
    <Fragment>
      <div className="LoginSignUpContainer">
        <div className="LoginSignUpBox">
          <div>
            <div className="login_signUp_toggle">
              <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
              <p onClick={(e) => switchTabs(e, "signup")}>SIGNUP</p>
            </div>
            <button ref={switchTabs}></button>
          </div>
          <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
            <div className="loginEmail">
              <MailOutlineIcon />
              <input
                type="email"
                placeholder="email"
                required
                value={loginEmail}
                onChange={(e) => setloginEmail(e.target.value)}
              />
            </div>
            <div className="loginPassword">
              <input
                type="email"
                placeholder="email"
                required
                value={loginPassword}
                onChange={(e) => setloginPassword(e.target.value)}
              />
            </div>
            <Link to="/password/forgot">forgot password</Link>
            <input type="submit" value="login" className="loginbtn" />
          </form>
          <
        </div>
      </div>
    </Fragment>
  );
}

export default LoginSignup;
