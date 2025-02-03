// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const WishlistPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [wishlist, setWishlist] = React.useState(location.state?.wishlist || []);

//   const removeFromWishlist = (id) => {
//     setWishlist(wishlist.filter((item) => item.id !== id));
//   };

//   const calculateTotal = () => {
//     const total = wishlist.reduce((total, item) => total + item.Price.INR, 0);
//     return total.toFixed(2); // Limits the total to two decimal places
//   };

//   return (
//     <div className="container d-flex flex-column align-items-center justify-content-start min-vh-100 py-4 px-5">
//       <div className="card p-4 shadow-lg w-75">
//         <h2 className="text-center mb-4">Your Wishlist</h2>
//         {wishlist.length === 0 ? (
//           <p className="text-center text-danger">Your wishlist is empty</p>
//         ) : (
//           <>
//             <ul className="list-group">
//               {wishlist.map((item) => (
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
//                       onClick={() => removeFromWishlist(item.id)}
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//             <h4 className="text-center mt-3">Total Value: ₹{calculateTotal()}</h4>
//           </>
//         )}
//         <button className="btn btn-sm btn-primary mt-3 px-2" style={{ width: "150px" }} onClick={() => navigate("/home")}>
//           Continue Shopping
//         </button>
//       </div>
//     </div>
//   );
// };

// export default WishlistPage;
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const WishlistPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [wishlist, setWishlist] = React.useState(location.state?.wishlist || []);

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-start min-vh-100 py-4 px-5">
      <div className="card p-4 shadow-lg w-75">
        <h2 className="text-center mb-4">Your Wishlist</h2>
        {wishlist.length === 0 ? (
          <p className="text-center text-danger">Your wishlist is empty</p>
        ) : (
          <>
            <ul className="list-group">
              {wishlist.map((item) => (
                <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                  <span>
                    <img
                      src={item.Img_Url}
                      alt={item.Product_Name}
                      style={{ width: "50px", height: "50px", marginRight: "10px" }}
                    />
                    {item.Product_Name}
                  </span>
                  <div className="d-flex align-items-center">
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
        <button className="btn btn-sm btn-primary mt-3 px-2" style={{ width: "150px" }} onClick={() => navigate("/home")}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default WishlistPage;

