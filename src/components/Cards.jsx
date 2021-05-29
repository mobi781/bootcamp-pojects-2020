import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

export default function SimpleCard(props) {
    const classes = useStyles();
    // const classes1 = styles();
    console.log('Incoming data from parent component :>> ');


    // const load = "Loading...";
    // if (props.props.confirmed.value) {
    //     return (
    //         <>


    //             <Card className={classes.root}>
    //                 <CardContent className={styles.infected}>
    //                     <Typography variant="h5" component="h2">
    //                         INFECTED
    //                     </Typography>
    //                     <br />
    //                     <Typography className={classes.pos} variant="h4" color="blue">
    //                         {load}

    //                     </Typography>

    //                 </CardContent>

    //             </Card>
    //             <Card className={classes.root} >
    //                 <CardContent className={styles.recovered}>
    //                     <Typography variant="h5" component="h2">
    //                         RECOVERED
    //                     </Typography>
    //                     <br />
    //                     <Typography className={classes.pos} variant="h4" color="textSuccess">
    //                         {load}
    //                     </Typography>

    //                 </CardContent>

    //             </Card>
    //             <Card className={classes.root}>
    //                 <CardContent className={styles.deaths}>
    //                     <Typography variant="h5" component="h2">
    //                         FATALITIES
    //                     </Typography>
    //                     <br />
    //                     <Typography className={classes.pos} variant="h4" color="textDanger">
    //                         {load}
    //                     </Typography>

    //                 </CardContent>

    //             </Card>
    //         </>

    //     );
    // }

    return (
        <>


            <Card className={classes.root}>
                <CardContent className={styles.infected}>
                    <Typography variant="h5" component="h2">
                        INFECTED
                        </Typography>
                    <br />
                    <Typography className={classes.pos} variant="h4" color="blue">
                        <CountUp start={0} end={props.data.confirmed.value} duration={2.75} separator="," />

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
                        <CountUp start={0} end={props.data.recovered.value} duration={2.75} separator="," />
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
                        <CountUp start={0} end={props.data.deaths.value} duration={2.75} separator="," />
                    </Typography>

                </CardContent>

            </Card>
        </>

    );




}
