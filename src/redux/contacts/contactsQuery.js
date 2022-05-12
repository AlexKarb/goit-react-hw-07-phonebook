import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://627a33654a5ef80e2c15ba24.mockapi.io/hw-7-contacts',
});

export const contactQuery = createApi({
  reducerPath: 'contactsApi',
  baseQuery,
  tagTypes: ['Post'],

  endpoints: builder => ({
    getAllContact: builder.query({
      query: () => `/contacts`,
      providesTags: ['Post'],
    }),

    saveNewContact: builder.mutation({
      query: contact => ({
        url: `/contacts`,
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['Post'],
    }),

    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Post'],
    }),
  }),
});

export const {
  useGetAllContactQuery,
  useSaveNewContactMutation,
  useDeleteContactMutation,
} = contactQuery;
