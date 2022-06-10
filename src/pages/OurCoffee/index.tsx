import React from "react"

import aboutLogo from "../../assets/img/our-coffee-about.png"
import OurCoffeeAboutDividerLogoSvg from "../../assets/img/about-divider-logo-svg.svg"

import styles from "./OurCoffee.module.scss"

export const OurCoffee: React.FC = () => {
	return (
		<div className={styles.OurCoffee}>
			<div className={styles.OurCoffeeHeader}>Our Coffee</div>

			<div className="container">
				<div className={styles.OurCoffeeAbout}>
					<img src={aboutLogo} alt="our coffee about image" />
					<div className={styles.OurCoffeeAboutText}>
						<div className={styles.OurCoffeeAboutTitle}>About our beans</div>
						<div className={styles.OurCoffeeAboutDivider}>
							<div className={styles.OurCoffeeAboutDividerLeft}></div>
							<img src={OurCoffeeAboutDividerLogoSvg} alt="divider logo svg" />
							<div className={styles.OurCoffeeAboutDividerRight}></div>
						</div>
						<div className={styles.OurCoffeeAboutSubtitle}>
							Extremity sweetness difficult behaviour he of. On disposal of as landlord
							horrible.
							<br />
							<br />
							Afraid at highly months do things on at. Situation recommend objection do
							intention so questions.
							<br />
							<br />
							As greatly removed calling pleased improve an. Last ask him cold feel met spot
							shy want. Children me laughing we prospect answered followed. At it went is
							song that held help face.
						</div>
					</div>
				</div>
			</div>

			<div className={styles.OurCoffeeHr}></div>
		</div>
	)
}
