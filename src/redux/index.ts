import { configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"

import bestReducer from "./best/slice"
import ourReducer from "./ourCard/slice"

export const store = configureStore({
	reducer: { best: bestReducer, our: ourReducer },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
