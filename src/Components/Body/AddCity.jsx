import axios from "axios";
import React, { useState } from "react";

export default function AddCity() {
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8080/data", formData).then(() => {
      alert("Country Added");
    });
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          id="country"
          placeholder="Enter Country"
          onChange={handleChange}
        />
        <input
          type="text"
          id="city"
          placeholder="Enter City"
          onChange={handleChange}
        />
        <input
          type="text"
          id="population"
          placeholder="Enter Population"
          onChange={handleChange}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
