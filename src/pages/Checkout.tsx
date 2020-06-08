import React from 'react';
import PaymentForm from '../components/PaymentForm';
import AddressForm from '../components/AddressForm';


const Checkout = () => {
    return(
        <div>
            <AddressForm />
            <PaymentForm />
        </div>
    );
};



export default Checkout;