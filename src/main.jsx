import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import { AppProvider } from "../Hooks/useAppLogic.jsx";
import "./style.css";
createRoot(document.getElementById("root")).render(
  <AppProvider>
    <App />
  </AppProvider>
);
