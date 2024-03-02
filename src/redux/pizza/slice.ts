import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
// import { cartItem } from "";
import { Pizza, SearchPizzaParams, Status } from "./types";
import { fetchPizzas } from "./asyncActions";

interface pizzaSliceState {
  items: Pizza[];
  status: "loading" | "success" | "error";
}

const initialState: pizzaSliceState = {
  items: [],
  status: Status.LOADING,
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Pizza[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
        // console.log("Идет отправка...........");
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = Status.SUCCES;
        // console.log("ВСЕ ОК !!!!!!!!!!!!");
      })
      .addCase(fetchPizzas.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
        // console.log("ОШИБКА!!!!!!!!!");
      });
  },
});

export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
