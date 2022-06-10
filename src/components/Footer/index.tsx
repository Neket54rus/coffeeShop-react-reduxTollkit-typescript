import React from "react"
import { Link } from "react-router-dom"

import footerDividerLogoSvg from "../../assets/img/about-divider-logo-svg.svg"
import logoSvg from "../../assets/img/black-logo.svg"

import styles from "./Footer.module.scss"

export const Footer: React.FC = () => {
	return (
		<div className="container">
			<div className={styles.Footer}>
				<div className={styles.FooterTop}>
					<img src={logoSvg} alt="logo footer" />
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
				<div className={styles.FooterDivider}>
					<div className={styles.FooterDividerLeft}></div>
					<img src={footerDividerLogoSvg} alt="divider logo svg" />
					<div className={styles.FooterDividerRight}></div>
				</div>
			</div>
		</div>
	)
}
