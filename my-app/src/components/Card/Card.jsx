import React  from "react";
import styles from "./Card.module.css"
import { Chip,Tooltip } from "@mui/material";
import { Link } from "react-router-dom";


export default function Card({data,type}){

    const getCard = (type)=>{
        switch (type) {
            case "album" : {
                const {image, songs,slug ,follows, title} = data;
                return(
                    <>  
                        <Tooltip title={`${songs.length} songs`} placement="top" arrow>                     
                            <Link to={`{/album/${slug}}`}>     
                                <div className={styles.wrapper}>
                                    <div className={styles.main}>
                                        <img src={image}  className={styles.cardimg} alt="cardimg" loading="lazy" />
                                        <div className={styles.banner}>
                                        <Chip className={styles.cardchip}  label={`${follows} Follows`} size="small" />           
                                            
                                        </div>   
                                    </div>           
                                        <p className={styles.abc}>{title}</p>
                                </div>
                            </Link>
                        </Tooltip>
                    </>
                )
            }
            case "song" : {
                const {image, likes, title} = data;
                return(
                <>        
                    <div className={styles.wrapper}>
                        <div className={styles.main}>
                            <img src={image}  className={styles.cardimg} alt="cardimg" loading="lazy" />
                            <div className={styles.banner}> 
                            <Chip className={styles.cardchip} label={`${likes} Likes`} size="small" />                

                            </div>
                        </div>           
                            <p className={styles.abc}>{title}</p>
                    </div>
                </>
                    )
            }                 
            default:
                return <></>
        }
    }
    return  getCard(type)
}