import {createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react"
export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL}),
    reducerPath: "adminApi",
    tagTypes:[
        "User", 
        "Products", 
        "Customers", 
        "Transactions", 
        "Geography", 
        "Sales",
        "Dashboard"
    ],
    endpoints: (build:any)=>({
        getUser: build.query({
            query: (id:any)=> `/general/user/${id}`,
            providesTags:["User"]
        })
        ,
        getProducts: build.query({
            query: ()=> `/client/products/`,
            providesTags:["Products"]
        }),
        getCustomers: build.query({
            query: ()=> `/client/customers/`,
            providesTags:["Customers"]
        }),
        getTransactions: build.query({
            query: ({ page, pageSize, sort, search})=> ({
                url: "client/transactions",
                method:"GET",
                params: { page, pageSize, sort, search},
            }),
            providesTags:["Transactions"]
        }),
        getGeography: build.query({
            query: ()=> `/client/geography/`,
            providesTags:["Geography"]
        }),
        getSales: build.query({
            query: ()=> `/sales/sales`,
            providesTags:["Sales"]
        }),
        getDashboard: build.query({
            query: () => "general/dashboard",
            providesTags: ["Dashboard"],
          }),
    })
})

export const {
    useGetUserQuery,
    useGetProductsQuery,
    useGetCustomersQuery,
    useGetTransactionsQuery,
    useGetGeographyQuery,
    useGetSalesQuery,
    useGetDashboardQuery
} = api