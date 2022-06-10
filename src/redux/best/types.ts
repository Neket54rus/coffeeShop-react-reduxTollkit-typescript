export interface BestState {
	items: BestCard[] | []
	status: string
}

export type BestCard = {
	id: number
	title: string
	price: number
	img: string
}
