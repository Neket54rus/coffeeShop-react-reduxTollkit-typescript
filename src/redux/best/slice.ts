import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { fetchBestCard } from "./asyncActions"
import { BestState } from "./types"

const initialState: BestState = {
	items: { best: [] },
	status: "",
}

export const bestSlice = createSlice({
	name: "best",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchBestCard.pending, (state) => {
			state.status = "loading..."
		})
		builder.addCase(fetchBestCard.fulfilled, (state, actions) => {
			state.items = actions.payload
			state.status = "Ok!!"
		})
		builder.addCase(fetchBestCard.rejected, (state) => {
			state.status = "fail("
		})
	},
})

export const {} = bestSlice.actions

export default bestSlice.reducer
