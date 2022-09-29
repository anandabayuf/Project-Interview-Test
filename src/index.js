import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import CreateCustomer from "./pages/Create-Customer";
import EditCustomer from "./pages/Edit-Customer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/customers" element={<App />}>
				<Route index element={<Home />} />
				<Route path="create" element={<CreateCustomer />} />
				<Route path="edit/:id" element={<EditCustomer />} />
			</Route>
			<Route path="*" element={<Navigate to="/customers" />} />
		</Routes>
	</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
