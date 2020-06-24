
import React from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

export default class ValidationForm extends React.Component {
    state = {
        formData: {
            phonenumber:''
        },
        submitted: false,
    }

    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });

        if(this.state.formData.phonenumber.length > 10){
            alert("Telefonnumer får inte vara mer än 10 siffror..!")
        }

    }

    handleSubmit = () => {
        this.setState({ submitted: true }, () => {
            setTimeout(() => this.setState({ submitted: false }), 5000);
        });
    }

    render() {
        const { formData, submitted } = this.state;
        return (
            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
            >
                <h6>Betala med swish</h6>
                <TextValidator
                    label="Telefonnummer"
                    onChange={this.handleChange}
                    name="phonenumber"
                    value={formData.phonenumber}
                    type="number"
                    validators={['required']}
                    errorMessages={['Ange telefonnummer för kunna gå vidare med betalningen']}
                />
                <br/>
                <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    disabled={submitted}
                >
                    {
                        (submitted && (window.location.href = './done') )
                        || (!submitted && 'Betala')
                    }
                </Button>
            </ValidatorForm>
        );
    }
}