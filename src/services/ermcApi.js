// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logout, setCredentials } from "./authSlice";


const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.freeapi.app/api/v1/',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.accessToken;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  // If token has expired and you get a 401 Unauthorized
  if (result.error && result.error.status === 401) {
    console.log('Access token expired, trying to refresh the token...');

    // Get the refresh token from the state
    const refreshToken = api.getState().auth.refreshToken;

    if (refreshToken) {
      // Attempt to get a new access token using the refresh token
      const refreshResult = await baseQuery(
        {
          url: '/auth/refresh-token',
          method: 'POST',
          body: { token: refreshToken },
        },
        api,
        extraOptions
      );

      if (refreshResult.data) {
        // Dispatch the action to update the store with the new access token
        api.dispatch(setCredentials({
          accessToken: refreshResult.data.accessToken,
          refreshToken: refreshToken, // Keep the same refresh token
        }));

        // Retry the original request with the new access token
        result = await baseQuery(args, api, extraOptions);
      } else {
        // If refreshing the token failed, log out the user
        api.dispatch(logout());
      }
    } else {
      // No refresh token available, log out the user
      api.dispatch(logout());
    }
  }

  return result;
};

// Define a service using a base URL and expected endpoints
export const ermcApi = createApi({
  reducerPath: "ermcApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Product'], // Used for cache invalidation
  endpoints: (builder) => ({

    /**
     * Product API's Query and Mutation
     */
    
    // Get list of Category
    getCategories: builder.query({
      query: ({page, limit}) => ({
        url: `ecommerce/categories?page=${page}&limit=${limit}`,
        method: "GET"
      }),
      providesTags: ['Category'],
    }),

    // Create a new Category
    createCategory: builder.mutation({
      query: (newCategory) => ({
        url: 'categories',
        method: 'POST',
        body: newCategory,
      }),
      invalidatesTags: ['Category'], // Invalidate cache to refetch products
    }),

    // Update a Category by ID
    updateCategory: builder.mutation({
      query: ({ id, ...updatedCategory }) => ({
        url: `categories/${id}`,
        method: 'PUT',
        body: updatedCategory,
      }),
      invalidatesTags: ['Category'], // Invalidate cache
    }),

    // Delete a Category by ID
    deleteCategory: builder.mutation({
      query: (categoryId) => ({
        url: `ecommerce/categories/${categoryId}`,
        method: "DELETE"
      }),
      invalidatesTags: ['Category'], // Invalidate caches
    }),

    // Get Single Category by ID
    getCategory: builder.query({
      query: (categoryId) => ({
        url: `ecommerce/categories/${categoryId}`,
        method: "GET"
      }),
      invalidatesTags: ['Category'], // Invalidate caches
    }),


    /**
     * Product API's Query and Mutation
     */
    
    // Get list of products
    getProducts: builder.query({
      query: ({page, limit}) => ({
        url: `ecommerce/products?page=${page}&limit=${limit}`,
        method: "GET"
      }),
      providesTags: ['Product'],
    }),

    // Create a new product
    createProduct: builder.mutation({
      query: (newProduct) => ({
        url: 'products',
        method: 'POST',
        body: newProduct,
      }),
      invalidatesTags: ['Product'], // Invalidate cache to refetch products
    }),

    // Update a product by ID
    updateProduct: builder.mutation({
      query: ({ id, ...updatedProduct }) => ({
        url: `products/${id}`,
        method: 'PUT',
        body: updatedProduct,
      }),
      invalidatesTags: ['Product'], // Invalidate cache
    }),

    // Delete a product by ID
    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `ecommerce/products/${productId}`,
        method: "DELETE"
      }),
      invalidatesTags: ['Product'], // Invalidate caches
    }),

    // Get Single product by ID
    getProduct: builder.query({
      query: (productId) => ({
        url: `ecommerce/products/${productId}`,
        method: "GET"
      }),
      invalidatesTags: ['Product'], // Invalidate caches
    }),

    /**
     * Auth APi's query and Mutation
     */
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "users/register",
        method: "POST",
        body: userData,
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: "users/login",
        method: "POST",
        body: credentials,
      }),
    }),
    getCurrentUser: builder.query({
      query: () => {
        console.log("Current user API called!");
        return {
          url: "users/current-user",
          method: "GET",
        };
      },
    }),
    getProtectedData: builder.query({
      query: () => "/protected", // This endpoint is protected
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {


  // Category API's
  useGetCategoriesQuery,
  useDeleteCategoryMutation,
  
  // Products API's
  useGetProductsQuery,
  useDeleteProductMutation,

  // Auth API's
  useLoginMutation,
  useGetCurrentUserQuery,
  useGetProtectedDataQuery,
  useRegisterUserMutation,

} = ermcApi;
