import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Hero from './Hero';

const styles = {
    heroSlot: {
        width: '100%',
        height: '80px'
    },
    slotContent: {
        padding: '0'
    },
    slotContentSelected: {
        padding: '27.5px'
    },
};

const PickHero = () =>
    <Typography
        align='center'
        color='textSecondary'
        gutterBottom
    >
        Pick Hero
    </Typography>
;

class HeroSlot extends Component {
    
    handleClick = () => {
        this.props.onSlotClick(this.props.teamName, this.props.id);
    };
    
    render() {
        const { classes, hero } = this.props;
        
        return (
            <Card className={classes.heroSlot} onClick={this.handleClick}>
                <CardActionArea>
                    <CardContent
                        className={ hero
                            ? classes.slotContent
                            : classes.slotContentSelected
                        }
                    >
                        {
                            hero
                                ? <Hero {...hero}/>
                                : <PickHero />
                        }
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }
}

export default withStyles(styles)(HeroSlot);