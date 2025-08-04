import { FC } from "react";
import { CategoryCardContent } from "../../types";
import { Link } from "react-router-dom";
import styles from './styles.module.scss'

export const CategoryCard: FC<CategoryCardContent> = ({name, image, link, type}) => type == 'page' ? <Link to={`/${link}`} className={styles.card}>
    <img src={image} alt="image"/>
    <p>{name}</p>
</Link> : <Link style={{backgroundImage: `url(${image})`}} to={`/${link}`} className={styles.catalog_card}><p>{name}</p></Link>