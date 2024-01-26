import React from "react";
import styles from "./Navbar.module.css"
import Logo from "../Logo/Logo"
import Searchbar from "../Searchbar/SearchBar";
import FeedBack from "../feedBack/feedBack";

export default function Nav(){
    return (
        <>
            <div className={styles.navbar}>
                <Logo />
                <Searchbar />
                <FeedBack />
            </div>
        </>
    )
}