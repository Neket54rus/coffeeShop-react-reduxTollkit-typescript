import { createSlice } from "@reduxjs/toolkit"

import { OurState } from "./types"
import { fetchOurCard } from "./asyncActions"

const initialState: OurState = {
	items: [],
	status: "",
	tab: "All",
	search: "",
}

export const ourSlice = createSlice({
	name: "our",
	initialState,
	reducers: {
		changeTab: (state, actions) => {
			state.tab = actions.payload
		},
		changeSearch: (state, actions) => {
			state.search = actions.payload
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchOurCard.pending, (state) => {
			state.status = "loading..."
		})
		builder.addCase(fetchOurCard.fulfilled, (state, actions) => {
			state.items = actions.payload
			state.status = "Ok!!"
		})
		builder.addCase(fetchOurCard.rejected, (state) => {
			state.status = "fail("
		})
	},
})

export const { changeTab, changeSearch } = ourSlice.actions

export default ourSlice.reducer
