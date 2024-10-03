// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const ermcApi = createApi({
  reducerPath: 'ermcApi',
  // baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getEmrcByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
    getEmrcUsersByName: builder.query({
      query: (name) => `users`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
  useGetgetEmrcByNameQuery,
  useGetEmrcUsersByNameQuery
 } = ermcApi