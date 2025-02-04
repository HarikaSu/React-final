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
    const total = cart.reduce(
      (total, item) => total + item.Price.INR * item.quantity,
      0
    );
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
  );
};

export default CartPage;




