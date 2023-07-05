import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import cardsReducer from "./stores/cards/cardsSlice";

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
