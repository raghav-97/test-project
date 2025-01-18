import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import StockForm from "./components/StockForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-stock" element={<StockForm />} />
        <Route path="/edit-stock/:id" element={<StockForm />} />
      </Routes>
    </Router>
  );
};

export default App;