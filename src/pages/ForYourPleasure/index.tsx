import React from "react"

import logo from "../../assets/img/for-your-pleasure-about.png"
import forYourPleasureAboutDividerLogoSvg from "../../assets/img/about-divider-logo-svg.svg"

import styles from "./ForYourPleasure.module.scss"
import { OurCard } from "../../components"

export const ForYourPleasure: React.FC = () => {
	return (
		<div className={styles.forYourPleasure}>
			<div className={styles.header}>For your pleasure</div>
			<div className="container">
				<div className={styles.forYourPleasureAbout}>
					<img src={logo} alt="For your pleasure about image" />
					<div className={styles.forYourPleasureAboutText}>
						<div className={styles.forYourPleasureAboutTitle}>About our goods</div>
						<div className={styles.forYourPleasureAboutDivider}>
							<div className={styles.forYourPleasureAboutDividerLeft}></div>
							<img src={forYourPleasureAboutDividerLogoSvg} alt="divider logo svg" />
							<div className={styles.forYourPleasureAboutDividerRight}></div>
						</div>
						<div className={styles.forYourPleasureAboutSubtitle}>
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
				<div className={styles.forYourPleasureHr}></div>
			</div>

			<OurCard />
		</div>
	)
}
