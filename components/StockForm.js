import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const StockForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [stock, setStock] = useState({ name: "", ticker: "", quantity: 1, buyPrice: "" });

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8080/api/stocks/${id}`).then((response) => {
        setStock(response.data);
      });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStock({ ...stock, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const apiCall = id
      ? axios.put(`http://localhost:8080/api/stocks/${id}`, stock)
      : axios.post("http://localhost:8080/api/stocks", stock);

    apiCall.then(() => {
      alert(id ? "Stock updated successfully!" : "Stock added successfully!");
      navigate("/");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={stock.name} onChange={handleChange} />
      </label>
      <label>
        Ticker:
        <input type="text" name="ticker" value={stock.ticker} onChange={handleChange} />
      </label>
      <label>
        Quantity:
        <input type="number" name="quantity" value={stock.quantity} onChange={handleChange} />
      </label>
      <label>
        Buy Price:
        <input type="number" name="buyPrice" value={stock.buyPrice} onChange={handleChange} />
      </label>
      <button type="submit">{id ? "Update Stock" : "Add Stock"}</button>
    </form>
  );
};

export default StockForm;
