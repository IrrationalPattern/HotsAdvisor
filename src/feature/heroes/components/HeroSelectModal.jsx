import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import HeroesGroupList from './HeroesGroupList';

const styles = {
    content: {
        padding: '25px'
    }
};

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class HeroSelectModal extends Component {

    render() {
        const { classes } = this.props;

        return (
            <Dialog
                fullScreen
                open={this.props.open}
                onClose={this.props.onCloseButtonClick}
                TransitionComponent={Transition}
            >
                <Toolbar>
                    <Grid container alignItems='center' justify='space-between'>
                        <Grid item>
                            <Typography variant="h5" color="inherit">
                                Select a Hero
                            </Typography>
                        </Grid>
                        <Grid item>
                            <IconButton color="inherit" onClick={this.props.onCloseButtonClick} aria-label="Close">
                                <CloseIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
                <Grid
                    container
                    direction='column'
                    justify='space-between'
                    spacing={32}
                    className={classes.content}
                >
                    {
                        Object.keys(this.props.heroes).map((groupName) =>
                            <Grid item key={groupName}>
                                <HeroesGroupList
                                    groupName={groupName}
                                    heroes={this.props.heroes[groupName]}
                                    onHeroSelect={this.props.onHeroSelect}
                                />
                            </Grid>
                        )
                    }
                </Grid>
            </Dialog>
        );
    }
}

export default withStyles(styles)(HeroSelectModal);