import React, { useState } from "react";
import "./SignupForm.css";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);
  const [formValid, setFormValid] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const validateConfirmPassword = (confirmPassword) => {
    return confirmPassword === password;
  };

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    setEmailValid(validateEmail(emailValue));
  };

  const handlePasswordChange = (event) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);
    setPasswordValid(validatePassword(passwordValue));
  };

  const handleConfirmPasswordChange = (event) => {
    const confirmPasswordValue = event.target.value;
    setConfirmPassword(confirmPasswordValue);
    setConfirmPasswordValid(validateConfirmPassword(confirmPasswordValue));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (emailValid && passwordValid && confirmPasswordValid) {
      setFormValid(true);
      alert("Form submitted successfully!");
    } else {
      alert("Can't submit the form.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create an account</h2>
      <div>
        <label htmlFor="email">Email:</label><br />
        <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} style={{ borderColor: emailValid ? "green" : "red" }} />
        {!emailValid && <div style={{ color: "red" }}>Invalid email address.</div>}
      </div>
      <div>
        <label htmlFor="password">Password:</label><br />
        <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} />
        {!passwordValid && <div style={{ color: "red" }}>Password must be at least 8 characters long.</div>}
      </div>
      <div>
        <label htmlFor="confirm-password">Confirm Password:</label><br />
        <input type="password" id="confirm-password" name="confirm-password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
        {!confirmPasswordValid && <div style={{ color: "red" }}>Passwords do not match.</div>}
      </div>
      <button type="submit" disabled={!emailValid || !passwordValid || !confirmPasswordValid}>
        Sign up
      </button>
    </form>
  );
}

export default SignupForm;
