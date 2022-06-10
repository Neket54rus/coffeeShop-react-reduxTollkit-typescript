import React from "react"

import { RootState } from "../../redux"
import { useSelector } from "react-redux"
import { useAppDispatch } from "../../redux"
import { fetchOurCard } from "../../redux/ourCard/asyncActions"
import logoPng from "../../assets/img/our-coffee-card.png"

import styles from "./OurCard.module.scss"

export const OurCard: React.FC = () => {
	const dispatch = useAppDispatch()
	const data = useSelector((state: RootState) => state.our.items)
	const typeSort = useSelector((state: RootState) => state.our.tab)
	const searchStr = useSelector((state: RootState) => state.our.search)

	React.useEffect(() => {
		dispatch(fetchOurCard({ typeSort, searchStr }))
	}, [typeSort, searchStr])

	console.log(data)

	return (
		<div className="container">
			<div className={styles.ourCard}>
				{data.length
					? data.map((item) => {
							return (
								<div key={item.id} className={styles.card}>
									<img src={logoPng} alt="Our Coffee card img" />
									<div className={styles.title}>{item.title}</div>
									<div className={styles.type}>{item.type}</div>
									<div className={styles.price}>{item.price}$</div>
								</div>
							)
					  })
					: "Not found("}
			</div>
		</div>
	)
}
