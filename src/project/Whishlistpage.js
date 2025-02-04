// import React, { useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const WishlistPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [wishlist, setWishlist] = React.useState(location.state?.wishlist || []);

//   useEffect(() => {
//     document.title = "Welcome to Your Wishlist";
//   }, []);

//   const removeFromWishlist = (id) => {
//     setWishlist(wishlist.filter((item) => item.id !== id));
//   };

//   return (
//     <div 
//       className="container d-flex flex-column align-items-center justify-content-start min-vh-100 py-4 px-5" 
//       style={{ backgroundColor: "white" }}
//     >
//       <div 
//         className="card shadow-lg w-75 border-0" 
//         style={{ backgroundColor: "white", border: "2px solid red" }}
//       >
//         <div 
//           className="card-header text-danger text-center py-3" 
//           style={{ backgroundColor: "white" }}
//         >
//           <h2 className="mb-0" style={{ color: "#FF4500" }}>Welcome to Your Wishlist</h2>
//         </div>
//         <div className="card-body">
//           {wishlist.length === 0 ? (
//             <p className="text-center" style={{ color: "#FF4500" }}>Your wishlist is empty</p>
//           ) : (
//             <ul className="list-group">
//               {wishlist.map((item) => (
//                 <li 
//                   key={item.id} 
//                   className="list-group-item d-flex justify-content-between align-items-center" 
//                   style={{ border: "1px solid red", backgroundColor: "white" }}
//                 >
//                   <span>
//                     <img
//                       src={item.Img_Url}
//                       alt={item.Product_Name}
//                       style={{ width: "50px", height: "50px", marginRight: "10px", border: "2px solid red" }}
//                     />
//                     {item.Product_Name}
//                   </span>
//                   <div className="d-flex align-items-center">
//                     <button
//                       className="btn btn-sm"
//                       style={{ 
//                         backgroundColor: "white", 
//                         color: "#FF4500", 
//                         border: "1px solid #FF4500" 
//                       }}
//                       onClick={() => removeFromWishlist(item.id)}
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           )}
//           <button 
//   className="btn btn-sm mt-3 px-3 text-start" 
//   style={{ backgroundColor: "#FF4500", color: "white", width: "auto" }} 
//   onClick={() => navigate("/home")}
// >
//   Continue Shopping
// </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WishlistPage;
// 
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const WishlistPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [wishlist, setWishlist] = React.useState(location.state?.wishlist || []);

  useEffect(() => {
    document.title = "Your Wishlist";
  }, []);

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-start min-vh-100 py-4 px-3">
      <div className="card shadow-lg w-100 w-md-75 w-lg-50 border-0" style={{ border: "2px solid red" }}>
        
        <div className="card-header text-center py-3" style={{ backgroundColor: "white" }}>
          <h2 className="mb-0" style={{ color: "#FF4500", fontSize: "1.8rem" }}>Your Wishlist</h2>
        </div>

        <div className="card-body">
          {wishlist.length === 0 ? (
            <p className="text-center text-danger fs-5">Your wishlist is empty</p>
          ) : (
            <ul className="list-group">
              {wishlist.map((item) => (
                <li 
                  key={item.id} 
                  className="list-group-item d-flex flex-column flex-sm-row justify-content-between align-items-center p-3" 
                  style={{ border: "1px solid red", backgroundColor: "white" }}
                >
                  {/* Product Info */}
                  <div className="d-flex align-items-center flex-wrap text-center text-sm-start">
                    <img
                      src={item.Img_Url}
                      alt={item.Product_Name}
                      className="img-fluid rounded"
                      style={{ 
                        width: "60px", 
                        height: "60px", 
                        marginRight: "10px", 
                        border: "2px solid red",
                        objectFit: "cover"
                      }}
                    />
                    <span className="fw-bold fs-6">{item.Product_Name}</span>
                  </div>

                  {/* Remove Button */}
                  <button
                    className="btn btn-sm mt-2 mt-sm-0"
                    style={{ 
                      backgroundColor: "white", 
                      color: "#FF4500", 
                      border: "1px solid #FF4500",
                      transition: "0.3s ease-in-out"
                    }}
                    onClick={() => removeFromWishlist(item.id)}
                    onMouseOver={(e) => e.target.style.backgroundColor = "#FF4500"}
                    onMouseOut={(e) => e.target.style.backgroundColor = "white"}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}

          {/* Continue Shopping Button */}
          <div className="d-flex justify-content-center">
            <button 
              className="btn mt-3 px-4 py-2 fw-bold" 
              style={{ 
                backgroundColor: "#FF4500", 
                color: "white", 
                width: "100%", 
                transition: "0.3s ease-in-out"
              }} 
              onClick={() => navigate("/home")}
              onMouseOver={(e) => e.target.style.backgroundColor = "#D43F00"}
              onMouseOut={(e) => e.target.style.backgroundColor = "#FF4500"}
            >
              Continue Shopping
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WishlistPage;




