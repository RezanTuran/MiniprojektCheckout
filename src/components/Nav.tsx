import React from 'react';
import { makeStyles } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { Drawer, List, ListItem, ListItemIcon,ListItemText, Container, Typography } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from '@material-ui/icons/Info';
import StoreIcon from '@material-ui/icons/Store';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import CheckIcon from '@material-ui/icons/Check';
import Contact from './pages/Contact';
import Product from '../components/Product';
import About from './pages/About';
import Home from './pages/Home';
import Checkout from './pages/Checkout';

const Nav = () => {
    const classes = useStyles();
    return(
        <Router>
          <div style={{display: 'flex', height:'auto'}} >
              <Drawer
                variant="persistent"
                anchor="left"
                open={true}
                classes={{ paper: classes.drawerPaper }}
              >
                <List>
                  <Link to="/" className={classes.link}>
                    <ListItem button>
                      <ListItemIcon>
                        <HomeIcon />
                      </ListItemIcon>
                      <ListItemText primary={"Hem"} />
                    </ListItem>
                  </Link>
  
                  <Link to="/product" className={classes.link}>
                    <ListItem button>
                      <ListItemIcon>
                        <StoreIcon />
                      </ListItemIcon>
                      <ListItemText primary={"Produkter"} />
                    </ListItem>
                  </Link>
  
                  <Link to="/about" className={classes.link}>
                    <ListItem button>
                      <ListItemIcon>
                        <InfoIcon />
                      </ListItemIcon>
                      <ListItemText primary={"Om Oss"} />
                    </ListItem>
                  </Link>
  
                  <Link to="/contact" className={classes.link}>
                    <ListItem button>
                      <ListItemIcon>
                        <ContactSupportIcon />
                      </ListItemIcon>
                      <ListItemText primary={"Kontakt"} />
                    </ListItem>
                  </Link>

                  <Link to="/checkout" className={classes.link}>
                    <ListItem button>
                      <ListItemIcon>
                        <CheckIcon />
                      </ListItemIcon>
                      <ListItemText primary={"Checkout"} />
                    </ListItem>
                  </Link>

                </List>
              </Drawer>
  
              <Switch>
                <Route exact path ="/" >
                  <Container>
                    <Typography variant="h3" gutterBottom>
                        <Home />
                    </Typography>
                  </Container>
                </Route>
  
                <Route exact path ="/product" >
                  <Container>
                    <Typography variant="h3" gutterBottom style={{textAlign: 'center'}}>
                      Produkter
                    </Typography>
                       <Product />
                  </Container>
                </Route>
  
                <Route exact path ="/about" >
                  <Container>
                    <Typography variant="h3" gutterBottom>
                        <About />
                    </Typography>
                  </Container>
                </Route>
  
                <Route exact path ="/contact" >
                  <Container>
                    <Typography variant="h3" gutterBottom>
                        <Contact />
                    </Typography>
                  </Container>
                </Route>

                <Route exact path ="/checkout" >
                  <Container>
                    <Typography variant="h3" gutterBottom>
                        <Checkout />
                    </Typography>
                  </Container>
                </Route>

              </Switch>
  
          </div>
      </Router>
    );
};

const useStyles = makeStyles((theme) =>({
    drawerPaper:{ 
       width: 'inherit',
       position: 'initial'
  },
    link: {
      textDecoration: 'none', 
      color: theme.palette.text.primary
  }
  }))


export default Nav;