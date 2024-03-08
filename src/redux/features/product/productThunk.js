import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://localhost:44345/api/Products";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const { data } = await axios.get(`${baseUrl}`);
    return data;
  }
);
