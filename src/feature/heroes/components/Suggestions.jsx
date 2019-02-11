import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const styles = {
    suggestions: {
      marginTop: '30px'
    },
    colsSeprator: {
        borderRight: '1px solid gray',
        minHeight: '300px'
    },
    title: {
        marginBottom: '20px'
    }
};

class Suggestions extends Component {

    render() {
        const { classes } = this.props;

        return (
            <Grid container spacing={8} className={classes.suggestions}>
                <Grid item xs={6} className={classes.colsSeprator}>
                    <Typography align='center' className={classes.title}>
                        To synergize
                    </Typography>
                    <GridList cellHeight={50}>
                        {
                            this.props.synergizes.map(synergize => (
                                <GridListTile>
                                    <Typography align='center'>{synergize}</Typography>
                                </GridListTile >
                            ))
                        }
                    </GridList>
                </Grid>
                <Grid item xs={6}>
                    <Typography align='center' className={classes.title}>
                        To counter
                    </Typography>
                    <GridList cellHeight={50}>
                        {
                            this.props.counters.map(counters => (
                                <GridListTile>
                                    <Typography align='center'>{counters}</Typography>
                                </GridListTile >
                            ))
                        }
                    </GridList>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Suggestions);