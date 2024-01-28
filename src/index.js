import React from "react";
import ReactDOM from "react-dom/client";

//Import CSS
import "@fortawesome/fontawesome-free/css/all.min.css"; // Fontawesome
import "font-awesome/css/font-awesome.min.css";
import "boxicons/css/boxicons.css"; //boxicon for font
import "remixicon/fonts/remixicon.css"; //Remixicon
import "bootstrap/dist/css/bootstrap.min.css"; //Bootstrap CSS
// import 'swiper/swiper.css'; //swiper CSS
import "../src/vendor/icofont/icofont.min.css"; //Icofont
import "./index.css"; // index.css

//App
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
