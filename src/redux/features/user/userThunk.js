import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://localhost:44345/api/Users";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const { data } = await axios.get(`${baseUrl}`);
  return data;
});
