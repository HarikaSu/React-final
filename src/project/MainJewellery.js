// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FaShoppingCart } from "react-icons/fa";

// const JewelleryCards = () => {
//   const [jewellery, setJewellery] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("https://678f799a49875e5a1a9209c1.mockapi.io/jewellery/api/jewellery")
//       .then((response) => response.json())
//       .then((data) => setJewellery(data))
//       .catch((error) => console.error("Error fetching data:", error));
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

//   return (
//     <div>
//       {/* Navbar */}
//       <nav className="navbar navbar-dark bg-dark px-4">
//         <span className="navbar-brand">Jewellery Store</span>
//         <button className="btn btn-outline-light" onClick={() => navigate("/cart", { state: { cart } })}>
//           <FaShoppingCart /> Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)})
//         </button>
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
        
//         {/* Jewellery Cards */}
//         <div className="row">
//           {jewellery.filter((item) => item.Product_Name.toLowerCase().includes(searchTerm.toLowerCase()))
//             .map((item) => (
//               <div key={item.id} className="col-md-4 mb-4">
//                 <div className="card shadow-sm">
//                   <img
//                     src={item.Img_Url}
//                     className="card-img-top"
//                     alt={item.Product_Name}
//                     style={{ height: "400px", objectFit: "cover" }}
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title">{item.Product_Name}</h5>
//                     <p className="card-text">
//                       <strong>Price (USA):</strong> ${item.Price.USD} <br />
//                       <strong>Price (INR):</strong> ₹{item.Price.INR}
//                     </p>
//                     <button className="btn btn-success" onClick={() => addToCart(item)}>
//                       Add to Cart
//                     </button>
//                   </div>
//                 </div>
//               </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JewelleryCards;
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { auth } from "./ptroutes";
// import { signOut } from "firebase/auth";
// import "bootstrap/dist/css/bootstrap.min.css";
// // import { FaShoppingCart } from "react-icons/fa";

// const JewelleryCards = () => {
//   const [jewellery, setJewellery] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("https://678f799a49875e5a1a9209c1.mockapi.io/jewellery/api/jewellery")
//       .then((response) => response.json())
//       .then((data) => setJewellery(data))
//       .catch((error) => console.error("Error fetching data:", error));
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
//       <nav className="navbar navbar-dark bg-dark px-4">
//         <span className="navbar-brand">Jewellery Store</span>
//         <button className="btn btn-outline-light" onClick={handleLogout}>Logout</button>
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
        
//         {/* Jewellery Cards */}
//         <div className="row">
//           {jewellery.filter((item) => item.Product_Name.toLowerCase().includes(searchTerm.toLowerCase()))
//             .map((item) => (
//               <div key={item.id} className="col-md-4 mb-4">
//                 <div className="card shadow-sm">
//                   <img
//                     src={item.Img_Url}
//                     className="card-img-top"
//                     alt={item.Product_Name}
//                     style={{ height: "400px", objectFit: "cover" }}
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title">{item.Product_Name}</h5>
//                     <p className="card-text">
//                       <strong>Price:</strong> ${item.Price.USD}
//                     </p>
//                     <button className="btn btn-success" onClick={() => addToCart(item)}>
//                       Add to Cart
//                     </button>
//                   </div>
//                 </div>
//               </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JewelleryCards;
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { auth } from "./ptroutes";
// import { signOut } from "firebase/auth";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FaShoppingCart } from "react-icons/fa";

// const JewelleryCards = () => {
//   const [jewellery, setJewellery] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(true);
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
//       <nav className="navbar navbar-dark bg-dark px-4">
//         <span className="navbar-brand">Bhavii Jeweller's</span>
//         <div>
//           <button className="btn btn-outline-light me-3" onClick={() => navigate("/cart", { state: { cart } })}>
//             <FaShoppingCart /> Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)})
//           </button>
//           <button className="btn btn-outline-light" onClick={handleLogout}>Logout</button>
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
//                       <button className="btn btn-success" onClick={() => addToCart(item)}>
//                         Add to Cart
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default JewelleryCards;
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { auth } from "./ptroutes";
// import { signOut } from "firebase/auth";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FaShoppingCart } from "react-icons/fa";

// const JewelleryCards = () => {
//   const [jewellery, setJewellery] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(true);
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
//       <nav className="navbar navbar-dark bg-dark px-4">
//         <span className="navbar-brand">Bhavii Jeweller's</span>
//         <div>
//           <button className="btn btn-outline-light me-3" onClick={() => navigate("/cart", { state: { cart } })}>
//             <FaShoppingCart /> Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)})
//           </button>
//           <button className="btn btn-outline-light" onClick={handleLogout}>Logout</button>
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
//                       <button className="btn btn-success" onClick={() => addToCart(item)}>
//                         Add to Cart
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Footer */}
//       <footer className="bg-dark text-light text-center py-3 mt-4">
//         <p>&copy; {new Date().getFullYear()} Bhavii Jeweller's. All rights reserved.</p>
//         <p>Contact us: <a href="mailto:info@bhaviijewellers.com" className="text-light">info@bhaviijewellers.com</a></p>
//         <p>Follow us on:
//           {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
//           <a href="#" className="text-light ms-2">Facebook</a> |
//           {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
//           <a href="#" className="text-light ms-2">Instagram</a> |
//           {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
//           <a href="#" className="text-light ms-2">Twitter</a>
//         </p>
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
import { FaShoppingCart, FaGem, FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const JewelleryCards = () => {
  const [jewellery, setJewellery] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
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
        <div className="ms-auto d-flex align-items-center">
          <button className="btn btn-outline-light me-3" onClick={() => navigate("/cart", { state: { cart } })}>
            <FaShoppingCart className="me-2" /> Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)})
          </button>
          <button className="btn btn-outline-light" onClick={handleLogout}>Logout</button>
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
                        <strong>Price:</strong>{item.Price.INR}
                      </p>
                      <button className="btn btn-success" onClick={() => addToCart(item)}>
                        <FaShoppingCart className="me-2" /> Add to Cart
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