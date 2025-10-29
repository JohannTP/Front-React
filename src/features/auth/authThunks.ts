import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../api/client";
import type { LoginParams, Usuario } from "./types";

export const login = createAsyncThunk<Usuario, LoginParams>(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axiosClient.post<Usuario>(
        "/usuarios/autenticar",
        credentials
      );
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data || "Error de login");
    }
  }
);
