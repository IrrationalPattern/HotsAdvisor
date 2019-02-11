import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = {
    hero: {},
    heroImage: {
        height: '80px'
    }
};

const Hero = (props) => (
    <Grid
        container
        direction='row'
        align='center'
        justify='space-around'
        className={props.classes.hero}
        spacing={0}
    >
          <Grid
              item
              container
              alignItems='center'
              spacing={0}
              xs={2}
          >
              <Grid item className={props.classes.heroImage}>
                <img
                    className={props.classes.heroImage}
                    src={props.icon_url['92x93']}
                    alt={`${props.name} icon`}
                />
              </Grid>
          </Grid>
          <Grid
              item
              container
              direction='column'
              alignItems='flex-start'
              xs
          >
              <Grid item>
                  <Typography align='left' variant="h5" gutterBottom>
                      {props.name}
                  </Typography>
              </Grid>
              <Grid item>
                  <Typography align='left'>
                      Role: {props.role}
                  </Typography>
              </Grid>
              <Grid item>
                  <Typography align='left'>
                      Type: {props.type}
                  </Typography>
              </Grid>
          </Grid>
    </Grid>
);

export default withStyles(styles)(Hero);