import React from "react"
import { useSelector } from "react-redux"

import { useAppDispatch, RootState } from "../../redux"
import { changeSearch } from "../../redux/ourCard/slice"

import styles from "./Search.module.scss"

export const Search: React.FC = () => {
	const dispatch = useAppDispatch()
	const search = useSelector((state: RootState) => state.our.search)

	return (
		<div className={styles.search}>
			<div className={styles.title}>Lookiing for</div>
			<input
				onChange={(e) => dispatch(changeSearch(e.target.value))}
				value={search}
				type="text"
				placeholder="start typing here..."
			/>
		</div>
	)
}
