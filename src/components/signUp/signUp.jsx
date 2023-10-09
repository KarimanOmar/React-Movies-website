import React from "react";
import { useState } from "react";
export default function SignUp() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    FirstName: "",
    LastName: "",
  });
  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
    FirstNameError: "",
    LasttNameError: "",
  });
  var emailPattern = /^[a-z]{4,10}[a-z0-9]*@(gmail|yahoo|outlook)(.com)$/i;
  var passwordPattern = /^[A-Za-z0-9]{8,}$/;
  var FirstNamePattern = /^[A-Za-z]{3,}$/;
  var LasttNamePattern = /^[A-Za-z]{3,}$/;
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
            : !passwordPattern.test(evt.target.value)
            ? "password not valid"
            : "",
      });
    } else if (evt.target.name == "FirstName") {
      setUser({ ...user, FirstName: evt.target.value });
      setErrors({
        ...errors,
        FirstNameError:
          evt.target.value.length == 0
            ? "FirstName is Required"
            : !FirstNamePattern.test(evt.target.value)
            ? "FirstName not valid"
            : "",
      });
    }else if (evt.target.name == "LastName") {
      setUser({ ...user, LastName: evt.target.value });
      setErrors({
        ...errors,
        LasttNameError:
          evt.target.value.length == 0
            ? "LastName is Required"
            : !LasttNamePattern.test(evt.target.value)
            ? "LastName not valid"
            : "",
      });
    }
  };
  const handleSubmit = (evt) => {
    if (
      (errors.passwordError == "password is Required" ||
      errors.passwordError == "password not valid") ||
      (errors.emailError == "Email is required" || errors.emailError == "Invalid email")||
      (errors.FirstNameError == "FirstName is Required" || errors.FirstNameError == "FirstName not valid")||
      (errors.LastName == "LastName is Required" || errors.LastName == "LastName not valid")||(user.email==""||user.password=="")
    ){
      evt.preventDefault();
    }
     console.log(  (errors.passwordError == "password is Required" ||
     errors.passwordError == "password not valid") ||
     (errors.emailError == "Email is required" || errors.emailError == "Invalid email")||
     (errors.FirstNameError == "FirstName is Required" || errors.FirstNameError == "FirstName not valid")||
     (errors.LastName == "LastName is Required" || errors.LastName == "LastName not valid")||(user.email==""||user.password==""));
  };
  return (
    <>
      {/* <!-- Section: Design Block --> */}
      <section className="text-center">
        {/* <!-- Background image --> */}
        <div
          className="p-5 bg-image"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/19670/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600')",
            height: "300px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        {/* <!-- Background image --> */}

        <div
          className="card mx-4 mx-md-5 shadow-5-strong"
          style={{
            width:"93%",
            marginTop: "-100px",
            background: "hsla(0, 0%, 100%, 0.8)",
            backdropFilter: "blur(30px)",
          }}
        >
          <div className="card-body py-5 px-md-5">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <h2 className="fw-bold mb-5">Sign up now</h2>
                <form
                  onSubmit={(e) => {
                    handleSubmit(e);
                  }}
                >
                  {/* <!-- 2 column grid layout with text inputs htmlFor the first and last names --> */}
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="form3Example1">
                          First name
                        </label>
                        <input
                          type="text"
                          name="FirstName"
                          id="form3Example1"
                          className={`form-control ${errors.FirstNameError && "border-danger shadow-none"}`}
                          onChange={(e) => {
                            handleValidation(e);
                          }}
                        />
                        <p style={{ color: "red" }}>{errors.FirstNameError}</p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="form3Example2">
                          Last name
                        </label>
                        <input
                          type="text"
                          name="LastName"
                          id="form3Example2"
                          className={`form-control ${errors.LasttNameError && "border-danger shadow-none"}`}
                          onChange={(e) => {
                            handleValidation(e);
                          }}
                        />
                        <p style={{ color: "red" }}>{errors.LasttNameError}</p>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Email input --> */}
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example3">
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="form3Example3"
                      className={`form-control ${errors.emailError && "border-danger shadow-none"}`}
                      onChange={(e) => {
                        handleValidation(e);
                      }}
                    />
                    <p style={{ color: "red" }}>{errors.emailError}</p>
                  </div>

                  {/* <!-- Password input --> */}
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example4">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="form3Example4"
                      className={`form-control ${errors.passwordError && "border-danger shadow-none"}`}
                      onChange={(e) => {
                        handleValidation(e);
                      }}
                    />
                    <p style={{ color: "red" }}>{errors.passwordError}</p>
                  </div>

                  {/* <!-- Checkbox --> */}
                  <div className="form-check d-flex justify-content-center mb-4">
                    <input style={{position:"revert"}}
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example33"
                      
                    />
                    <label
                      className="form-check-label"
                      htmlFor="form2Example33"
                    >
                      Subscribe to our newsletter
                    </label>
                  </div>

                  {/* <!-- Submit button --> */}
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4"
                  >
                    Sign up
                  </button>

                  {/* <!-- Register buttons --> */}
                  <div className="text-center">
                    <p>or sign up with:</p>
                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </button>

                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <i className="fab fa-google"></i>
                    </button>

                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <i className="fab fa-twitter"></i>
                    </button>

                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <i className="fab fa-github"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Section: Design Block --> */}
    </>
  );
}
