import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import styles from './Cards.module.css';
import CountUp from 'react-countup';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        display: 'inline-block',
        margin: '10px',
        justifyContent: "space-around",


    },
    et: {
        display: 'inline-block',
        margin: '0 2px', // first call up&down and second call for left&right
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },

});

export default function SimpleCard() {
    const classes = useStyles();
    // const classes1 = styles();

    // here the logic start start
    let [globalData, setGlobalData] = useState({});
    let [check, setCheck] = useState(false);
    // const { data: { confirmed, deaths, recovered } } = globalData;
    useEffect(() => {
        async function fetchData() {
            setCheck(true);
            // const url = 'https://covid19.mathdro.id/api';
            let response = await fetch('https://covid19.mathdro.id/api');
            let u = await response.json()
            setGlobalData(u);
            setCheck(false);
            // console.log('response :>> ', u);
        }

        fetchData();

        // return () => {
        //     // cleanup
        // }
    }, []);
    console.log('globalData :>> ', globalData);
    const load = "Loading...";
    if (check) {
        return (
            <>


                <Card className={classes.root}>
                    <CardContent className={styles.infected}>
                        <Typography variant="h5" component="h2">
                            INFECTED
                        </Typography>
                        <br />
                        <Typography className={classes.pos} variant="h4" color="blue">
                            {load}

                        </Typography>

                    </CardContent>

                </Card>
                <Card className={classes.root} >
                    <CardContent className={styles.recovered}>
                        <Typography variant="h5" component="h2">
                            RECOVERED
                        </Typography>
                        <br />
                        <Typography className={classes.pos} variant="h4" color="textSuccess">
                            {load}
                        </Typography>

                    </CardContent>

                </Card>
                <Card className={classes.root}>
                    <CardContent className={styles.deaths}>
                        <Typography variant="h5" component="h2">
                            FATALITIES
                        </Typography>
                        <br />
                        <Typography className={classes.pos} variant="h4" color="textDanger">
                            {load}
                        </Typography>

                    </CardContent>

                </Card>
            </>

        );
    }

    return (
        <>


            <Card className={classes.root}>
                <CardContent className={styles.infected}>
                    <Typography variant="h5" component="h2">
                        INFECTED
                        </Typography>
                    <br />
                    <Typography className={classes.pos} variant="h4" color="blue">
                        <CountUp start={0} end={globalData && globalData.confirmed && globalData.confirmed.value} duration={2.75} separator="," />

                    </Typography>

                </CardContent>

            </Card>
            <Card className={classes.root} >
                <CardContent className={styles.recovered}>
                    <Typography variant="h5" component="h2">
                        RECOVERED
                        </Typography>
                    <br />
                    <Typography className={classes.pos} variant="h4" color="textSuccess">
                        <CountUp start={0} end={globalData && globalData.recovered && globalData.recovered.value} duration={2.75} separator="," />
                    </Typography>

                </CardContent>

            </Card>
            <Card className={classes.root}>
                <CardContent className={styles.deaths}>
                    <Typography variant="h5" component="h2">
                        FATALITIES
                        </Typography>
                    <br />
                    <Typography className={classes.pos} variant="h4" color="textDanger">
                        <CountUp start={0} end={globalData && globalData.deaths && globalData.deaths.value} duration={2.75} separator="," />
                    </Typography>

                </CardContent>

            </Card>
        </>

    );




}
