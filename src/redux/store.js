import { configureStore } from "@reduxjs/toolkit";
import { blogApi } from "./blogApi";


const reduxStore = configureStore({
    reducer: {
        [blogApi.reducerPath]: blogApi.reducer,
    },
    middleware: defaultMiddleware => [...defaultMiddleware(), blogApi.middleware]
})

export default reduxStore