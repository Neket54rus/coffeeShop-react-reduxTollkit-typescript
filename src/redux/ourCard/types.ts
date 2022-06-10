export interface OurState {
	items: OurCard[] | []
	status: string
	tab: string
	search: string
}

export type OurCard = {
	id: number
	title: string
	price: number
	type: string
}
