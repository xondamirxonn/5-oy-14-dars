import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

// toastify
import "react-toastify/dist/ReactToastify.css";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// Redux
import { Provider } from "react-redux";
import store from "./Store";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
        <ToastContainer />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
