import React from 'react';
import PaymentForm from '../components/PaymentForm';
import AddressForm from '../components/AddressForm';
import { FormControl } from '@material-ui/core';


const Checkout = () => {
    return(
        <FormControl>
            <AddressForm />
            <PaymentForm />
        </FormControl>
    );
};



export default Checkout;