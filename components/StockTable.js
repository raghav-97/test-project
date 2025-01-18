import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const StockTable = ({ stocks, setStocks }) => {
  const navigate = useNavigate();

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this stock?")) {
      axios.delete(`http://localhost:8080/api/stocks/${id}`).then(() => {
        setStocks(stocks.filter((stock) => stock.id !== id));
      });
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Ticker</th>
          <th>Quantity</th>
          <th>Buy Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {stocks.map((stock) => (
          <tr key={stock.id}>
            <td>{stock.name}</td>
            <td>{stock.ticker}</td>
            <td>{stock.quantity}</td>
            <td>${stock.buyPrice.toFixed(2)}</td>
            <td>
              <button onClick={() => navigate(`/edit-stock/${stock.id}`)}>Edit</button>
              <button onClick={() => handleDelete(stock.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StockTable;