// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

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
//       // Increment quantity if item already exists
//       setCart(
//         cart.map((cartItem) =>
//           cartItem.id === item.id
//             ? { ...cartItem, quantity: cartItem.quantity + 1 }
//             : cartItem
//         )
//       );
//     } else {
//       // Add item to cart with quantity 1
//       setCart([...cart, { ...item, quantity: 1 }]);
//     }
//     navigate("/cart", { state: { cart: [...cart, { ...item, quantity: 1 }] } });
//   };

//   const filteredJewellery = jewellery.filter((item) =>
//     item.Product_Name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="container mt-4">
//       <div className="row justify-content-center mb-4">
//         <div className="col-md-6">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Search Jewellery..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>
//       </div>
//       <div className="row">
//         {filteredJewellery.map((item) => (
//           <div key={item.id} className="col-md-4 mb-4">
//             <div className="card shadow-sm">
//               <img
//                 src={item.Img_Url}
//                 className="card-img-top"
//                 alt={item.Product_Name}
//                 style={{ height: "200px", objectFit: "cover" }}
//               />
//               <div className="card-body">
//                 <h5 className="card-title">{item.Product_Name}</h5>
//                 <p className="card-text">
//                   <strong>Price (USA):</strong> ${item.Price.USD} <br />
//                   <strong>Price (INR):</strong> ₹{item.Price.INR}
//                 </p>
//                 <button className="btn btn-success" onClick={() => addToCart(item)}>
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default JewelleryCards;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaShoppingCart } from "react-icons/fa";

const JewelleryCards = () => {
  const [jewellery, setJewellery] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://678f799a49875e5a1a9209c1.mockapi.io/jewellery/api/jewellery")
      .then((response) => response.json())
      .then((data) => setJewellery(data))
      .catch((error) => console.error("Error fetching data:", error));
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

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark px-4">
        <span className="navbar-brand">Jewellery Store</span>
        <button className="btn btn-outline-light" onClick={() => navigate("/cart", { state: { cart } })}>
          <FaShoppingCart /> Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)})
        </button>
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
        
        {/* Jewellery Cards */}
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
                      <strong>Price (USA):</strong> ${item.Price.USD} <br />
                      <strong>Price (INR):</strong> ₹{item.Price.INR}
                    </p>
                    <button className="btn btn-success" onClick={() => addToCart(item)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JewelleryCards;
