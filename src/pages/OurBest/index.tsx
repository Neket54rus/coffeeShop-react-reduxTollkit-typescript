import React from "react"
import axios from "axios"
import { useParams, Link } from "react-router-dom"

import styles from "./OurBest.module.scss"

interface Test {
	id: number
	img: string
	title: string
	price: number
}

export const OurBest: React.FC = () => {
	const [bestCoffee, setBestCoffee] = React.useState<Test[]>()

	const { id } = useParams()

	React.useEffect(() => {
		async function fetchPizza() {
			try {
				const { data } = await axios.get("../data.json")
				setBestCoffee(data.best.filter((item: Test) => item.id === Number(id)))
			} catch (error) {
				alert("Fail")
			}
		}
		fetchPizza()
	}, [])

	return (
		<div className={styles.ourBest}>
			<div className={styles.ourBestHeader}>Our Best</div>
			<div className="container">
				{bestCoffee
					? bestCoffee.map((item) => (
							<div key={item.id} className={styles.coffeeItem}>
								<img src={`../${item.img}`} alt="img" />
								<div>
									<div>{item.title}</div>
									<div>
										Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione,
										dolorum? Delectus id quis nostrum, laudantium, vero blanditiis, itaque
										perferendis neque necessitatibus similique sed ipsam deserunt unde at
										omnis illum nihil!
									</div>
									<div>{item.price}$</div>
								</div>
							</div>
					  ))
					: "Loading..."}{" "}
				{bestCoffee && bestCoffee.length < 1 ? "Not found" : ""}
				<Link to="/">Back</Link>
			</div>
		</div>
	)
}
