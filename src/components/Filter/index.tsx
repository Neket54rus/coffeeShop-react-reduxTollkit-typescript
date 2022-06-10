import React from "react"

import { Search, FilterTabs } from "../"

import styles from "./Filter.module.scss"

export const Filter: React.FC = () => {
	return (
		<div className="container">
			<div className={styles.filter}>
				<Search />
				<FilterTabs />
			</div>
		</div>
	)
}
