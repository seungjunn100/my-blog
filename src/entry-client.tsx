import { hydrateRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import { router } from "./app/router";
import "./styles/index.css";
import "highlight.js/styles/github-dark.css";

hydrateRoot(
  document.getElementById("root")!,
  <HelmetProvider>
    <RouterProvider router={router} />
  </HelmetProvider>
);