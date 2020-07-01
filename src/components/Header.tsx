import React from 'react';
import { AppBar, Toolbar, Typography,Button } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { Link } from "react-router-dom";
import { CartConsumer, ContextState } from '../contexts/cartContxt'


const Header = () => {
    return (
        <AppBar style={headerStyle} position='static'>
            <Toolbar style={headerItems} >
                <Typography>Shop</Typography>
                {<Link to="/cart">
              <CartConsumer>
                {(contextData: ContextState) => {
                  return (
                    <Button >
                        <ShoppingCartIcon />
                      <span>({contextData.countProductsInCart()})</span>
                    </Button>
                  )
                }}
              </CartConsumer>
            </Link>}
            </Toolbar>
        </AppBar >
    );
};

const headerStyle: CSSProperties = {
    display: 'flex',
    backgroundColor: 'gray',
};

const headerItems: CSSProperties = {
    justifyContent: 'space-between',
    cursor: 'pointer'
}

export default Header;