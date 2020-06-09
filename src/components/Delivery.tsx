import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const shippers = [
  {
    id: 1,
    img: 'dhl.jpg',
    title: 'DHL',
    description: 'Leverans inom 24 timmar',
    price: 99,
  },
  {
    id: 2,
    img: 'postnord.jpg',
    title: 'Postnord',
    description: 'Leverans inom 48 timmar',
    price: 59,
  },
  {
    id: 3,
    img: 'instabox.jpg',
    title: 'Instabox',
    description: 'Leverans inom 72 timmar',
    price: 29,
  },
];


export default function Delivery() {
  const classes = useStyles();

  const [selectedShipper, setShipper]=useState('dhl' as string)
  return (
    <React.Fragment>
      <CssBaseline />
        <Container className={classes.cardGrid} maxWidth="xs">
          {/* End hero unit */}
          <Grid container spacing={1
          }>
            {shippers.map((shipper) => (
              <Grid item key={shipper.id} xs={4} sm={4} md={4}>
                <Card style={selectedShipper===shipper.title?{border: '2px black solid'}:{}} className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={require('./../assets/images/'+shipper.img)}
                    title={(shipper.title)}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" component="h2">
                      {shipper.title}
                    </Typography>
                    <Typography variant="subtitle2">
                      {shipper.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick={()=>{setShipper(shipper.title)}} size="small" color="inherit" variant="outlined">
                      Pris: {shipper.price} kr.
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
    </React.Fragment>
  );
}