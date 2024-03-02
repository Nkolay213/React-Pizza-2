import { createAsyncThunk } from "@reduxjs/toolkit";
import { Pizza, SearchPizzaParams } from "./types";
import axios from "axios";

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
  "pizza/fetchPizzasStatus",
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params;
    const { data } = await axios.get<Pizza[]>(
      `https://655a82826981238d054d8ada.mockapi.io/items?page=${currentPage}&limit=4&search=${search}&${category}&sortBy=${sortBy}&order=${order}`
    );
    return data;
  }
);
