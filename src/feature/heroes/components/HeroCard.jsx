import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = {
    hero: {
        cursor: 'pointer'
    }
};

const HeroCard = (props) => (
    <Grid
        container
        direction='column'
        align='center'
        onClick={() => props.onHeroSelect(props)}
        className={props.classes.hero}
    >
          <Grid item>
            <img src={props.icon_url['92x93']} alt={`${props.name} icon`} />
          </Grid>
          <Grid item>
              <Typography>
                  {props.name}
              </Typography>
          </Grid>
    </Grid>
);

export default withStyles(styles)(HeroCard);