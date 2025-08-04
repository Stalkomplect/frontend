import { FC } from "react";
import { AboutUsCard, AboutUsCards } from "@/entities/about-us";
import styles from './styles.module.scss'

import drawing from '../../assets/drawing.png'

export const AboutUsPlace: FC = () => {
    return (
        <>
            <img className={styles.background} src={drawing} alt="drawing" />
            <section style={{marginTop: '100px'}} className={`container-xl ${styles.place}`}>
                <h1>О нас</h1>
                <section className={styles.place__cards}>
                    {AboutUsCards.map(card => <AboutUsCard
                        id={card.id}
                        key={card.id} 
                        label={card.label} 
                        description={card.description}/>)}
                </section>
            </section>
        </>
    )
}