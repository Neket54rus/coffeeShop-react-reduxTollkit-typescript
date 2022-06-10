import React from "react"
import { Link } from "react-router-dom"

import logoSvg from "../../assets/img/white-logo.svg"

import styles from "./Header.module.scss"

export const Header: React.FC = () => {
	return (
		<div className="container">
			<div className={styles.Header}>
				<img src={logoSvg} alt="logo header" />
				<ul>
					<li>
						<Link to="/">Coffee house</Link>
					</li>
					<li>
						<Link to="/our-coffee">Our coffee</Link>
					</li>
					<li>
						<Link to="/for-your-pleasure">For your pleasure</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}
