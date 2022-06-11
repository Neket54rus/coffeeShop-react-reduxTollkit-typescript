import React from "react"
import { Link, useParams, useNavigate } from "react-router-dom"

import styles from "./OurCoffeeItem.module.scss"
import logo from "../../assets/img/our-coffee-item-logo.png"
import ourCoffeeItemDividerLogoSvg from "../../assets/img/about-divider-logo-svg.svg"
import axios from "axios"
import { OurCard } from "../../redux/ourCard/types"

export const OurCoffeeItem: React.FC = () => {
	const [coffee, setCoffe] = React.useState<OurCard[]>()
	const { id } = useParams()
	const navigation = useNavigate()

	React.useEffect(() => {
		async function fetchPizza() {
			try {
				const { data } = await axios.get<{
					our: OurCard[]
				}>("../data.json")
				console.log(data)
				setCoffe(data.our.filter((item: OurCard) => item.id === Number(id)))
			} catch (error) {
				alert("Fail")
			}
		}

		fetchPizza()
	}, [])

	return (
		<div className="container">
			<div className={styles.ourCoffeeItem}>
				<img src={logo} alt="coffee icons" />
				<div className={styles.ourCoffeeItemRight}>
					<div className={styles.ourCoffeeItemTitle}>About it</div>
					<div className={styles.ourCoffeeItemDivider}>
						<div className={styles.ourCoffeeItemDividerLeft}></div>
						<img src={ourCoffeeItemDividerLogoSvg} alt="divider logo svg" />
						<div className={styles.ourCoffeeItemDividerRight}></div>
					</div>
					{coffee
						? coffee.map((item) => (
								<React.Fragment key={item.id}>
									<div className={styles.ourCoffeeItemType}>
										<span>Country:</span> {item.type}
									</div>
									<div className={styles.ourCoffeeItemDescr}>
										<span>Description:</span> Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
										magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
									</div>
									<div className={styles.ourCoffeeItemPrice}>
										Price: <span>{item.price}$</span>
									</div>
								</React.Fragment>
						  ))
						: "Loading..."}
					<div onClick={() => navigation(-1)} className={styles.ourCoffeeItemBack}>
						Back
					</div>
				</div>
			</div>
		</div>
	)
}
