import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://localhost:44345/api/Orders";

export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
  const { data } = await axios.get(`${baseUrl}`);
  return data;
});
