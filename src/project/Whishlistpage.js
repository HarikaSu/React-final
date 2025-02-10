// import React, { useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

// const WishlistPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [wishlist, setWishlist] = React.useState(location.state?.wishlist || []);

//   useEffect(() => {
//     document.title = "Your Wishlist";
//   }, []);

//   const removeFromWishlist = (id) => {
//     setWishlist(wishlist.filter((item) => item.id !== id));
//   };

//   return (
//     <div className="wishlist-container container d-flex flex-column align-items-center justify-content-start min-vh-100 py-4 px-3">
//       <div className="wishlist-card card shadow-lg border-0">
//         <div className="card-header text-center py-3 bg-white">
//           <h2 className="wishlist-title">Your Wishlist</h2>
//         </div>

//         <div className="card-body">
//           {wishlist.length === 0 ? (
//             <p className="text-center text-danger fs-5">Your wishlist is empty</p>
//           ) : (
//             <ul className="list-group">
//               {wishlist.map((item) => (
//                 <li key={item.id} className="wishlist-item list-group-item d-flex flex-column flex-md-row justify-content-between align-items-center p-3">
//                   <div className="d-flex align-items-center flex-wrap text-center text-md-start">
//                     <img src={item.Img_Url} alt={item.Product_Name} className="wishlist-img img-fluid rounded" />
//                     <span className="fw-bold fs-6">{item.Product_Name}</span>
//                   </div>
//                   <button className="wishlist-remove-btn btn btn-sm mt-2 mt-md-0" onClick={() => removeFromWishlist(item.id)}>
//                     Remove
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           )}

//           <div className="d-flex justify-content-center">
//             <button className="wishlist-continue-btn btn mt-3 px-4 py-2 fw-bold" onClick={() => navigate("/home")}> 
//               Continue Shopping
//             </button>
//           </div>
//         </div>
//       </div>
      
//       <style>
//         {`
//           .wishlist-container {
//             max-width: 1200px;
//             margin: auto;
//           }
//           .wishlist-card {
//             width: 100%;
//             max-width: 600px;
//             border: 2px solid red;
//           }
//           .wishlist-title {
//             color: #FF4500;
//             font-size: 1.8rem;
//           }
//           .wishlist-item {
//             border: 1px solid red;
//             background-color: white;
//           }
//           .wishlist-img {
//             width: 60px;
//             height: 60px;
//             margin-right: 10px;
//             border: 2px solid red;
//             object-fit: cover;
//           }
//           .wishlist-remove-btn {
//             background-color: white;
//             color: #FF4500;
//             border: 1px solid #FF4500;
//             transition: 0.3s ease-in-out;
//             width: 25%;
//           }
//           .wishlist-remove-btn:hover {
//             background-color: #FF4500;
//             color: white;
//           }
//           .wishlist-continue-btn {
//             background-color: #FF4500;
//             color: white;
//             width: 50%;
//             transition: 0.3s ease-in-out;
//           }
//           .wishlist-continue-btn:hover {
//             background-color: #D43F00;
//           }
          
//           @media (max-width: 768px) {
//             .wishlist-card {
//               max-width: 100%;
//               padding: 10px;
//             }
//             .wishlist-title {
//               font-size: 1.5rem;
//             }
//             .wishlist-img {
//               width: 50px;
//               height: 50px;
//             }
//             .wishlist-remove-btn {
//               width: 100%;
//             }
//             .wishlist-continue-btn {
//               width: 100%;
//             }
//           }
          
//           @media (max-width: 480px) {
//             .wishlist-title {
//               font-size: 1.3rem;
//             }
//             .wishlist-img {
//               width: 40px;
//               height: 40px;
//             }
//             .wishlist-remove-btn {
//               font-size: 0.8rem;
//               padding: 5px 10px;
//             }
//             .wishlist-continue-btn {
//               font-size: 0.9rem;
//               padding: 8px;
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default WishlistPage;
// import React, { useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Whishlist.css";

// const WishlistPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [wishlist, setWishlist] = React.useState(location.state?.wishlist || []);

//   useEffect(() => {
//     document.title = "Your Wishlist";
//   }, []);

//   const removeFromWishlist = (id) => {
//     setWishlist(wishlist.filter((item) => item.id !== id));
//   };

//   return (
    
//     <div className="wishlist-container">
//       <div className="wishlist-card">
//         <div className="wishlist-header">
//           <h2>Your Wishlist</h2>
//         </div>

//         <div className="wishlist-body">
//           {wishlist.length === 0 ? (
//             <p className="empty-wishlist">Your wishlist is empty</p>
//           ) : (
//             <ul className="wishlist-list">
//               {wishlist.map((item) => (
//                 <li key={item.id} className="wishlist-item">
//                   <div className="wishlist-item-info">
//                     <img src={item.Img_Url} alt={item.Product_Name} className="wishlist-img" />
//                     <span className="wishlist-name">{item.Product_Name}</span>
//                   </div>
//                   <button className="wishlist-remove-btn" onClick={() => removeFromWishlist(item.id)}>
//                     Remove
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           )}

//           <div className="wishlist-footer">
//             <button className="wishlist-continue-btn" onClick={() => navigate("/home")}> 
//               Continue Shopping
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WishlistPage;
// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FaShoppingCart, FaHeart, FaUser, FaBars, FaGem } from "react-icons/fa";
// import "./Whishlist.css";

// const WishlistPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [wishlist, setWishlist] = useState(location.state?.wishlist || []);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     document.title = "Your Wishlist";
//   }, []);

//   const removeFromWishlist = (id) => {
//     setWishlist(wishlist.filter((item) => item.id !== id));
//   };

//   return (
//     <div>
//       {/* Navbar */}
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm px-4 py-3">
//         <span className="navbar-brand fw-bold fs-4">
//           <FaGem className="me-2" /> Bhavii Jeweller's
//         </span>

//         <button
//           className="navbar-toggler"
//           type="button"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           aria-expanded={isMenuOpen ? "true" : "false"}
//         >
//           <FaBars className="text-light" />
//         </button>

//         <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
//           <ul className="navbar-nav ms-auto d-lg-flex align-items-center">
//             <div className="d-flex flex-column flex-lg-row mt-3 mt-lg-0 gap-3">
//               <li className="nav-item">
//                 <button className="btn btn-outline-light w-auto px-3 me-3" onClick={() => navigate("/cart")}> 
//                   <FaShoppingCart className="me-2" /> Cart
//                 </button>
//               </li>
//               <li className="nav-item">
//                 <button className="btn btn-outline-light w-auto px-3 me-3" onClick={() => navigate("/wishlist")}> 
//                   <FaHeart className="me-2" /> Wishlist ({wishlist.length})
//                 </button>
//               </li>
//               <li className="nav-item">
//                 <button className="btn btn-outline-light w-auto px-3" onClick={() => navigate("/login")}> 
//                   <FaUser className="me-2" /> Logout
//                 </button>
//               </li>
//             </div>
//           </ul>
//         </div>
//       </nav>

//       {/* Wishlist Content */}
//       <div className="wishlist-container">
//         <div className="wishlist-card">
//           <div className="wishlist-header">
//             <h2>Your Wishlist</h2>
//           </div>

//           <div className="wishlist-body">
//             {wishlist.length === 0 ? (
//               <div className="empty-wishlist-container">
//                 <img src="https://chapenter.com/images/empty.gif" alt="Empty Wishlist" className="empty-wishlist-img" />
//                 <p className="empty-wishlist-message">Your wishlist is empty! Start adding your favorite products now.</p>
//                 <button className="wishlist-continue-btn" onClick={() => navigate("/home")}>
//                   Continue Shopping
//                 </button>
//               </div>
//             ) : (
//               <ul className="wishlist-list">
//                 {wishlist.map((item) => (
//                   <li key={item.id} className="wishlist-item">
//                     <div className="wishlist-item-info">
//                       <img src={item.Img_Url} alt={item.Product_Name} className="wishlist-img" />
//                       <span className="wishlist-name">{item.Product_Name}</span>
//                     </div>
//                     <button className="wishlist-remove-btn" onClick={() => removeFromWishlist(item.id)}>
//                       Remove
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WishlistPage;
// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FaShoppingCart, FaHeart, FaUser, FaBars, FaGem } from "react-icons/fa";
// import "./Whishlist.css";

// const WishlistPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [wishlist, setWishlist] = useState(location.state?.wishlist || []);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     document.title = "Your Wishlist";
//   }, []);

//   const removeFromWishlist = (id) => {
//     setWishlist(wishlist.filter((item) => item.id !== id));
//   };

//   return (
//     <div>
//       {/* Navbar */}
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm px-4 py-3">
//         <span className="navbar-brand fw-bold fs-4">
//           <FaGem className="me-2" /> Bhavii Jeweller's
//         </span>

//         {/* Navbar Toggle Button for Mobile and Tablet */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           aria-expanded={isMenuOpen ? "true" : "false"}
//           style={{ width: '35px', height: '35px' }} // Dynamic toggle button size
//         >
//           <FaBars className="text-light" />
//         </button>

//         {/* Collapsible Menu */}
//         <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
//           <ul className="navbar-nav ms-auto d-lg-flex align-items-center">
//             <div className="d-flex flex-column flex-lg-row mt-3 mt-lg-0 gap-3">
//               <li className="nav-item">
//                 <button className="btn btn-outline-light w-auto px-3 me-3" onClick={() => navigate("/cart")}> 
//                   <FaShoppingCart className="me-2" /> Cart
//                 </button>
//               </li>
//               <li className="nav-item">
//                 <button className="btn btn-outline-light w-auto px-3 me-3" onClick={() => navigate("/wishlist")}> 
//                   <FaHeart className="me-2" /> Wishlist ({wishlist.length})
//                 </button>
//               </li>
//               <li className="nav-item">
//                 <button className="btn btn-outline-light w-auto px-3" onClick={() => navigate("/login")}> 
//                   <FaUser className="me-2" /> Logout
//                 </button>
//               </li>
//             </div>
//           </ul>
//         </div>
//       </nav>

//       {/* Wishlist Content */}
//       <div className="wishlist-container">
//         <div className="wishlist-card">
//           <div className="wishlist-header">
//             <h2>Your Wishlist</h2>
//           </div>

//           <div className="wishlist-body">
//             {wishlist.length === 0 ? (
//               <div className="empty-wishlist-container">
//                 <img src="https://chapenter.com/images/empty.gif" alt="Empty Wishlist" className="empty-wishlist-img" />
//                 <p className="empty-wishlist-message">Your wishlist is empty! Start adding your favorite products now.</p>
//                 <button className="wishlist-continue-btn" onClick={() => navigate("/home")}>
//                   Continue Shopping
//                 </button>
//               </div>
//             ) : (
//               <ul className="wishlist-list">
//                 {wishlist.map((item) => (
//                   <li key={item.id} className="wishlist-item">
//                     <div className="wishlist-item-info">
//                       <img src={item.Img_Url} alt={item.Product_Name} className="wishlist-img" />
//                       <span className="wishlist-name">{item.Product_Name}</span>
//                     </div>
//                     <button className="wishlist-remove-btn" onClick={() => removeFromWishlist(item.id)}>
//                       Remove
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WishlistPage;
// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FaShoppingCart, FaHeart, FaUser, FaBars, FaGem } from "react-icons/fa";
// import "./Whishlist.css";

// const WishlistPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [wishlist, setWishlist] = useState(location.state?.wishlist || []);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     document.title = "Your Wishlist";
//   }, []);

//   const removeFromWishlist = (id) => {
//     setWishlist(wishlist.filter((item) => item.id !== id));
//   };

//   return (
//     <div>
//       {/* Navbar */}
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm px-4 py-3">
//         <span className="navbar-brand fw-bold fs-4" style={{ cursor: "pointer" }} onClick={() => navigate("/home")}>
//           <FaGem className="me-2" /> Bhavii Jeweller's
//         </span>

//         {/* Navbar Toggle Button for Mobile and Tablet */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           aria-expanded={isMenuOpen ? "true" : "false"}
//           style={{ width: '35px', height: '35px' }}
//         >
//           <FaBars className="text-light" />
//         </button>

//         {/* Collapsible Menu */}
//         <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
//           <ul className="navbar-nav ms-auto d-lg-flex align-items-center">
//             <div className="d-flex flex-column flex-lg-row mt-3 mt-lg-0 gap-3">
//               <li className="nav-item">
//                 <button className="btn btn-outline-light w-auto px-3 me-3" onClick={() => navigate("/cart")}> 
//                   <FaShoppingCart className="me-2" /> Cart
//                 </button>
//               </li>
//               <li className="nav-item">
//                 <button className="btn btn-outline-light w-auto px-3 me-3" onClick={() => navigate("/wishlist")}> 
//                   <FaHeart className="me-2" /> Wishlist ({wishlist.length})
//                 </button>
//               </li>
//               <li className="nav-item">
//                 <button className="btn btn-outline-light w-auto px-3" onClick={() => navigate("/login")}> 
//                   <FaUser className="me-2" /> Logout
//                 </button>
//               </li>
//             </div>
//           </ul>
//         </div>
//       </nav>

//       {/* Wishlist Content */}
//       <div className="wishlist-container">
//         <div className="wishlist-card">
//           <div className="wishlist-header">
//             <h2>Your Wishlist</h2>
//           </div>

//           <div className="wishlist-body">
//             {wishlist.length === 0 ? (
//               <div className="empty-wishlist-container">
//                 <img src="https://chapenter.com/images/empty.gif" alt="Empty Wishlist" className="empty-wishlist-img" />
//                 <p className="empty-wishlist-message">Your wishlist is empty! Start adding your favorite products now.</p>
//                 <button className="wishlist-continue-btn" onClick={() => navigate("/home")}>
//                   Continue Shopping
//                 </button>
//               </div>
//             ) : (
//               <ul className="wishlist-list">
//                 {wishlist.map((item) => (
//                   <li key={item.id} className="wishlist-item">
//                     <div className="wishlist-item-info">
//                       <img src={item.Img_Url} alt={item.Product_Name} className="wishlist-img" />
//                       <span className="wishlist-name">{item.Product_Name}</span>
//                     </div>
//                     <button className="wishlist-remove-btn" onClick={() => removeFromWishlist(item.id)}>
//                       Remove
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WishlistPage;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Removed useLocation
import "bootstrap/dist/css/bootstrap.min.css";
import { FaShoppingCart, FaHeart, FaUser, FaBars, FaGem } from "react-icons/fa";
import "./Whishlist.css";

const WishlistPage = () => {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Your Wishlist";
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm px-4 py-3">
        <span className="navbar-brand fw-bold fs-4" style={{ cursor: "pointer" }} onClick={() => navigate("/home")}>
          <FaGem className="me-2" /> Bhavii Jeweller's
        </span>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen ? "true" : "false"}
          style={{ width: '35px', height: '35px' }}
        >
          <FaBars className="text-light" />
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto d-lg-flex align-items-center">
            <div className="d-flex flex-column flex-lg-row mt-3 mt-lg-0 gap-3">
              <li className="nav-item">
                <button className="btn btn-outline-light w-auto px-3 me-3" onClick={() => navigate("/cart")}> 
                  <FaShoppingCart className="me-2" /> Cart
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-light w-auto px-3 me-3" onClick={() => navigate("/wishlist")}> 
                  <FaHeart className="me-2" /> Wishlist ({wishlist.length})
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-light w-auto px-3" onClick={() => navigate("/login")}> 
                  <FaUser className="me-2" /> Logout
                </button>
              </li>
            </div>
          </ul>
        </div>
      </nav>

      {/* Wishlist Content */}
      <div className="wishlist-container">
        <div className="wishlist-card">
          <div className="wishlist-header">
            <h2>Your Wishlist</h2>
          </div>

          <div className="wishlist-body">
            {wishlist.length === 0 ? (
              <div className="empty-wishlist-container">
                <img src="https://chapenter.com/images/empty.gif" alt="Empty Wishlist" className="empty-wishlist-img" />
                <p className="empty-wishlist-message">Your wishlist is empty! Start adding your favorite products now.</p>
                <button className="wishlist-continue-btn" onClick={() => navigate("/home")}>
                  Continue Shopping
                </button>
              </div>
            ) : (
              <ul className="wishlist-list">
                {wishlist.map((item) => (
                  <li key={item.id} className="wishlist-item">
                    <div className="wishlist-item-info">
                      <img src={item.Img_Url} alt={item.Product_Name} className="wishlist-img" />
                      <span className="wishlist-name">{item.Product_Name}</span>
                    </div>
                    <button className="wishlist-remove-btn" onClick={() => removeFromWishlist(item.id)}>
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;



