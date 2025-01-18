import React, { useEffect, useState } from "react";
import axios from "axios";
import StockTable from "./StockTable";

const Dashboard = () => {
  const [stocks, setStocks] = useState([]);
  const [portfolioValue, setPortfolioValue] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:8080/api/stocks").then((response) => {
      setStocks(response.data);
    });

    axios.get("http://localhost:8080/api/stocks/value").then((response) => {
      setPortfolioValue(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Portfolio Dashboard</h1>
      <h2>Total Portfolio Value: ${portfolioValue.toFixed(2)}</h2>
      <StockTable stocks={stocks} setStocks={setStocks} />
    </div>
  );
};

export default Dashboard;