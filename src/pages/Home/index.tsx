import React from "react"

import { Best, Greeting } from "../../components"
import aboutDividerLogoSvg from "../../assets/img/about-divider-logo-svg.svg"

import styles from "./Home.module.scss"

export const Home: React.FC = () => {
	return (
		<div className={styles.home}>
			<Greeting />
			<div className="container">
				<div className={styles.about}>
					<div className={styles.aboutTitle}>About Us</div>
					<div className={styles.aboutDivider}>
						<div className={styles.aboutDividerLeft}></div>
						<img src={aboutDividerLogoSvg} alt="divider logo svg" />
						<div className={styles.aboutDividerRight}></div>
					</div>
					<div className={styles.aboutSubtitle}>
						Extremity sweetness difficult behaviour he of. On disposal of as landlord
						horrible. Afraid at highly months do things on at. Situation recommend objection
						do intention so questions. As greatly removed calling pleased improve an. Last ask
						him cold feel met spot shy want. Children me laughing we prospect answered
						followed. At it went is song that held help face.
						<br />
						<br /> Now residence dashwoods she excellent you. Shade being under his bed her,
						Much read on as draw. Blessing for ignorant exercise any yourself unpacked.
						Pleasant horrible but confined day end marriage. Eagerness furniture set preserved
						far recommend. Did even but nor are most gave hope. Secure active living depend
						son repair day ladies now.
					</div>
				</div>
			</div>
			<Best />
		</div>
	)
}
