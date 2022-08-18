import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer } from './contactsSlice'; 
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { contactsApi } from './contactsSlice';




export const store = configureStore({
  reducer: {
    // contacts: contactsReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },

   	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(contactsApi.middleware),
  
})

setupListeners(store.dispatch);



