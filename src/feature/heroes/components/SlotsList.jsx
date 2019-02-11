import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import HeroSlot from './HeroSlot';

const styles = {
    heroSlotWrapper: {
        marginBottom: '10px'
    }
};

class SlotsList extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.team.slots.map((slot) =>
                        <div className={this.props.classes.heroSlotWrapper} key={slot.id}>
                            <HeroSlot
                                teamName={this.props.team.name}
                                onSlotClick={this.props.onSlotClick}
                                {...slot}
                            />
                        </div>
                    )
                }
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(SlotsList);