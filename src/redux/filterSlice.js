import { createSlice } from '@reduxjs/toolkit';


export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterItems: (state, action)  => action.payload,
    
  }
});

export const { filterItems } = filterSlice.actions;

// Selectors
export const getFilter = state => state.filter;