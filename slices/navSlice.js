import { createSlice } from "@reduxjs/toolkit";

export const navSlice = createSlice({
  name: "nav",
  initialState: {
    origin: null,
    destination: null,
    travelTimeInformation: null,
  },
  reducers: {
    setOrigin: (state, action) => void(state.origin = action.payload),
    setDestination: (state, action) => void(state.destination = action.payload),
    setTravelTimeInformation: (state, action) =>
    void(state.travelTimeInformation = action.payload),
  },
});

// Action creators are generated for each case reducer function
export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions;

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) =>state.nav.travelTimeInformation;

export default navSlice.reducer;
