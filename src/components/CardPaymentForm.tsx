import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';



const CardPaymentForm = () => {
    return(
        <>
      <Grid item xs={12} md={6}>
        <TextField required id="cardName" label="Namn" fullWidth autoComplete="cc-name" />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          required
          type="number"
          id="cardNumber"
          label="Kort nummer"
          fullWidth
          autoComplete="cc-number"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField 
        required 
        id="expDate" 
        label="Datum" 
        fullWidth autoComplete="cc-exp" />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          required
          id="cvv"
          type="number"
          label="CVV"
          helperText="Last three digits on signature strip"
          fullWidth
          autoComplete="cc-csc"
        />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox color="secondary" name="saveCard" value="yes" />}
          label="Remember credit card details for next time"
        />
      </Grid>
      </>
    );
};



export default CardPaymentForm;