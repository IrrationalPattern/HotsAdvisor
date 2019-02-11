import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import Firebase from './shared/services/firebase.service';
import FirebaseContext from './shared/components/FirebaseContext';

import HeroesService from './feature/heroes/services/heroes.service';
import DraftPage from './feature/heroes/containers/draft-page/DraftPage';

const styles = theme => ({
    appContainer: {
        height: '100%'
    },
    progress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
});

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firebaseInst: new Firebase(),
            heroesInfo: null,
            draftInfo: null
        };
    }

    async componentDidMount() {
        const heroesInfo = await HeroesService.getHeroes();
        
        this.state.firebaseInst
            .read('/heroesInfo/data')
            .once('value')
            .then((snapshot) => {
                this.setState(() => ({
                    draftInfo: snapshot.val(),
                    heroesInfo
                }));
            });
    }

    render() {
        const { classes } = this.props;
        
        return (
            <FirebaseContext.Provider value={this.state.firebaseInst}>
                <Grid container className={classes.appContainer}>
                    <AppBar position="static" color="default">
                        <Toolbar>
                            <Typography variant="h6" color="inherit">
                                Hots Advisor
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Grid item container>
                        {
                            this.state.heroesInfo
                                ? <DraftPage
                                    heroesInfo={this.state.heroesInfo}
                                    draftInfo={this.state.draftInfo}
                                  />
                                : <Grid item className={classes.progress}>
                                    <CircularProgress
                                        color="secondary"
                                        size={100}
                                        thickness={4}
                                    />
                                  </Grid>
                        }
                    </Grid>
                </Grid>
            </FirebaseContext.Provider>
        );
    }
}

export default withStyles(styles)(App);
