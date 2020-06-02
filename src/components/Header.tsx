import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import StorefrontIcon from '@material-ui/icons/Storefront';
import { CSSProperties } from '@material-ui/core/styles/withStyles';


const Header = () => {
    return(
        <AppBar style={text} position='static'>
            <Toolbar>
                <Typography>Vår Header</Typography>
                <StorefrontIcon />
            </Toolbar>
        </AppBar>
    );
};

const text: CSSProperties = {
    backgroundColor: 'gray',
};

export default Header;