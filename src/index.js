import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating onSetRating={setMovieRating} color="blue" />
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating ratingStars={10} defaultRating={5} />
    <StarRating message={["Terrible", "Bad", "Good", "Great", "Amazing"]} />
    <StarRating ratingStars={15} defaultRating={25} />
    <StarRating color="red" size={24} />
    <Test /> */}
  </React.StrictMode>
);
