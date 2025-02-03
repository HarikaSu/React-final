// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { auth } from "./ptroutes";
// import { signOut } from "firebase/auth";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FaShoppingCart, FaGem, FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

// const JewelleryCards = () => {
//   const [jewellery, setJewellery] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // Manage menu toggle state
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("https://678f799a49875e5a1a9209c1.mockapi.io/jewellery/api/jewellery")
//       .then((response) => response.json())
//       .then((data) => {
//         setJewellery(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         setLoading(false);
//       });
//   }, []);

//   const addToCart = (item) => {
//     const existingItem = cart.find((cartItem) => cartItem.id === item.id);
//     if (existingItem) {
//       setCart(
//         cart.map((cartItem) =>
//           cartItem.id === item.id
//             ? { ...cartItem, quantity: cartItem.quantity + 1 }
//             : cartItem
//         )
//       );
//     } else {
//       setCart([...cart, { ...item, quantity: 1 }]);
//     }
//   };

//   const handleLogout = async () => {
//     await signOut(auth);
//     navigate("/login");
//   };

//   return (
//     <div>
//       {/* Navbar */}
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm px-4 py-3">
//         <span className="navbar-brand fw-bold fs-4">
//           <FaGem className="me-2" /> Bhavii Jeweller's
//         </span>
//         <button
//           className="navbar-toggler ms-auto"
//           type="button"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           aria-controls="navbarNav"
//           aria-expanded={isMenuOpen ? "true" : "false"}
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarNav">
//           <div className="d-flex ms-auto justify-content-end w-100">
//             <button className="btn btn-outline-light w-25 mb-2" onClick={() => navigate("/cart", { state: { cart } })}>
//               <FaShoppingCart className="me-2" /> Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)})
//             </button>
//             <button className="btn btn-outline-light w-25 mb-2 ms-2" onClick={handleLogout}>
//               Logout
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Search Bar */}
//       <div className="container mt-4">
//         <div className="row justify-content-center mb-4">
//           <div className="col-md-6">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Search Jewellery..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
//         </div>

//         {/* Loading Spinner */}
//         {loading ? (
//           <div className="d-flex justify-content-center">
//             <div className="spinner-border" role="status">
//               <span className="visually-hidden">Loading...</span>
//             </div>
//           </div>
//         ) : (
//           <div className="row">
//             {jewellery.filter((item) => item.Product_Name.toLowerCase().includes(searchTerm.toLowerCase()))
//               .map((item) => (
//                 <div key={item.id} className="col-md-4 mb-4">
//                   <div className="card shadow-sm">
//                     <img
//                       src={item.Img_Url}
//                       className="card-img-top"
//                       alt={item.Product_Name}
//                       style={{ height: "400px", objectFit: "cover" }}
//                     />
//                     <div className="card-body">  
//                       <h5 className="card-title">{item.Product_Name}</h5>
//                       <p className="card-text">
//                         <strong>Price:</strong> ${item.Price.USD}
//                       </p>
//                       <p className="card-text">
//                         <strong>Price:</strong>₹{item.Price.INR}
//                       </p>
//                       <button className="btn btn-success" onClick={() => addToCart(item)}>
//                         <FaShoppingCart className="me-2" /> Add to Cart
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Footer */}
//       <footer className="bg-dark text-light text-center py-4 mt-5 shadow-lg">
//         <div className="container">
//           <p className="mb-1">&copy; {new Date().getFullYear()} <strong>Bhavii Jeweller's</strong>. All rights reserved.</p>
//           <p>
//             <FaEnvelope className="me-2" />
//             Contact us: <a href="mailto:info@bhaviijewellers.com" className="text-light">info@bhaviijewellers.com</a>
//           </p>
//           <p>Follow us on:</p>
//           <div>
//             <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2"><FaFacebook /></a>
//             <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2"><FaInstagram /></a>
//             <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2"><FaTwitter /></a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default JewelleryCards;
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { auth } from "./ptroutes";
// import { signOut } from "firebase/auth";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FaShoppingCart, FaGem, FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaHeart } from "react-icons/fa";

// const JewelleryCards = () => {
//   const [jewellery, setJewellery] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [wishlist, setWishlist] = useState([]); // State for wishlist
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // Manage menu toggle state
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("https://678f799a49875e5a1a9209c1.mockapi.io/jewellery/api/jewellery")
//       .then((response) => response.json())
//       .then((data) => {
//         setJewellery(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         setLoading(false);
//       });
//   }, []);

//   const addToCart = (item) => {
//     const existingItem = cart.find((cartItem) => cartItem.id === item.id);
//     if (existingItem) {
//       setCart(
//         cart.map((cartItem) =>
//           cartItem.id === item.id
//             ? { ...cartItem, quantity: cartItem.quantity + 1 }
//             : cartItem
//         )
//       );
//     } else {
//       setCart([...cart, { ...item, quantity: 1 }]);
//     }
//   };

//   const toggleWishlist = (item) => {
//     const existingItem = wishlist.find((wishlistItem) => wishlistItem.id === item.id);
//     if (existingItem) {
//       setWishlist(wishlist.filter((wishlistItem) => wishlistItem.id !== item.id)); // Remove item from wishlist
//     } else {
//       setWishlist([...wishlist, item]); // Add item to wishlist
//     }
//   };

//   const handleLogout = async () => {
//     await signOut(auth);
//     navigate("/login");
//   };

//   return (
//     <div>
//       {/* Navbar */}
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm px-4 py-3">
//         <span className="navbar-brand fw-bold fs-4">
//           <FaGem className="me-2" /> Bhavii Jeweller's
//         </span>
//         <button
//           className="navbar-toggler ms-auto"
//           type="button"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           aria-controls="navbarNav"
//           aria-expanded={isMenuOpen ? "true" : "false"}
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarNav">
//           <div className="d-flex ms-auto justify-content-end w-100">
//             <button className="btn btn-outline-light w-25 mb-2" onClick={() => navigate("/cart", { state: { cart } })}>
//               <FaShoppingCart className="me-2" /> Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)})
//             </button>
//             <button className="btn btn-outline-light w-25 mb-2 ms-2" onClick={handleLogout}>
//               Logout
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Search Bar */}
//       <div className="container mt-4">
//         <div className="row justify-content-center mb-4">
//           <div className="col-md-6">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Search Jewellery..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
//         </div>

//         {/* Loading Spinner */}
//         {loading ? (
//           <div className="d-flex justify-content-center">
//             <div className="spinner-border" role="status">
//               <span className="visually-hidden">Loading...</span>
//             </div>
//           </div>
//         ) : (
//           <div className="row">
//             {jewellery.filter((item) => item.Product_Name.toLowerCase().includes(searchTerm.toLowerCase()))
//               .map((item) => (
//                 <div key={item.id} className="col-md-4 mb-4">
//                   <div className="card shadow-sm">
//                     <img
//                       src={item.Img_Url}
//                       className="card-img-top"
//                       alt={item.Product_Name}
//                       style={{ height: "400px", objectFit: "cover" }}
//                     />
//                     <div className="card-body">  
//                       <h5 className="card-title">{item.Product_Name}</h5>
//                       <p className="card-text">
//                         <strong>Price:</strong> ${item.Price.USD}
//                       </p>
//                       <p className="card-text">
//                         <strong>Price:</strong>₹{item.Price.INR}
//                       </p>
//                       <button className="btn btn-success w-100 mb-2" onClick={() => addToCart(item)}>
//                         <FaShoppingCart className="me-2" /> Add to Cart
//                       </button>
//                       <button className="btn btn-outline-danger w-100 mb-2" onClick={() => toggleWishlist(item)}>
//                         <FaHeart className={wishlist.some((wishlistItem) => wishlistItem.id === item.id) ? "text-danger" : ""} /> Wishlist
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Footer */}
//       <footer className="bg-dark text-light text-center py-4 mt-5 shadow-lg">
//         <div className="container">
//           <p className="mb-1">&copy; {new Date().getFullYear()} <strong>Bhavii Jeweller's</strong>. All rights reserved.</p>
//           <p>
//             <FaEnvelope className="me-2" />
//             Contact us: <a href="mailto:info@bhaviijewellers.com" className="text-light">info@bhaviijewellers.com</a>
//           </p>
//           <p>Follow us on:</p>
//           <div>
//             <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2"><FaFacebook /></a>
//             <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2"><FaInstagram /></a>
//             <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2"><FaTwitter /></a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default JewelleryCards;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./ptroutes";
import { signOut } from "firebase/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaShoppingCart, FaGem, FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaHeart } from "react-icons/fa";

const JewelleryCards = () => {
  const [jewellery, setJewellery] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]); // State for wishlist
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Manage menu toggle state
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://678f799a49875e5a1a9209c1.mockapi.io/jewellery/api/jewellery")
      .then((response) => response.json())
      .then((data) => {
        setJewellery(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const toggleWishlist = (item) => {
    const existingItem = wishlist.find((wishlistItem) => wishlistItem.id === item.id);
    if (existingItem) {
      setWishlist(wishlist.filter((wishlistItem) => wishlistItem.id !== item.id)); // Remove item from wishlist
    } else {
      setWishlist([...wishlist, item]); // Add item to wishlist
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm px-4 py-3">
        <span className="navbar-brand fw-bold fs-4">
          <FaGem className="me-2" /> Bhavii Jeweller's
        </span>
        <button
          className="navbar-toggler ms-auto"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarNav">
          <div className="d-flex ms-auto justify-content-end w-100">
            <button className="btn btn-outline-light w-25 mb-2" onClick={() => navigate("/cart", { state: { cart } })}>
              <FaShoppingCart className="me-2" /> Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)})
            </button>
            <button className="btn btn-outline-light w-25 mb-2 ms-2" onClick={() => navigate("/wishlist", { state: { wishlist } })}>
              <FaHeart className="me-2" /> Wishlist ({wishlist.length})
            </button>
            <button className="btn btn-outline-light w-25 mb-2 ms-2" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Search Bar */}
      <div className="container mt-4">
        <div className="row justify-content-center mb-4">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Search Jewellery..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Loading Spinner */}
        {loading ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="row">
            {jewellery.filter((item) => item.Product_Name.toLowerCase().includes(searchTerm.toLowerCase()))
              .map((item) => (
                <div key={item.id} className="col-md-4 mb-4">
                  <div className="card shadow-sm">
                    <img
                      src={item.Img_Url}
                      className="card-img-top"
                      alt={item.Product_Name}
                      style={{ height: "400px", objectFit: "cover" }}
                    />
                    <div className="card-body">  
                      <h5 className="card-title">{item.Product_Name}</h5>
                      <p className="card-text">
                        <strong>Price:</strong> ${item.Price.USD}
                      </p>
                      <p className="card-text">
                        <strong>Price:</strong>₹{item.Price.INR}
                      </p>
                      <button className="btn btn-success w-100 mb-2" onClick={() => addToCart(item)}>
                        <FaShoppingCart className="me-2" /> Add to Cart
                      </button>
                      <button className="btn btn-outline-danger w-100 mb-2" onClick={() => toggleWishlist(item)}>
                        <FaHeart className={wishlist.some((wishlistItem) => wishlistItem.id === item.id) ? "text-danger" : ""} /> Wishlist
                      </button>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-dark text-light text-center py-4 mt-5 shadow-lg">
        <div className="container">
          <p className="mb-1">&copy; {new Date().getFullYear()} <strong>Bhavii Jeweller's</strong>. All rights reserved.</p>
          <p>
            <FaEnvelope className="me-2" />
            Contact us: <a href="mailto:info@bhaviijewellers.com" className="text-light">info@bhaviijewellers.com</a>
          </p>
          <p>Follow us on:</p>
          <div>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2"><FaFacebook /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2"><FaInstagram /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2"><FaTwitter /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default JewelleryCards;





