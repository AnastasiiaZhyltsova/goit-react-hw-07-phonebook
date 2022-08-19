import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer } from './contactsSlice'; 
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { contactsApi } from './contactsSlice';
import { filterSlice } from './filterSlice';


export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },

   	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(contactsApi.middleware),
  
})

setupListeners(store.dispatch);



