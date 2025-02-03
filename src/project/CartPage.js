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
//     <div className="container d-flex flex-column align-items-center justify-content-start min-vh-100 py-4 px-5">
//       <div className="card p-4 shadow-lg w-75">
//         <h2 className="text-center mb-4">Your Shopping Cart</h2>
//         {cart.length === 0 ? (
//           <p className="text-center text-danger">Your cart is empty</p>
//         ) : (
//           <>
//             <ul className="list-group">
//               {cart.map((item) => (
//                 <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
//                   <span>
//                     <img
//                       src={item.Img_Url}
//                       alt={item.Product_Name}
//                       style={{ width: "50px", height: "50px", marginRight: "10px" }}
//                     />
//                     {item.Product_Name} - ₹{item.Price.INR}
//                   </span>
//                   <div className="d-flex align-items-center">
//                     <button
//                       className="btn btn-sm btn-outline-secondary"
//                       onClick={() => decrementQuantity(item.id)}
//                     >
//                       -
//                     </button>
//                     <span className="mx-2">{item.quantity}</span>
//                     <button
//                       className="btn btn-sm btn-outline-secondary"
//                       onClick={() => incrementQuantity(item.id)}
//                     >
//                       +
//                     </button>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//             <h4 className="text-center mt-3">Total: ₹{calculateTotal()}</h4>
//           </>
//         )}
//         <button className="btn btn-sm btn-primary mt-3 px-2" style={{ width: "150px" }} onClick={() => navigate("/home")}>
//           Continue Shopping
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CartPage;
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

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
    return total.toFixed(2); // Limits the total to two decimal places
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-start min-vh-100 py-4 px-5" style={{ backgroundColor: "white" }}>
      <div className="card p-4 shadow-lg w-75" style={{ backgroundColor: "white", border: "2px solid #28a745" }}>
        {/* <div className="card-header text-center py-3" style={{ color: "rgb(40,167,69)" }}>
          <h2 className="mb-0">Welcome to Your Cart</h2>
        </div> */}
        <div className="card-header text-center py-3">
  <h2 className="mb-0" style={{ color: "#28a745" }}>Welcome to Your Cart</h2>
</div>

        <div className="card-body">
          {cart.length === 0 ? (
            <p className="text-center text-danger">Your cart is empty</p>
          ) : (
            <>
              <ul className="list-group">
                {cart.map((item) => (
                  <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                    <span>
                      <img
                        src={item.Img_Url}
                        alt={item.Product_Name}
                        style={{ width: "50px", height: "50px", marginRight: "10px" }}
                      />
                      {item.Product_Name} - ₹{item.Price.INR}
                    </span>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-sm btn-outline-success"
                        onClick={() => decrementQuantity(item.id)}
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        className="btn btn-sm btn-outline-success"
                        onClick={() => incrementQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <h4 className="text-center mt-3">Total: ₹{calculateTotal()}</h4>
            </>
          )}
          <button
            className="btn btn-sm mt-3 px-2"
            style={{ backgroundColor: "#28a745", color: "white", width: "150px" }}
            onClick={() => navigate("/home")}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;


