import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

import { RootState } from "../../redux"
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
					{data.length > 0
						? data.map((item) => {
								return (
									<Link
										to={`/our-best/${item.id}`}
										key={item.id}
										className={styles.BestCard}
									>
										<img src={item.img} alt="best card img" />
										<div className={styles.BestCardTitle}>{item.title}</div>
										<div className={styles.BestCardPrice}>{item.price}$</div>
									</Link>
								)
						  })
						: "Loading..."}
				</div>
			</div>
		</div>
	)
}
