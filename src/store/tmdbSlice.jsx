import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bannerData: [],
};
export const tmdbSlice = createSlice({
  name: "tmdb",
  initialState,
  reducers: {
    setBannerData: (state, action) => {
      state.bannerData = action.payload;
    },
  },
});
export const { setBannerData } = tmdbSlice.actions;

export default tmdbSlice.reducer;
