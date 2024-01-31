import React from "react";
import { useOutletContext } from "react-router";
import Section from "../../components/Section/Section";
import styles from "./HomePage.module.css"
import HeroSection from "../../components/Herosection/hero";
import {fetchFilters} from "../../Api/api"

export default function HomePage(){
    const {data} = useOutletContext();
    const {topAlbums, newAlbums, songs} = data  ;
    // console.log(data);
    // console.log(topAlbums);
    // console.log(newAlbums)
    return(
        <div>
            <HeroSection />
            <div className={styles.wrapper}>
                <Section title="Top Albums" data={topAlbums} type="album" />
                <Section title="New Albums" data={newAlbums} type="album" />
                <Section title="songs" data={songs} type="song" filterSource={fetchFilters} />

            </div>
            

        </div>
    )
}