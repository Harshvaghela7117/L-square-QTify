import React from "react";
import styles from "./CardCarousalTop.module.css"
import Card from "../Card/Card";
import Grid from '@mui/material/Grid';
export default function CardCarousalTop(){
    return (
        <div className={styles.cardCarousalTop}>
            <div className={styles.text}>
                <h5>Top Albums</h5>
                <h5 className={styles.colortext}>Show all</h5>
            </div>

            <Grid container spacing={21.5} >
                <Grid item lg={1} >
                    <Card />
                </Grid>
                <Grid item lg={1}>
                    <Card />
                </Grid>
                <Grid item lg={1}>
                    <Card />
                </Grid>
                <Grid item lg={1}>
                    <Card />
                </Grid>
                <Grid item lg={1}>
                    <Card />
                </Grid>
                <Grid item lg={1}>
                    <Card />
                </Grid>
                <Grid item lg={1}>
                    <Card />
                </Grid>
                <Grid item lg={1}>
                    <Card />
                </Grid>
            </Grid>
        </div>
    )
}