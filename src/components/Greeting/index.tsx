import React from "react"

import dividerLogoSvg from "../../assets/img/divider-logo.svg"

import styles from "./Greeting.module.scss"

export const Greeting: React.FC = () => {
	return (
		<div className={styles.Greeting}>
			<div className={styles.title}>Everything You Love About Coffee</div>
			<div className={styles.divider}>
				<div className={styles.dividerLeft}></div>
				<img src={dividerLogoSvg} alt="divider logo svg" />
				<div className={styles.dividerRight}></div>
			</div>
			<div className={styles.subtitle}>
				We makes every day full of energy and taste
				<br />
				Want to try our beans?
			</div>
			<button className={styles.btn}>More</button>
		</div>
	)
}
