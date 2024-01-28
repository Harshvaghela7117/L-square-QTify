import React, { useState } from "react";
import styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";


export default function Section ({title,data,type}){
    const [carouselToggle,setCarouselToggle] = useState(false);
    const handleToggle = ()=>{
        setCarouselToggle((prevState)=> !prevState);
    }
    // console.log(data)
    return(
        <div>
            <div className={styles.header}>
                <h3>{title}</h3>
                <h4 className={styles.toggleText} onClick={handleToggle}>{!carouselToggle ? "collapseAll" : "showAll"}</h4>
            </div>
            
            {(data.length === 0 )? (
                    <CircularProgress />
                ) : (
                    <div className={styles.cardWrapper}>
                        {!carouselToggle ? (
                            <div className={styles.wrapper}>
                                {data.map((ele) => (
                                    <Card key={ele.id} data={ele} type={type} />
                                ))}
                            </div>
                        ) : (
                            <div>Carousel</div>
                        )}
                    </div>
            )}      
        </div>
    )
}