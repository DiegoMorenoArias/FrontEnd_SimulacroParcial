import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './Views/App/App.jsx';
import reportWebVitals from './reportWebVitals';
import Details from "./Views/Details/DetailsTwo.jsx";
import AddGame from "./Views/AddGame/AddGame.jsx";
import EditGame from "./Views/EditGame/EditGame.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/game/:id" element={<Details />} />
      <Route path="/addGame" element={<AddGame />} />
      <Route path="/editGame/:id" element={<EditGame />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
