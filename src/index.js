import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { AuthContextProvider } from "./store/AuthContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
