export interface BestState {
	items: BestCard
	status: string
}

export type BestCard = {
	best: { id: number; title: string; price: number; img: string }[] | []
}
