import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './Views/App/App.jsx';
import reportWebVitals from './reportWebVitals';
import Details from "./Views/Details/DetailsTwo.jsx";
import AddPets from "./Views/AddPets/AddPets.jsx";
import EditPets from "./Views/EditPets/EditPets.jsx";
import refreshPets from "./Views/App/App.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/pet/:id" element={<Details/>} />
      <Route path="/addPet" element={<AddPets />} />
      <Route path="/editPet/:id" element={<EditPets />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
