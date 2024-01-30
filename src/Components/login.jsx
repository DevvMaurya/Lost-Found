import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  return (
    <div>
      <div className="blur-container">
        <LoginForm />
      </div>
    </div>
  );
}

function LoginForm() {
  const navigate = useNavigate();

  return (
    <div className="main">
      <section className="signup">
        <div id="green_el"></div>
        <div className="container">
          <div className="signup-content">
            <div className="login-image">
              <figure>
                <img
                  src="./imgs/login_vector.png"
                  alt="login image"
                  id="login-img"
                />
              </figure>
            </div>
            <div className="signup-form">
              <form method="POST" className="register-form" id="login-form">
                <h2 className="form-title">Login</h2>

                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pass">
                    <i className="zmdi zmdi-lock"></i>
                  </label>
                  <input
                    type="password"
                    name="pass"
                    id="pass"
                    placeholder="Password"
                  />
                </div>
                <a href="signup" className="signup-image-link">
                  don't have account
                </a>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signin"
                    id="signin"
                    className="form-submit"
                    value="Login"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
