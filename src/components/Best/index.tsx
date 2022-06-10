import React from "react"

import { RootState } from "../../redux"
import { useSelector } from "react-redux"
import { useAppDispatch } from "../../redux"
import { fetchBestCard } from "../../redux/best/asyncActions"

import styles from "./Best.module.scss"

export const Best: React.FC = () => {
	const dispatch = useAppDispatch()
	const data = useSelector((state: RootState) => state.best.items)

	React.useEffect(() => {
		dispatch(fetchBestCard())
	}, [])

	return (
		<div className={styles.Best}>
			<div className="container">
				<div className={styles.BestTitle}>Our best</div>
				<div className={styles.BestItems}>
					{data.best.length > 0
						? data.best.map((item) => {
								return (
									<div key={item.id} className={styles.BestCard}>
										<img src={item.img} alt="best card img" />
										<div className={styles.BestCardTitle}>{item.title}</div>
										<div className={styles.BestCardPrice}>{item.price}$</div>
									</div>
								)
						  })
						: "Loading..."}
				</div>
			</div>
		</div>
	)
}
