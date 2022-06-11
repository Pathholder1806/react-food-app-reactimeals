import React, { useContext, useReducer } from "react";
import AuthContext from "../../store/AuthContext";

import "./Login.css";

const emailReducer = (state, action) => {
  if (action.type === "EMAIL_INPUT") {
    return {
      value: action.payload,
      isValid: action.payload.length > 0 && action.payload.includes("@")
    };
  }

  if (action.type === "ON_BLUR") {
    return {
      value: state.value,
      isValid: state.value.includes("@")
    };
  }

  return { value: "", isValid: false };
};

const passwordreducer = (state, action) => {
  if (action.type === "PASSWORD_INPUT") {
    return {
      value: action.payload,
      isValid: action.payload.length > 6
    };
  }

  if (action.type === "ON_BLUR") {
    return {
      value: state.value,
      isValid: state.value.length > 6
    };
  }

  return { value: "", isValid: false };
};

const Login = () => {
  const AuthCtx = useContext(AuthContext);

  const [emailState, emailDispatch] = useReducer(emailReducer, {
    value: "",
    isValid: true
  });

  const [passwordState, passwordDispatch] = useReducer(passwordreducer, {
    value: "",
    isValid: true
  });

  const emailChangeHandler = (e) => {
    emailDispatch({
      type: "EMAIL_INPUT",
      payload: e.target.value
    });
  };

  const emailBlurHandler = () => {
    emailDispatch({ type: "ON_BLUR" });
  };

  const passwordChangeHandler = (e) => {
    passwordDispatch({
      type: "PASSWORD_INPUT",
      payload: e.target.value
    });
  };

  const passwordBlurHandler = () => {
    passwordDispatch({ type: "ON_BLUR" });
  };

  return (
    <section className="section-login">
      <div className="login-block">
        <div className="login-block__img-box"></div>
        <div className="login-block__text-box">
          <h1 className="login-block__heading">Login</h1>
          <form className="login-form">
            <div className="login-form-group">
              <label htmlFor="login-email-input">Email</label>
              <input
                className={!emailState.isValid ? "invalid" : ""}
                type="text"
                id="login-email-input"
                name="login-email-input"
                required
                autoComplete="off"
                placeholder="xyz@xyz.com"
                value={emailState.value}
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
              />
            </div>
            <div className="login-form-group">
              <label htmlFor="login-email-input">Password</label>
              <input
                className={!passwordState.isValid ? "invalid" : ""}
                type="text"
                id="login-email-input"
                name="login-email-input"
                required
                autoComplete="off"
                placeholder="Enter your password"
                value={passwordState.value}
                onChange={passwordChangeHandler}
                onBlur={passwordBlurHandler}
              />
            </div>
            <button type="submit" onClick={AuthCtx.onLogin}>
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
