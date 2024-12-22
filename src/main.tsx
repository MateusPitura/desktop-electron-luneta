import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { GlobalProvider } from "./GlobalProvider.tsx";

declare global {
  interface Window {
    electron: {
      send: (channel: string, data: string) => void;
      receive: (channel: string, callback: (...args: string[]) => void) => void;
    };
  }
}

createRoot(document.getElementById("root")!).render(
  <GlobalProvider>
    <App />
  </GlobalProvider>
);
