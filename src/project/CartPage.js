// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";

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
//     return total.toFixed(2); // Limits the total to two decimal places
//   };

//   return (
//     <div className="container d-flex flex-column align-items-center justify-content-start min-vh-100 py-4 px-5" style={{ backgroundColor: "white" }}>
//       <div className="card p-4 shadow-lg w-75" style={{ backgroundColor: "white", border: "2px solid #28a745" }}>
//         <div className="card-header text-center py-3">
//   <h2 className="mb-0" style={{ color: "#28a745" }}>Welcome to Your Cart</h2>
// </div>

//         <div className="card-body">
//           {cart.length === 0 ? (
//             <p className="text-center text-danger">Your cart is empty</p>
//           ) : (
//             <>
//               <ul className="list-group">
//                 {cart.map((item) => (
//                   <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
//                     <span>
//                       <img
//                         src={item.Img_Url}
//                         alt={item.Product_Name}
//                         style={{ width: "50px", height: "50px", marginRight: "10px" }}
//                       />
//                       {item.Product_Name} - ₹{item.Price.INR}
//                     </span>
//                     <div className="d-flex align-items-center">
//                       <button
//                         className="btn btn-sm btn-outline-success"
//                         onClick={() => decrementQuantity(item.id)}
//                       >
//                         -
//                       </button>
//                       <span className="mx-2">{item.quantity}</span>
//                       <button
//                         className="btn btn-sm btn-outline-success"
//                         onClick={() => incrementQuantity(item.id)}
//                       >
//                         +
//                       </button>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//               <h4 className="text-center mt-3">Total: ₹{calculateTotal()}</h4>
//             </>
//           )}
//           <button
//             className="btn btn-sm mt-3 px-2"
//             style={{ backgroundColor: "#28a745", color: "white", width: "150px" }}
//             onClick={() => navigate("/home")}
//           >
//             Continue Shopping
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPage;
// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";

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
//     <div className="container d-flex flex-column align-items-center justify-content-start min-vh-100 py-4 px-3" style={{ backgroundColor: "white" }}>
//       <div className="card p-3 shadow-lg w-100 w-md-75 w-lg-50" style={{ backgroundColor: "white", border: "2px solid #28a745" }}>
        
//         <div className="card-header text-center py-2">
//           <h2 className="mb-0" style={{ color: "#28a745", fontSize: "1.5rem" }}>Your Cart</h2>
//         </div>

//         <div className="card-body">
//           {cart.length === 0 ? (
//             <p className="text-center text-danger">Your cart is empty</p>
//           ) : (
//             <>
//               <ul className="list-group">
//                 {cart.map((item) => (
//                   <li key={item.id} className="list-group-item d-flex flex-column flex-sm-row justify-content-between align-items-center">
//                     <div className="d-flex align-items-center text-center text-sm-start">
//                       <img
//                         src={item.Img_Url}
//                         alt={item.Product_Name}
//                         className="img-fluid rounded"
//                         style={{ width: "50px", height: "50px", marginRight: "10px" }}
//                       />
//                       <span className="fw-bold">{item.Product_Name}</span>
//                     </div>

//                     <div className="d-flex align-items-center mt-2 mt-sm-0">
//                       <button className="btn btn-sm btn-outline-success px-2 py-1" onClick={() => decrementQuantity(item.id)}>-</button>
//                       <span className="mx-2">{item.quantity}</span>
//                       <button className="btn btn-sm btn-outline-success px-2 py-1" onClick={() => incrementQuantity(item.id)}>+</button>
//                     </div>
//                   </li>
//                 ))}
//               </ul>

//               <h4 className="text-center mt-3 fw-bold">Total: ₹{calculateTotal()}</h4>
//             </>
//           )}
          
//           <div className="d-flex justify-content-center">
//             <button
//               className="btn mt-3 px-3 py-2"
//               style={{ backgroundColor: "#28a745", color: "white", width: "25%" }}
//               onClick={() => navigate("/home")}
//             >
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
import "./cartpages.css"; // Import the CSS file

const CartPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [cart, setCart] = React.useState(location.state?.cart || []);

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
            ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 }
            : item
        )
        .filter((item) => item.quantity > 0);
      return updatedCart;
    });
  };

  const calculateTotal = () => {
    const total = cart.reduce((total, item) => total + item.Price.INR * item.quantity, 0);
    return total.toFixed(2);
  };

  return (
    <div className="cart-container">
      <div className="cart-card">
        <div className="cart-header">
          <h2>Your Cart</h2>
        </div>

        <div className="cart-body">
          {cart.length === 0 ? (
            <p className="empty-cart">Your cart is empty</p>
          ) : (
            <>
              <ul className="cart-list">
                {cart.map((item) => (
                  <li key={item.id} className="cart-item">
                    <div className="cart-item-info">
                      <img src={item.Img_Url} alt={item.Product_Name} className="cart-item-img" />
                      <span className="cart-item-name">{item.Product_Name}</span>
                    </div>

                    <div className="cart-item-controls">
                      <button className="quantity-btn" onClick={() => decrementQuantity(item.id)}>-</button>
                      <span className="cart-quantity">{item.quantity}</span>
                      <button className="quantity-btn" onClick={() => incrementQuantity(item.id)}>+</button>
                    </div>
                  </li>
                ))}
              </ul>

              <h4 className="cart-total">Total: ₹{calculateTotal()}</h4>
            </>
          )}

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



