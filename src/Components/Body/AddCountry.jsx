import axios from "axios";
import React, { useEffect, useState } from "react";

export default function AddCountry() {
  const [formData, setFormData] = useState({});

  // useEffect(() => {
  //   axios.get("http://localhost:8080/data2").then((res) => {
  //     setCity(res.data);
  //   });
  // }, []);

  const handleChange = (e) => {
    console.log(e.target.value);
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8080/data2", formData).then(() => {
      alert("Country Added");
    });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id="country"
          placeholder="Enter Counrty"
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
