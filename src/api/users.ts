import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = 'http://127.0.0.1:3000/'

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getUsersByName: builder.query({
      query: (query) => `?term=${query}`
    })
  })
})

export const { useGetUsersByNameQuery } = usersApi
