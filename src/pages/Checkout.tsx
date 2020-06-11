import React from 'react';
import PaymentForm from '../components/PaymentForm';
import AddressForm from '../components/AddressForm';
import { FormControl } from '@material-ui/core';
import Delivery from '../components/Delivery';


const Checkout = () => {
    return(
        <FormControl>
            <AddressForm />
            <Delivery/>
            <PaymentForm />
        </FormControl>
    );
};



export default Checkout;