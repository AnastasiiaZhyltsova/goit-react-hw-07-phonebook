import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer } from './contactsSlice'; 
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { contactApi } from './contactsSlice';




export const store = configureStore({
  reducer: {
    // contacts: contactsReducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },

   	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(contactApi.middleware),
  
})

setupListeners(store.dispatch);



