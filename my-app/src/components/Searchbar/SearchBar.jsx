import React from "react";
import styles from "./SearchBar.module.css"
import Searchicon from "../../assets/Search icon.svg"

export default function Searchbar(){

    return (
        <div >
            <form className={styles.wrapper}>
                <input className={styles.search} placeholder="Search a album of your choice" required/>
                <button className={styles.searchButton} type="submit">
                    <img src={Searchicon} alt="searchImg"  />
                </button>
            </form>
        </div>
    )
}