import React from "react";

import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import { ThemeProvider } from "./context/ThemeContext";

import App from "./App";

import AuthProvider from "./context/AuthContext";
import WishlistProvider from "./context/WishlistContext";


import "react-toastify/dist/ReactToastify.css";



import "./styles/reset.css";


import "./styles/variables.css";

import "./styles/global.css";



ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>

    <BrowserRouter>
<ThemeProvider>
     <AuthProvider>
      <WishlistProvider>

      <App />



      <ToastContainer

        position="top-right"

        autoClose={3000}

        hideProgressBar={false}

        newestOnTop

        closeOnClick

        pauseOnHover

        draggable

        theme="dark"

      />
      </WishlistProvider>

      </AuthProvider>
</ThemeProvider>
    </BrowserRouter>

  </React.StrictMode>

);