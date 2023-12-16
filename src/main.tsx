import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import GlobalStyles from "./GlobalStyles.ts";
import { TaskContextProvider } from "./Providers/GlobalContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TaskContextProvider>
      <App />
      <GlobalStyles />
    </TaskContextProvider>
  </React.StrictMode>
);
