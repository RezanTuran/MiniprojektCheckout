import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';

interface Props {}
interface State {
  selectedDeliveryMethod: "PostNord" | "DHL" | "Schenker"
}

export  interface Delivery{
  name: string
  price: number
  days: number
}

let Delivery: Delivery[] = [{
  name: "PostNord",
  price: 49,
  days: 3
}, {
  name: "DHL",
  price: 149,
  days: 1
}, {
  name: "Schenker",
  price: 499,
  days: 0
}
  
];

export default class PaymentForm extends React.Component{


  state: State = {
    selectedDeliveryMethod: "PostNord"
  }
  
  renderPaymentFields() {
    switch(this.state.selectedDeliveryMethod) {
      case "PostNord": return(
      <div>
        <p>{Delivery[0].name}</p>
        <p>{Delivery[0].days}</p>
        <p>{Delivery[0].price}</p>
        <p>{new Date(new Date().setDate(new Date().getDate() + Delivery[0].days)).toISOString().substring(0, 10)}</p>
      </div>
      )
      case "DHL": return(
      <div>
        <p>{Delivery[1].name}</p>
        <p>{Delivery[1].days}</p>
        <p>{Delivery[1].price}</p>
        <p>{new Date(new Date().setDate(new Date().getDate() + Delivery[1].days)).toISOString().substring(0, 10)}</p>
      </div>
      ) 
      case "Schenker": return(
      <div>
        <p>{Delivery[2].name}</p>
        <p>{Delivery[2].days}</p>
        <p>{Delivery[2].price}</p>
        <p>{new Date(new Date().setDate(new Date().getDate() + Delivery[2].days)).toISOString().substring(0, 10)}</p>
      </div>
      )
    }
  }


  render() {
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Fraktsätt
        </Typography>
        <FormLabel component="legend">Välj Fraktsätt</FormLabel>
        <RadioGroup aria-label="gender" name="gender1">
          <FormControlLabel value={Delivery[0].name} control={<Radio />} label="Postnord" 
          onChange={() => this.setState({ selectedDeliveryMethod: "PostNord"})}
          checked={this.state.selectedDeliveryMethod === "PostNord"}
          />
          <FormControlLabel value={Delivery[1].name} control={<Radio />} label="DHL"
           onChange={() => this.setState({ selectedDeliveryMethod: "DHL"})} />

          <FormControlLabel value={Delivery[2].name} control={<Radio />} label="Schenker" 
          onChange={() => this.setState({ selectedDeliveryMethod: "Schenker"})}/>
        </RadioGroup>
   
        <Grid container spacing={3}>
          {this.renderPaymentFields()}
        </Grid>
       
      </React.Fragment>
    );
  }

}

