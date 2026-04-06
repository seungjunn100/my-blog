import React from "react";
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import { router } from "./app/router";

import "./styles/index.css";
import "highlight.js/styles/github-dark.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);