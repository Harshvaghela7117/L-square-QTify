import React from "react";
import card from "../../assets/test.jpeg"
import styles from "./Card.module.css"
// import Chip from '@mui/material-next/Chip';

export default function Card(){
    return(
        <>        
            <div className={styles.wrapper}>
            <div className={styles.main}>
                <div >
                    <img src={card}  className={styles.cardimg} alt="cardimg" />
                </div>
                <div className={styles.pill}>
                    <p className={styles.text}>100 Follows</p> 
                </div>
            </div>
            <div className={styles.abc}>
                    <p>New Bollywood</p>
            </div>
            </div>
        </>
    )
}