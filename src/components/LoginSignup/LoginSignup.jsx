import React, { useState } from "react";
import "./LoginSignup.css";
import Swal from "sweetalert2";

function LoginSignup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
    }
    if (!formData.gender) {
      newErrors.gender = "Gender is required";
    }
    if (!formData.dob) {
      newErrors.dob = "Date of Birth is required";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone Number must be 10 digits";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      // sweetalert2
      Swal.fire({
      title: "Success!",
      text: "Form submitted successfully!",
      icon: "success",
      confirmButtonText: "OK",
      
    });

      console.log("Form Data: ", formData);

      // Optionally, reset form fields after submission
    setFormData({
      firstName: "",
      lastName: "",
      gender: "",
      dob: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    }
  };

  return (
    <div className="w-100 px-2">
      <div className="container-fluid p-md-3 d-flex  align-items-center justify-content-center w-100">
        
        <form
          onSubmit={handleSubmit}
          className="form_container p-2 p-lg-4 rounded shadow m-3 h-100 w-md-0 w-sm-100"
        >
          <h1 className="text-center text-light fw-bold" style={{WebkitTextStroke:'1px brown'}}>
          Registration Form
        </h1>
          <div>
            
            {/* Input Row 1 */}
            <div className="rows d-md-flex justify-content-between my-md-3 w-100">
              <div className="col-md-6 my-sm-3 my-md-0">
                <div className="inputs  d-flex rounded my-2 mx-1">
                  <span className="text-dark my-auto mx-1">FirstName:</span>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter First Name"
                  />
                </div>
                {errors.firstName && (
                  <p className="text-danger mx-1">{errors.firstName}</p>
                )}
              </div>
              <div className="col-md-6 my-sm-3 my-md-0">
                <div className="inputs  d-flex rounded my-2 mx-1">
                  <span className="text-dark my-auto mx-1">LastName:</span>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter Last Name"
                  />
                </div>
                {errors.lastName && (
                  <p className="text-danger mx-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Input Row 2 */}
            <div className="rows d-md-flex justify-content-between my-md-3">
              <div className="col-md-6 my-sm-3 my-md-0">
                <div className="inputs  d-flex rounded my-2 mx-1">
                  <span className="text-dark my-auto mx-1">Gender:</span>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-100"
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                {errors.gender && (
                  <p className="text-danger mx-1">{errors.gender}</p>
                )}
              </div>
              <div className="col-md-6 my-sm-3 my-md-0">
                <div className="inputs d-flex rounded my-2 mx-1">
                  <span className="text-dark my-auto mx-1">DOB:</span>
                  <input
                    className="w-100"
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                  />
                </div>
                {errors.dob && <p className="text-danger mx-1">{errors.dob}</p>}
              </div>
            </div>

            {/* Input Row 3 */}
            <div className="rows d-md-flex justify-content-between my-md-3">
              <div className="col-md-6 my-sm-3 my-md-0">
                <div className="inputs  d-flex rounded my-2 mx-1">
                  <span className="text-dark my-auto mx-1">PhoneNo:</span>
                  <input
                    className="custom-input"
                    type="number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter Phone No"
                  />
                </div>
                {errors.phone && (
                <p className="text-danger mx-1">{errors.phone}</p>
              )}
              </div>
              
              <div className="col-md-6 my-sm-3 my-md-0">
                <div className="inputs  d-flex rounded my-2 mx-1">
                  <span className="text-dark my-auto mx-1">Email:</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Email"
                  />
                </div>
                {errors.email && (
                <p className="text-danger mx-1">{errors.email}</p>
              )}
              </div>
              
            </div>

            {/* Password Row */}
            <div className="rows d-md-flex justify-content-between my-md-3">
              <div className="col-md-6 my-sm-3 my-md-0">
                <div className="inputs  d-flex rounded my-2 mx-1">
                  <span className="text-dark my-auto mx-1">Password:</span>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="******"
                  />
                </div>
                {errors.password && (
                <p className="text-danger mx-1">{errors.password}</p>
              )}
              </div>
              
              <div className="col-md-6 my-sm-3 my-md-0">
                <div className="inputs  d-flex rounded my-2 mx-1">
                  <span className="text-dark my-auto mx-1">ConfirmPassword:</span>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="******"
                  />
                </div>
                {errors.confirmPassword && (
                <p className="text-danger mx-1">{errors.confirmPassword}</p>
              )}
              </div>
          
            </div>

            <div className="text-center mt-2">
              <button type="submit" className="btn p-2 px-3">
                <p class=" animate-pulse p-0 m-0">Submit</p>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginSignup;
