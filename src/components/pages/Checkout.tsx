import React from 'react';
import PaymentForm from '../PaymentForm';
import AddressForm from '../AddressForm';
import { FormControl } from '@material-ui/core';
import Delivery from '../Delivery';


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