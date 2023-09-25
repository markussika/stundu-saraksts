import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// 1. panem elementu no index.html
const noDOM = document.getElementById("root");

// 2. Parvers realo elementu par react sakni
const root = reactDOM.createRoot(noDOM);

// 3. react sakne rendere pirmo komponenti (App)
root.render(
<React.StrictMode>
    <app/>
</React.StrictMode>
);
