import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper/Paper';
import Grid from '@material-ui/core/Grid/Grid';
import Typography from '@material-ui/core/Typography/Typography';

import HeroCard from './HeroCard';

const styles = {
    heroList: {
        padding: '10px'
    },
    heroesTitleWrapper: {
        margin: '20px'
    },
    heroCard: {
        width: '100px',
        margin: '10px'
    }
};

function HeroesGroupList(props) {
    const { classes } = props;

    return (
        <Paper elevation={1}>
            <Grid container className={classes.heroList}>
                <Grid item className={classes.heroesTitleWrapper}>
                    <Typography variant="h6" color="inherit">
                        { props.groupName }
                    </Typography>
                </Grid>
                <Grid
                    item
                    container
                    direction='row'
                >
                    {
                        props.heroes.map((hero) =>
                            <Grid
                                item
                                key={hero.name}
                                className={classes.heroCard}
                            >
                                <HeroCard
                                    {...hero}
                                    onHeroSelect={props.onHeroSelect}
                                />
                            </Grid>
                        )
                    }
                </Grid>
            </Grid>
        </Paper>
    );
}

export default withStyles(styles)(HeroesGroupList);