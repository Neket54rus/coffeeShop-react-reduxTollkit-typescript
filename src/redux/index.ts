import { configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"

import bestReducer from "./best/slice"

export const store = configureStore({
	reducer: { best: bestReducer },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
