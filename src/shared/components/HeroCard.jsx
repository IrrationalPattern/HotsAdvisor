import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    hero: {
        cursor: 'pointer'
    }
});

function HeroCard(props) {
    const classes = useStyles();

    return (
        <Grid
            container
            direction='column'
            align='center'
            onClick={() => props.onHeroSelect(props)}
            className={classes.hero}
        >
            <Grid item>
                <img src={props.icon_url['92x93']} alt={`${props.name} icon`}/>
            </Grid>
            <Grid item>
                <Typography>
                    {props.name}
                </Typography>
            </Grid>
        </Grid>
    );
}

export default HeroCard;