import { configureStore } from "@reduxjs/toolkit";
import tmdbReducer from "./tmdbSlice";

export default configureStore({
  reducer: {
    tmdbData: tmdbReducer,
  },
});
