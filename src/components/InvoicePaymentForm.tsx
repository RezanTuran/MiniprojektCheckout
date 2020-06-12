import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const InvoicePaymentForm = () => {
    return(
        <React.Fragment>
        <Grid item xs={12}>
          <TextField
            required
            id="persnr"
            name="persnr"
            label="Personnummer"
            fullWidth
            autoComplete="persnr"
            type="number"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="Fakturering Adress"
            label="Adress 1"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="Stad"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Postnummer"
            fullWidth
            autoComplete="shipping postal-code"
            type="number"
          />
        </Grid>
    </React.Fragment>
    );
};

export default InvoicePaymentForm;