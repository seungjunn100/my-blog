import { hydrateRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./app/router";

import "./styles/index.css";
import "highlight.js/styles/github-dark.css";

hydrateRoot(document.getElementById("root")!,
  <RouterProvider router={router} />
);