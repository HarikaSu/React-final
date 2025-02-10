// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Signup from "./signup";
// import Login from "./Login";
// import JewelleryCards from "./JewelleryCards";
// import { auth } from "./firebaseConfig";
// import { onAuthStateChanged } from "firebase/auth";
// import { useState, useEffect } from "react";
// import { Navigate, Outlet } from "react-router-dom";

// const PrivateRoute = ({ element }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       setIsAuthenticated(!!user);
//       setLoading(false);
//     });
//   }, []);

//   if (loading) return <div>Loading...</div>;

//   return isAuthenticated ? element : <Navigate to="/login" />;
// };

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/" element={<Signup />} />
//         <Route path="/jewellery" element={<PrivateRoute element={<JewelleryCards />} />} />
//         <Route path="*" element={<Navigate to="/login" />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import JewelleryCards from "./JewelleryCards";
import { auth } from "./firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";


// Loader Component
const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
    </div>
  );
};

const PrivateRoute = ({ element }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
      setLoading(false);
    });
  }, []);

  return loading ? <Loader /> : isAuthenticated ? element : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Signup />} />
        <Route path="/jewellery" element={<PrivateRoute element={<JewelleryCards />} />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;




