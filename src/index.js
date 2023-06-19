import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { QueryClient, QueryClientProvider } from "react-query";
import UserContest from "./Context/UserContest";
const queryclient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserContest>
    <React.StrictMode>
      <QueryClientProvider client={queryclient}>
        <App />
      </QueryClientProvider>
    </React.StrictMode>
  </UserContest>
);
reportWebVitals();
