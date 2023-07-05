import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { fetchCount } from "./cardsAPI";

export interface ICard {
  id: string;
  name: string;
  price: string;
  description?: string;
  imgLink: string;
  status: "available" | "bought";
}

export interface CardsState {
  cards: ICard[];
  status: "fulfilled" | "pending" | "rejected";
}

const initialState: CardsState = {
  cards: [
    {
      id: "1",
      name: "Name 1",
      price: "price 1",
      imgLink: "",
      status: "available",
    },
    {
      id: "2",
      name: "Name 2",
      price: "price 2",
      imgLink: "",
      status: "bought",
      description: "description 2",
    },
  ],
  status: "fulfilled",
};

export const incrementAsync = createAsyncThunk(
  "counter/fetchCount",
  async (amount: number) => {
    const response = await fetchCount(amount);
    return response.data;
  }
);

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ICard>) => {
      state.cards.push(action.payload);
    },
    remove: (state, action: PayloadAction<string>) => {
      state.cards = state.cards.filter(({ id }) => id !== action.payload);
    },
    buy: (state, action: PayloadAction<string>) => {
      state.cards = state.cards.map((card) =>
        card.id === action.payload ? { ...card, status: "bought" } : card
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        // state.status = "pending";
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        // state.status = "fulfilled";
        // state.value += action.payload;
      })
      .addCase(incrementAsync.rejected, (state) => {
        // state.status = "rejected";
      });
  },
});

export const { add, remove, buy } = cardsSlice.actions;
export const selectCards = (state: RootState) => state.cards;

export default cardsSlice.reducer;
