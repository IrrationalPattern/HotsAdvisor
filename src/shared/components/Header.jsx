import React from 'react';

import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import Typography from '@material-ui/core/Typography/Typography';
import AppBar from '@material-ui/core/AppBar/AppBar';

function Header() {


    return (
        <AppBar position="static" color="default">
            <Toolbar>
                <Typography variant="h6" color="inherit">
                    Hots Advisor
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;