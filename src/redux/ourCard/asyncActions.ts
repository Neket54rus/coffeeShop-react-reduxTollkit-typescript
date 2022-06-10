import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { OurCard } from "./types"

export const fetchOurCard = createAsyncThunk<OurCard[], { typeSort: string; searchStr: string }>(
	"ourCard/type",
	async (params) => {
		const { typeSort, searchStr } = params
		const { data } = await axios.get<{ our: OurCard[] }>("data.json")

		const newList = data.our.filter((item) => {
			return item.title.toLowerCase().indexOf(searchStr.toLowerCase()) > -1
		})

		switch (typeSort) {
			case "Brazil":
				return newList.filter((item) => item.type === "Brazil")
				break
			case "Kenya":
				return newList.filter((item) => item.type === "Kenya")
				break
			case "Columbia":
				return newList.filter((item) => item.type === "Columbia")
				break
		}
		return newList
	}
)
