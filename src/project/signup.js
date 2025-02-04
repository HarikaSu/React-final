// import React, { useState } from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "./ptroutes";
// import { useNavigate } from "react-router-dom";
// import "./signup.css";
// import { Eye, EyeOff } from "lucide-react";

// const Signup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     if (!email.includes("@")) {
//       setError("Email must contain @ symbol.");
//       return;
//     }
//     if (password.length < 8) {
//       setError("Password must be at least 8 characters long.");
//       return;
//     }
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       navigate("/login");
//     } catch (error) {
//       setError("Error signing up");
//     }
//   };

//   return (
//     <div className="signup-container">
//       <h2>Signup</h2>
//       {error && <p className="error-message">{error}</p>}
//       <form onSubmit={handleSignup}>
//         <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
//         <div className="password-container" style={{ display: 'flex', alignItems: 'center' }}>
//           <input 
//             type={showPassword ? "text" : "password"} 
//             placeholder="Password" 
//             value={password}
//             onChange={(e) => setPassword(e.target.value)} 
//             required 
//             style={{ flex: 1 }}
//           />
//           <button 
//             type="button" 
//             className="eye-icon" 
//             onClick={() => {
//               setShowPassword(!showPassword);
//               if (showPassword) setPassword("");
//             }}
//             style={{ marginLeft: '8px', background: 'none', border: 'none', cursor: 'pointer' }}
//           >
//             {showPassword ? <EyeOff /> : <Eye />}
//           </button>
//         </div>
//         <button type="submit">Signup</button>
//       </form>
//       <p id="pp">Already have an account? <a href="/login">Login</a></p>
//     </div>
//   );
// };

// export default Signup;
// import React, { useState } from "react";
// import { createUserWithEmailAndPassword, signInAnonymously } from "firebase/auth";
// import { auth } from "./ptroutes";
// import { useNavigate } from "react-router-dom";
// import "./signup.css";
// import { Eye, EyeOff } from "lucide-react";

// const Signup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     if (!email.includes("@")) {
//       setError("Email must contain @ symbol.");
//       return;
//     }
//     if (password.length < 8) {
//       setError("Password must be at least 8 characters long.");
//       return;
//     }
//     if (password !== confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       navigate("/login");
//     } catch (error) {
//       setError("Error signing up");
//     }
//   };

//   const handleGuestLogin = async () => {
//     try {
//       await signInAnonymously(auth);
//       navigate("/mainjewellery");
//     } catch (error) {
//       setError("Error signing in as guest");
//     }
//   };

//   return (
//     <div className="signup-container">
//       <h2>Signup</h2>
//       {error && <p className="error-message">{error}</p>}
//       <form onSubmit={handleSignup}>
//         <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
//         <div className="password-container" style={{ display: 'flex', alignItems: 'center' }}>
//           <input 
//             type={showPassword ? "text" : "password"} 
//             placeholder="Password" 
//             value={password}
//             onChange={(e) => setPassword(e.target.value)} 
//             required 
//             style={{ flex: 1 }}
//           />
//           <button 
//             type="button" 
//             className="eye-icon" 
//             onClick={() => setShowPassword(!showPassword)}
//             style={{ marginLeft: '8px', background: 'none', border: 'none', cursor: 'pointer' }}
//           >
//             {showPassword ? <EyeOff /> : <Eye />}
//           </button>
//         </div>
//         <input 
//           type="password" 
//           placeholder="Confirm Password" 
//           value={confirmPassword} 
//           onChange={(e) => setConfirmPassword(e.target.value)} 
//           required 
//         />
//         <button type="submit">Signup</button>
//       </form>
//       <button onClick={handleGuestLogin} className="guest-login">Guest Login</button>
//       <p id="pp">Already have an account? <a href="/login">Login</a></p>
//     </div>
//   );
// };

// export default Signup;
// import React, { useState } from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "./ptroutes";
// import { useNavigate } from "react-router-dom";
// import "./signup.css";
// import { Eye, EyeOff } from "lucide-react";

// const Signup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     if (!email.includes("@")) {
//       setError("Email must contain @ symbol.");
//       return;
//     }
//     if (password.length < 8) {
//       setError("Password must be at least 8 characters long.");
//       return;
//     }
//     if (password !== confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       navigate("/login");
//     } catch (error) {
//       setError("Error signing up");
//     }
//   };

//   const handleGuestLogin = async () => {
//     try {
//       // await signInAnonymously(auth);
//       navigate("/home");
//     } catch (error) {
//       setError("Error signing in as guest");
//     }
//   };

//   return (
//     <div className="signup-container">
//       <h2>Signup</h2>
//       {error && <p className="error-message">{error}</p>}
//       <form onSubmit={handleSignup}>
//         <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
//         <div className="password-container" style={{ display: 'flex', alignItems: 'center' }}>
//           <input 
//             type={showPassword ? "text" : "password"} 
//             placeholder="Password" 
//             value={password}
//             onChange={(e) => setPassword(e.target.value)} 
//             required 
//             style={{ flex: 1 }}
//           />
//           <button 
//             type="button" 
//             className="eye-icon" 
//             onClick={() => setShowPassword(!showPassword)}
//             style={{ marginLeft: '8px', background: 'none', border: 'none', cursor: 'pointer' }}
//           >
//             {showPassword ? <EyeOff /> : <Eye />}
//           </button>
//         </div>
//         <input 
//           type="password" 
//           placeholder="Confirm Password" 
//           value={confirmPassword} 
//           onChange={(e) => setConfirmPassword(e.target.value)} 
//           required 
//         />
//         <button type="submit">Signup</button>
//       </form>
//       <button onClick={handleGuestLogin} className="guest-login" style={{ padding: '10px 20px', fontSize: '16px', marginTop: '10px', width: '400px'}}>Guest Login</button>
//       <p id="pp">Already have an account? <a href="/login">Login</a></p>
//     </div>
//   );
// };

// export default Signup;
import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInAnonymously } from "firebase/auth";
import { auth } from "./ptroutes";
import { useNavigate } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Email must contain @ symbol.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (error) {
      setError("Error signing up");
    }
  };

  // const handleGuestLogin = async () => {
  //   try {
  //     await signInAnonymously(auth);
  //     navigate("/home");
  //   } catch (error) {
  //     setError("Error signing in as guest");
  //   }
  // };
  const handleGuestLogin = async () => {
    try {
      await signInAnonymously(auth);
      navigate("/home");
    } catch (error) {
      console.error("Guest login error:", error.message);
      setError(error.message); // Display the exact error message
    }
  };
  

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSignup}>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        <button type="submit">Signup</button>
      </form>
      <button onClick={handleGuestLogin} className="guest-login">
        Guest Login
      </button>
      <p className="AlreadySignup">Already have an account? <a href="/login">Login</a></p>
    </div>
  );
};

export default Signup;
