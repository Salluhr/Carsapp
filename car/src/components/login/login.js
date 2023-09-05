import React ,{useState} from 'react';
import './login.css';


function LoginPage () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
  
    const validateEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    };
  
    const handleEmailChange = (event) => {
      const newEmail = event.target.value;
      setEmail(newEmail);
      if (validateEmail(newEmail) || newEmail === '') {
        setEmailError('');
      } else {
        setEmailError('Please Enter a Valid Email');
      }
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (validateEmail(email) && password !== '') {
        // Perform login logic
        console.log('Login successful');
      } else {
        setEmailError('Please Enter a Valid Email');
      }
    };
  
    return (
      <div className="login-container">
        <h1>Login</h1>
        <div className="input-container">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <p className="error-message">{emailError}</p>}
        </div>
        <div className="input-container">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <span
            className={`password-toggle ${showPassword ? 'active' : ''}`}
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <i className="fas fa-eye"></i>
            ) : (
              <i className="fas fa-eye-slash"></i>
            )}
          </span>
        </div>
        <div className="link-container">
          <a href="/login/resetpass.js">Forgot Password</a>
          <a href="/login/registrationPage.js">Register New User</a>
        </div>
        <div className="button-container">
          <button className="login-button" onClick={handleSubmit}>
            Login
          </button>
          <button className="cancel-button">Cancel</button>
        </div>
      </div>
  );
};

export default LoginPage;

