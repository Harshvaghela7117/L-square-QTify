import React from "react";
import styles from "./Logo.module.css"

import logo from "../../assets/logo.png"

export default function Logo (){
    return (

        <div className={styles.logo}>
            <img src={logo} alt="logo-img" width={67} />
        </div>
    )
}