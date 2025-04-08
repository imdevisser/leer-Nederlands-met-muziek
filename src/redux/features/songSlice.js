import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSong: null,
  isPlaying: false,
};

const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    selectSong: (state, action) => {
      state.currentSong = action.payload;
      state.isPlaying = true;
    },
    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },
  },
});

export const { selectSong, playPause } = songSlice.actions;
export default songSlice.reducer;
