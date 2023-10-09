import React from "react";
import Image from "react-bootstrap/Image";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import "./signIn.css";
// import { BsEye } from "react-icons/bs";
// import { BsEyeSlash } from "react-icons/bs";
export default function SignIn() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
  });
  var emailPattern = /^[a-z]{4,10}[a-z0-9]*@(gmail|yahoo|outlook)(.com)$/i
  var passwordPattern = /^[A-Za-z0-9]{8,}$/
  const handleValidation = (evt) => {
    if (evt.target.name == "email") {
      setUser({ ...user, name: evt.target.value });
      setErrors({
        ...errors,
        emailError:
          evt.target.value.length == 0
            ? "Email is required"
            : !emailPattern.test(evt.target.value)
              ? "Invalid email"
              : "",
      });
    } else if (evt.target.name == "password") {
      setUser({ ...user, email: evt.target.value });
      setErrors({
        ...errors,
        passwordError:
          evt.target.value.length == 0
            ? "password is Required"
            :  !passwordPattern.test(evt.target.value)
              ? "password not valid"
              : "",
      });
    }
  };
  const handleSubmit = (evt) => {
    if((errors.passwordError=="password is Required"||errors.passwordError=="password not valid")||
    (errors.emailError=="Email is required"||errors.emailError=="Invalid email")||(user.email==""||user.password=="")){
      evt.preventDefault();
    }
    console.log((errors.passwordError=="password is Required"||errors.passwordError=="password not valid")||
    (errors.emailError=="Email is required"||errors.emailError=="Invalid email"))||(user.email==""||user.password=="");
  };
console.log(user.email=="");
  const SohwAndHide = (evt )=>{
    evt.target.classList.toggle("fa-eye")
    evt.target.classList.toggle("fa-eye-slash")
    if(document.getElementById("password").type == "password"){
      document.getElementById("password").type = "text"
    }else{
      document.getElementById("password").type = "password"
    }
  }
  const navigate = useNavigate()
  const handleNavigation=()=>{
    navigate("/signUp")  
 // navigate(2)   
}
  return (
    <>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <Image
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
              >
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                  <button
                    type="button"
                    className="btn btn-primary btn-floating mx-1"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-primary btn-floating mx-1"
                  >
                    <i className="fab fa-twitter"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-primary btn-floating mx-1"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </button>
                </div>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">Or</p>
                </div>

                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="email">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className={`form-control form-control-lg ${errors.emailError && "border-danger shadow-none"
                      }`}
                    placeholder="Enter a valid email address"
                    onChange={(e) => {
                      handleValidation(e);
                    }}
                  />
                  <p style={{ color: "red" }}>{errors.emailError}</p>
                </div>

                {/* <!-- Password input --> */}
                <label className="form-label " htmlFor="password">
                  Password
                </label>
                <div className="form-outline  input-group">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className={`form-control form-control-lg ${errors.passwordError && "border-danger shadow-none"
                      }`}
                    placeholder="Enter password"
                    aria-label="Dollar amount (with dot and two decimal places)"
                    onChange={(e) => {
                      handleValidation(e);
                    }}
                  />
                  <span  className="input-group-text bg-light-subtle">
                    
                  <i onClick={(e)=>{SohwAndHide(e)}} class="fa-regular fa-eye"></i>
                  </span>
                </div>
                <p style={{ color: "red" }}>{errors.passwordError}</p>

                <div className="d-flex justify-content-between align-items-center">
                  {/* <!-- Checkbox --> */}
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">
                    Forgot password?
                  </a>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{ paddinLeft: "2.5rem", paddinRight: "2.5rem" }}
                  >
                    Login
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <a style={{color:"#dc3545"}} onClick={()=>{handleNavigation()}} className="link-danger">
                      Register
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
