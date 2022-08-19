import React, { useState } from "react";
import './app.scss';
import { Header } from './components/Header/Header';
import { Dropdown } from "./components/Dropdown/Dropdown";
import { Selection } from "./components/Selection/Selection"

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Selection />
      <Dropdown />
    </div>
  );
}

export default App;
