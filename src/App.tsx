import React from 'react';
import Header from './components/Header';
import { makeStyles } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { Drawer, List, ListItem, ListItemIcon,ListItemText, Container, Typography } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from '@material-ui/icons/Info';
import StoreIcon from '@material-ui/icons/Store';
import Content from './components/Content';

function App() {
  const classes = useStyles();
  return (
    <Router>
      <Header />
        <div style={{display: 'flex'}} >
            <Drawer
              style={{ width: '220px' }}
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
              </List>
            </Drawer>

            <Switch>
              <Route exact path ="/" >
                <Container>
                  <Typography variant="h3" gutterBottom>
                    Hem
                  </Typography>
                </Container>
              </Route>

              <Route exact path ="/product" >
                <Container>
                  <Typography variant="h3" gutterBottom>
                    Produkter
                  </Typography>
                      <Content /> 
                </Container>
              </Route>

              <Route exact path ="/about" >
                <Container>
                  <Typography variant="h3" gutterBottom>
                    Om oss
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


export default App;
