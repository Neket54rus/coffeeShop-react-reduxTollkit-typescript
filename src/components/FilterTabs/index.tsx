import React from "react"
import { useSelector } from "react-redux"

import { useAppDispatch, RootState } from "../../redux"
import { changeTab } from "../../redux/ourCard/slice"
import styles from "./FilterTabs.module.scss"

export const FilterTabs: React.FC = () => {
	const dispatch = useAppDispatch()
	const active = useSelector((state: RootState) => state.our.tab)
	const btns = [{ name: "All" }, { name: "Brazil" }, { name: "Kenya" }, { name: "Columbia" }]

	const onClickBtn = (name: string) => {
		dispatch(changeTab(name))
	}

	return (
		<div className={styles.filterTabs}>
			<div className={styles.title}>Or filter</div>
			<div className={styles.btns}>
				{btns.map((btn) => {
					return (
						<button
							key={btn.name}
							onClick={() => onClickBtn(btn.name)}
							className={`${styles.btn} ${active === btn.name ? styles.btnActive : ""}`}
						>
							{btn.name}
						</button>
					)
				})}
			</div>
		</div>
	)
}
