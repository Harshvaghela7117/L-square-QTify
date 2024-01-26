import React from "react";
import styles from "./hero.module.css"
import headPhones from "../../assets/vibrating-headphone 1.png"

export default function HeroSection(){
    return (
        <div className={styles.hero}>
            <div className={styles.herosub}>
                <div className={styles.herotext} >
                    <p> 100 Thousands Songs, ad-free</p> 
                    <p>Over thousands podcast episodes </p> 
                </div>
                    <img src={headPhones} height={212} width={212} alt="headphone" />
            </div>
            
        </div>
    )
}