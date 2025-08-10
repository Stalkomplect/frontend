import { FC } from "react";
import { AboutUsCardContent } from "../../types/_card";
import styles from './styles.module.scss'

export const AboutUsCard: FC<AboutUsCardContent> = ({id, label, description}) => (
  <div className={styles.card}>
    <div className={styles.card__number}>{id}</div>
    <div className={styles.card__content}>
      <h2>{label}</h2>
      <p>{description}</p>
    </div>
  </div>
)