import React, { useState, useEffect } from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';

import Firebase from './shared/services/firebase.service';
import FirebaseContext from './shared/components/FirebaseContext';

import Header from './shared/components/Header';

import HeroesService from './feature/heroes/services/heroes.service';
import DraftPage from './feature/heroes/containers/draft-page/DraftPage';

const useStyles = makeStyles({
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

function App() {
    const [firebaseInstance] = useState(new Firebase());
    const [heroesInfo, setHeroesInfo] = useState(null);
    const [draftInfo, setDraftInfo] = useState(null);
    const classes = useStyles();

    async function getHeroes() {
        return await HeroesService.getHeroes();
    }

    useEffect(() => {
        getHeroes()
            .then(heroesInfo => {
                firebaseInstance
                    .read('/heroesInfo/data')
                    .once('value')
                    .then((snapshot) => {
                        setDraftInfo(snapshot.val());
                        setHeroesInfo(heroesInfo);
                    });
            });
    });

    return (
        <FirebaseContext.Provider value={firebaseInstance}>
            <Grid container className={classes.appContainer}>
                <Header />
                <Grid item container>
                    {
                        heroesInfo
                            ? <DraftPage
                                heroesInfo={heroesInfo}
                                draftInfo={draftInfo}
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

export default App;
