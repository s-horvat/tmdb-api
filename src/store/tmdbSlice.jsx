import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bannerData: [],
  imageURL: "",
};
export const tmdbSlice = createSlice({
  name: "tmdb",
  initialState,
  reducers: {
    setBannerData: (state, action) => {
      state.bannerData = action.payload;
    },
    setImageURL: (state, action) => {
      state.imageURL = action.payload;
    },
  },
});
export const { setBannerData, setImageURL } = tmdbSlice.actions;

export default tmdbSlice.reducer;
