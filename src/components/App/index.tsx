import React from "react"
import { Routes, Route } from "react-router-dom"

import { Home, Header, Footer, OurCoffee, OurBest, ForYourPleasure } from "../"

import styles from "./App.module.scss"

export const App: React.FC = () => {
	return (
		<div className={styles.App}>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/our-coffee/*" element={<OurCoffee />} />
				<Route path="/our-best/:id" element={<OurBest />} />
				<Route path="/for-your-pleasure" element={<ForYourPleasure />} />
				<Route path="/*" element={<Home />} />
			</Routes>
			<Footer />
		</div>
	)
}
