import axios from "axios";
import React, { useEffect, useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, deleteData, editData } from "../Redux/action";

export default function Population() {
  const dispatch = useDispatch();

  const store = useSelector((store) => store.data);

  console.log("**", store);

  store.sort((a, b) => {
    if (a.country > b.country) {
      return 1;
    }

    if (a.country < b.country) {
      return -1;
    }

    return 0;
  });

  useEffect(() => {
    axios.get("http://localhost:8080/data").then((res) => {
      dispatch(fetchData(res.data));
    });
  }, []);

  return (
    <div>
      <div className="filter">
        <select name="" id="country_filter">
          <option value="">Choose country</option>
          <option value="Tanzania">Tanzania</option>
          <option value="Indonesia">Indonesia</option>
          <option value="China">China</option>
          <option value="Sweden">Sweden</option>
          <option value="Russia">Russia</option>
          <option value="Philippines">Philippines</option>
          <option value="Mexico">Mexico</option>
          <option value="Brazil">Brazil</option>
          <option value="France">France</option>
          <option value="United States">United States</option>
          <option value="Japan">Japan</option>
          <option value="Bangladesh">Bangladesh</option>
        </select>

        <select name="" id="sort">
          <option value="">Sort by Population</option>
          <option value="low_to_high">Low to High</option>
          <option value="high_to_low">high to Low</option>
        </select>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Population</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {store.map((e) => {
              return (
                <TableRow key={e.id}>
                  <TableCell>{e.id}</TableCell>
                  <TableCell>{e.country}</TableCell>
                  <TableCell>{e.city}</TableCell>
                  <TableCell>{e.population.toLocaleString()}</TableCell>
                  <TableCell
                    onClick={() => {
                      dispatch(editData());
                    }}
                  >
                    Edit
                  </TableCell>
                  <TableCell
                    onClick={() => {
                      dispatch(deleteData(e));
                    }}
                  >
                    Delete
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
