import React from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import history from "./history";
import Template from "./Template";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from "react-dom";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter history={history}>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="expenses" element={<Template />} />
      <Route path="invoices" element={<Template />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
reportWebVitals();
