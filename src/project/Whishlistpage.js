// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const WishlistPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [wishlist, setWishlist] = React.useState(location.state?.wishlist || []);

//   const removeFromWishlist = (id) => {
//     setWishlist(wishlist.filter((item) => item.id !== id));
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
//                     {item.Product_Name}
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
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const WishlistPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [wishlist, setWishlist] = React.useState(location.state?.wishlist || []);

  useEffect(() => {
    document.title = "Welcome to Your Wishlist";
  }, []);

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <div 
      className="container d-flex flex-column align-items-center justify-content-start min-vh-100 py-4 px-5" 
      style={{ backgroundColor: "white" }}
    >
      <div 
        className="card shadow-lg w-75 border-0" 
        style={{ backgroundColor: "white", border: "2px solid red" }}
      >
        <div 
          className="card-header text-danger text-center py-3" 
          style={{ backgroundColor: "white" }}
        >
          <h2 className="mb-0" style={{ color: "#FF4500" }}>Welcome to Your Wishlist</h2>
        </div>
        <div className="card-body">
          {wishlist.length === 0 ? (
            <p className="text-center" style={{ color: "#FF4500" }}>Your wishlist is empty</p>
          ) : (
            <ul className="list-group">
              {wishlist.map((item) => (
                <li 
                  key={item.id} 
                  className="list-group-item d-flex justify-content-between align-items-center" 
                  style={{ border: "1px solid red", backgroundColor: "white" }}
                >
                  <span>
                    <img
                      src={item.Img_Url}
                      alt={item.Product_Name}
                      style={{ width: "50px", height: "50px", marginRight: "10px", border: "2px solid red" }}
                    />
                    {item.Product_Name}
                  </span>
                  <div className="d-flex align-items-center">
                    <button
                      className="btn btn-sm"
                      style={{ 
                        backgroundColor: "white", 
                        color: "#FF4500", 
                        border: "1px solid #FF4500" 
                      }}
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
          {/* <button 
            className="btn btn-sm mt-3 px-2 w-100" 
            style={{ backgroundColor: "#FF4500", color: "white" }} 
            onClick={() => navigate("/home")}
          >
            Continue Shopping
          </button> */}
          <button 
  className="btn btn-sm mt-3 px-3 text-start" 
  style={{ backgroundColor: "#FF4500", color: "white", width: "auto" }} 
  onClick={() => navigate("/home")}
>
  Continue Shopping
</button>
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;


