import React from "react";
import styles from "./Navbar.module.css"
import Logo from "../Logo/Logo"
import Searchbar from "../Searchbar/SearchBar";
import FeedBack from "../feedBack/feedBack";
import { Link } from "react-router-dom";

export default function Navbar(){
    return (
            <div className={styles.navbar}>
                <Link to="/">
                     <Logo />
                </Link>
                <Searchbar />
                <FeedBack />
            </div>
        
    )
}