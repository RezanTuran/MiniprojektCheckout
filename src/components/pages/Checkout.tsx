import React from 'react';
import PaymentForm from '../PaymentForm';
import AddressForm from '../AddressForm';
import Delivery from '../Delivery';
import { Button } from '@material-ui/core';

interface Props {}
interface State {
    firstName: string
    firstNameError: string
    
    lastName: string
    lastNameError: string
}

class Checkout extends React.Component<Props, State> {

    state: State = {
        firstName: "",
        firstNameError: "",
        lastName: "",
        lastNameError: ""
    }

    handleOnSubmit = () => {
        console.log('test')
        // Check validation
        this.validateFirstName()
    }

    handleOnChange = (value: string, key: string) => {
        console.log(value, key)
        this.setState({ [key]: value } as any)
    }

    validateFirstName = () => {
        if (!this.state.firstName) {
            this.setState({ firstNameError: "Please enter a name" })
        } else if (this.state.firstName.length < 3) {
            this.setState({ firstNameError: "Must be 3 charaters" })
        } else {
            this.setState({ firstNameError: "" })
        }
    }


    render() {
        return(
            <form onSubmit={this.handleOnSubmit}>
                <AddressForm firstName={this.state.firstName} firstNameError={this.state.firstNameError} onChange={this.handleOnChange} />
                <Delivery/>
                <PaymentForm />
                <Button type="submit" variant="contained" color="primary" >Betala</Button>
            </form>
        );
    }
};



export default Checkout;