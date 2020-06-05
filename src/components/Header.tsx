import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

const Header = () => {
    return(
        <AppBar style={headerStyle} position='static'>
            <Toolbar style={headerItems} >
                <Typography>Header</Typography>
                <ShoppingCartIcon />
            </Toolbar>
        </AppBar>
    );
};

const headerStyle: CSSProperties = {
    display: 'flex',
    backgroundColor: 'gray',
};

const headerItems: CSSProperties ={
    justifyContent: 'space-between',
    cursor: 'pointer'
}

export default Header;