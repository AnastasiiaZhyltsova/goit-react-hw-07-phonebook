import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62fba55fabd610251c0e3692.mockapi.io',
  }),
  tagTypes: ['Contact'],
  endpoints: (builder) => ({
    fetchContacts: builder.query({
      query: () => '/contacts',
    }),
}),
});

export const { useFetchContactsQuery } = contactApi;