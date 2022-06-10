import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { BestCard } from "./types"

export const fetchBestCard = createAsyncThunk<BestCard[]>("bestCard", async () => {
	const { data } = await axios.get<{ best: BestCard[] }>("data.json")

	return data.best
})
