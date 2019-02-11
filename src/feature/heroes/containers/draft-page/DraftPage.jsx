import React, { Component } from 'react';
import * as R from 'ramda';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';

import SlotsList from '../../components/SlotsList';
import HeroSelectModal from '../../components/HeroSelectModal';
import HeroesService from '../../services/heroes.service';
import Suggestions from '../../components/Suggestions';

const styles = {
    draftPage: {
        padding: '25px'
    }
};

function getInitialSlots() {
    return new Array(5)
        .fill({})
        .map((item, index) => ({id: index}));
}

class DraftPage extends Component {
    constructor(props) {
        super(props);
        
        console.log(this.props);
        
        this.state = {
            open: false,
            selectedSlot: {},
            firstTeam: {
                name: 'firstTeam',
                slots: getInitialSlots(),
                synergizes : [],
                counters: []
            },
            secondTeam: {
                name: 'secondTeam',
                slots: getInitialSlots(),
                synergizes : [],
                counters: []
            },
            heroesByGroups: HeroesService.groupByClasses(this.props.heroesInfo)
        }
    }

    handleModalClose = () => {
        this.toggleModal(false);
    };

    handleSlotClick = (team, slotId) => {
        this.setState(() => ({
            selectedSlot: {
                team,
                slotId
            }
        }));
        this.toggleModal(true);
    };

    handleHeroSelect = (hero) => {
        this.fillSlot(hero);
        this.toggleModal(false);
    };

    toggleModal = (isOpen) => {
        this.setState(() => ({ open: isOpen }));
    };

    fillSlot = (hero) => {
        // TODO: refactor
        const selectedSlot = this.state.selectedSlot;
        const team = this.state[selectedSlot.team];
        const updatedTeam = {};

        updatedTeam[selectedSlot.team] = {
            name: selectedSlot.team,
            slots: R.update(
                selectedSlot.slotId,
                R.mergeRight(team.slots[selectedSlot.slotId], { hero }),
                team.slots
            )
        };

        const pickedHeroes = updatedTeam[selectedSlot.team].slots
            .map(R.prop('hero'))
            .filter(hero => !!hero)
            .map(R.prop('short_name'));

        const draftInfo = R.flatten(pickedHeroes.map(name => {
            return this.props.draftInfo
                .filter(hero => hero.heroName === name);
        }));
        const synergizes = R.uniq(R.flatten(draftInfo.map(R.prop('synergizes'))));
        const counters = R.uniq(R.flatten(draftInfo.map(R.prop('counters'))));

        updatedTeam[selectedSlot.team].synergizes = synergizes;
        updatedTeam[selectedSlot.team].counters = counters;
        
        console.log(updatedTeam);
        
        this.setState(() => updatedTeam);
    };

    render() {
        const { classes } = this.props;

        return (
            <Grid
                container
                className={classes.draftPage}
                justify='space-between'
                alignItems='stretch'
            >
                <Grid item xs>
                    <SlotsList
                        team={this.state.firstTeam}
                        onSlotClick={this.handleSlotClick}
                    />
                    <Suggestions
                        synergizes={this.state.firstTeam.synergizes}
                        counters={this.state.secondTeam.counters}
                    />
                </Grid>
                <Grid
                    item container xs={1}
                    justify='center'
                    alignItems='center'
                >
                    <Grid item>
                        <ClearRoundedIcon fontSize='large' />
                    </Grid>
                </Grid>
                <Grid item xs>
                    <SlotsList
                        team={this.state.secondTeam}
                        onSlotClick={this.handleSlotClick}
                    />
                    <Suggestions
                        synergizes={this.state.secondTeam.synergizes}
                        counters={this.state.firstTeam.counters}
                    />
                </Grid>
                <HeroSelectModal
                    heroes={this.state.heroesByGroups}
                    open={this.state.open}
                    onCloseButtonClick={this.handleModalClose}
                    onHeroSelect={this.handleHeroSelect}
                />
            </Grid>
        );
    }
}

export default withStyles(styles)(DraftPage);