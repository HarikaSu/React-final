// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import "./cartpages.css"; // Import the CSS file

// const CartPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [cart, setCart] = React.useState(location.state?.cart || []);

//   const incrementQuantity = (id) => {
//     setCart(
//       cart.map((item) =>
//         item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );
//   };

//   const decrementQuantity = (id) => {
//     setCart((prevCart) => {
//       const updatedCart = prevCart
//         .map((item) =>
//           item.id === id
//             ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 }
//             : item
//         )
//         .filter((item) => item.quantity > 0);
//       return updatedCart;
//     });
//   };

//   const calculateTotal = () => {
//     const total = cart.reduce((total, item) => total + item.Price.INR * item.quantity, 0);
//     return total.toFixed(2);
//   };

//   return (
//     <div className="cart-container">
//       <div className="cart-card">
//         <div className="cart-header">
//           <h2>Your Cart</h2>
//         </div>

//         <div className="cart-body">
//           {cart.length === 0 ? (
//             <p className="empty-cart">Your cart is empty</p>
//           ) : (
//             <>
//               <ul className="cart-list">
//                 {cart.map((item) => (
//                   <li key={item.id} className="cart-item">
//                     <div className="cart-item-info">
//                       <img src={item.Img_Url} alt={item.Product_Name} className="cart-item-img" />
//                       <span className="cart-item-name">{item.Product_Name}</span>
//                     </div>

//                     <div className="cart-item-controls">
//                       <button className="quantity-btn" onClick={() => decrementQuantity(item.id)}>-</button>
//                       <span className="cart-quantity">{item.quantity}</span>
//                       <button className="quantity-btn" onClick={() => incrementQuantity(item.id)}>+</button>
//                     </div>
//                   </li>
//                 ))}
//               </ul>

//               <h4 className="cart-total">Total: ₹{calculateTotal()}</h4>
//             </>
//           )}

//           <div className="cart-footer">
//             <button className="cart-btn" onClick={() => navigate("/home")}>
//               Continue Shopping
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPage;
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaUser, FaBars, FaGem } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cartpages.css"; // Import the CSS file

const CartPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [cart, setCart] = React.useState(location.state?.cart || []);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const incrementQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 0 }
            : item
        )
        .filter((item) => item.quantity > 0);
      return updatedCart;
    });
  };

  const calculateTotal = () => {
    const total = cart.reduce(
      (total, item) => total + item.Price.INR * item.quantity,
      0
    );
    return total.toFixed(2);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm px-4 py-3">
        <span className="navbar-brand fw-bold fs-4">
          <FaGem className="me-2" /> Bhavii Jeweller's
        </span>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen ? "true" : "false"}
        >
          <FaBars className="text-light" />
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto d-lg-flex align-items-center">
            <div className="d-flex flex-column flex-lg-row mt-3 mt-lg-0 gap-3">
              <li className="nav-item">
                <button className="btn btn-outline-light px-3 me-3" onClick={() => navigate("/cart", { state: { cart } })}>
                  <FaShoppingCart className="me-2" /> Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)})
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-light px-3 me-3" onClick={() => navigate("/wishlist")}> 
                  <FaHeart className="me-2" /> Wishlist
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-light px-3" onClick={() => navigate("/login")}> 
                  <FaUser className="me-2" /> Logout
                </button>
              </li>
            </div>
          </ul>
        </div>
      </nav>

      {/* Cart Content */}
      <div className="cart-container">
        <div className="cart-card">
          <div className="cart-header">
            <h2>Your Cart</h2>
          </div>

          <div className="cart-body">
            {cart.length === 0 ? (
              <div className="empty-cart-container">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/004/964/514/non_2x/young-man-shopping-push-empty-shopping-trolley-free-vector.jpg"
                  alt="Empty Cart"
                  className="empty-cart-img"
                />
                <p className="empty-cart-message">
                  Oops! Your cart is empty. Start shopping now.
                </p>
                <button className="cart-btn" onClick={() => navigate("/home")}>
                  Start Shopping
                </button>
              </div>
            ) : (
              <>
                <ul className="cart-list">
                  {cart.map((item) => (
                    <li key={item.id} className="cart-item">
                      <div className="cart-item-info">
                        <img
                          src={item.Img_Url}
                          alt={item.Product_Name}
                          className="cart-item-img"
                        />
                        <span className="cart-item-name">{item.Product_Name}</span>
                      </div>

                      <div className="cart-item-controls">
                        <button
                          className="quantity-btn"
                          onClick={() => decrementQuantity(item.id)}
                        >
                          -
                        </button>
                        <span className="cart-quantity">{item.quantity}</span>
                        <button
                          className="quantity-btn"
                          onClick={() => incrementQuantity(item.id)}
                        >
                          +
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                <h4 className="cart-total">Total: ₹{calculateTotal()}</h4>
              </>
            )}
          </div>
          <div className="cart-footer">
            <button className="cart-btn" onClick={() => navigate("/home")}>
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
