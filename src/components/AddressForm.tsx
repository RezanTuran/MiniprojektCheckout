import React from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

export default class ValidationForm extends React.Component {
    state = {
        formData: {
            name: '',
            lastname: '',
            email: '',
            password: '',
            address: '',
        },
        submitted: false,
    }

    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
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
                <h4>Customer Information</h4>
                <TextValidator
                    label="Förnamn"
                    onChange={this.handleChange}
                    name="name"
                    value={formData.name}
                    validators={['required']}
                    errorMessages={['Ange förnamn']}
                />
                <br />
               
                <TextValidator
                    label="Efternamn"
                    onChange={this.handleChange}
                    name="lastname"
                    value={formData.lastname}
                    validators={['required']}
                    errorMessages={['Ange efternamn']}
                />
                <br />
        
                <TextValidator
                    label="Email"
                    onChange={this.handleChange}
                    name="email"
                    value={formData.email}
                    validators={['required', 'isEmail']}
                    errorMessages={['Ange email', 'epost är inte gilligt']}
                />
                <br />
                <TextValidator
                    label="Lösenord"
                    onChange={this.handleChange}
                    name="password"
                    value={formData.password}
                    validators={['required']}
                    type="password"
                    errorMessages={['Ange lösenord']}
                />
                <br />
                <TextValidator
                    label="Adress"
                    onChange={this.handleChange}
                    name="address"
                    value={formData.address}
                    validators={['required']}
                    errorMessages={['Ange adress']}
                />
                <br />
                <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    disabled={submitted}
                >
                    {
                        (submitted && 'Dina uppgifter sparas vänligen vänta')
                        || (!submitted && 'Spara')
                    }
                </Button>
            </ValidatorForm>
        );
    }
}