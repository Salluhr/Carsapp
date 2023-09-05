// import React, { useState } from 'react';
// import {useHistory} from 'react-router-dom';
// import './resetpass.css';

// function PasswordResetPage  ()  {
//   const [email, setEmail] = useState('');
//   const [otp, setOtp] = useState('');
//   const [sentOtp, setSentOtp] = useState('');
//   const [validOtp, setValidOtp] = useState(false);
//   const history = useHistory();

//   const sendOtp = () => {
//     // Simulate sending OTP to the email
//     const generatedOtp = Math.floor(1000 + Math.random() * 9000);
//     setSentOtp(generatedOtp.toString());
//   };

//   const handleOtpChange = (event) => {
//     setOtp(event.target.value);
//   };

//   const verifyOtp = () => {
//     if (otp === sentOtp) {
//       setValidOtp(true);
//       // Redirect to a new page upon successful OTP verification
//       history.push('/new-password');
//     } else {
//       setValidOtp(false);
//     }
//   };

//   return (
//     <div className="password-reset-container">
//       <h1>Password Reset</h1>
//       {!validOtp && (
//         <>
//           <div className="input-container">
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="input-container">
//             <input
//               type="text"
//               placeholder="Enter OTP"
//               value={otp}
//               onChange={handleOtpChange}
//             />
//           </div>
//           <button className="send-otp-button" onClick={sendOtp}>
//             Send OTP
//           </button>
//           <button className="verify-otp-button" onClick={verifyOtp}>
//             Verify OTP
//           </button>
//           {otp !== sentOtp && otp !== '' && (
//             <p className="error-message">Please enter valid OTP</p>
//           )}
//         </>
//       )}
//       {validOtp && (
//         <p className="success-message">OTP verified! Please set a new password.</p>
//       )}
   
//     </div>
//   );
// };

// export default PasswordResetPage;
