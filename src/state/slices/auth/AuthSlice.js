// import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/',
    }),
    tagTypes: [],
    endpoints: (builder) => ({
        getPokemonByName: builder.query({
            query: (id) => (id ? `users/${id}` : `users`),
        }),
    }),
});

export const { useGetPokemonByNameQuery } = authApi;
