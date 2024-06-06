import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://665ffe705425580055b1aa8c.mockapi.io/";

export const fetchContacts = createAsyncThunk(
  "Contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/Contacts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "Contacts/addContact",
  async (newContacts, thunkAPI) => {
    try {
      const response = await axios.post("/Contacts", newContacts);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "Contacts/deleteContact",
  async (contactsId, thunkAPI) => {
    try {
      const response = await axios.delete(`/Contacts/${contactsId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
