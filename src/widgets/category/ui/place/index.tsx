import { FC } from "react";
import { CategoryList } from "../../../../entities/category/config/_list";
import { CategoryCard } from "@/entities/category";
import styles from './styles.module.scss'

type PlaceType = {
    type: 'catalog' | 'page'
}

export const CategoryPlace: FC<PlaceType> = ({type}) => {
    return (
        <section className={styles.place}>
            {CategoryList.map(category => <CategoryCard
                type={type}
                key={category.id} 
                id={category.id} 
                link={category.link}
                image={category.image} 
                name={category.name}/>)}
        </section>
    )
}