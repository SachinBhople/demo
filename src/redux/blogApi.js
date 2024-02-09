import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const blogApi = createApi({
    reducerPath: "blogApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: ["blog"],
    endpoints: builder => {
        return {
            getBlogs: builder.query({
                query: () => {
                    return {
                        url: "/blogs",
                        method: "GET"
                    }
                },
                providesTags: ["blog"]
            }),
            addBlog: builder.mutation({
                query: blogData => {
                    return {
                        url: "/blogs",
                        method: "POST",
                        body: blogData
                    }
                },
                invalidatesTags: ["blog"]
            }),
            updateBlog: builder.mutation({
                query: blogData => {
                    return {
                        url: `/blogs/${blogData.id}`,
                        method: "PUT",
                        body: blogData
                    }
                },
                invalidatesTags: ["blog"]
            }),
            deltedBlog: builder.mutation({
                query: id => {
                    return {
                        url: `/blogs/${id}`,
                        method: "DELETE",
                    }
                },
                invalidatesTags: ["blog"]
            }),
        }
    }
})

export const { useGetBlogsQuery, useAddBlogMutation, useDeltedBlogMutation, useUpdateBlogMutation } = blogApi

