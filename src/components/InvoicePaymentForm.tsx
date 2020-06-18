// import React from 'react';
// import Grid from '@material-ui/core/Grid';
// import TextField from '@material-ui/core/TextField';

// const InvoicePaymentForm = () => {
//     return(
//         <React.Fragment>
//         <Grid item xs={12}>
//           <TextField
//             required
//             id="persnr"
//             name="persnr"
//             label="Personnummer"
//             fullWidth
//             autoComplete="persnr"
//             type="number"
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             required
//             id="address1"
//             name="Fakturering Adress"
//             label="Adress 1"
//             fullWidth
//             autoComplete="shipping address-line1"
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="city"
//             name="city"
//             label="Stad"
//             fullWidth
//             autoComplete="shipping address-level2"
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="zip"
//             name="zip"
//             label="Postnummer"
//             fullWidth
//             autoComplete="shipping postal-code"
//             type="number"
//           />
//         </Grid>
//     </React.Fragment>
//     );
// };

// export default InvoicePaymentForm;


import React from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

export default class ValidationForm extends React.Component {
    state = {
        formData: {
            personnummer:'',
            address:'',
            city:'',
            postCode:'',

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
                <h6>Betala med faktura</h6>
                <TextValidator
                    label="Personnummer"
                    onChange={this.handleChange}
                    name="personnummer"
                    value={formData.personnummer}
                    type="number"
                    validators={['required']}
                    errorMessages={['Ange ditt personnummer för att kunna gå viadare']}
                />
                <br/>
                <TextValidator
                    label="Adress"
                    onChange={this.handleChange}
                    name="address"
                    value={formData.address}
                    type="text"
                    validators={['required']}
                    errorMessages={['Ange adress för att kunna gå vidare']}
                />
                <br/>
                <TextValidator
                    label="Stad"
                    onChange={this.handleChange}
                    name="city"
                    value={formData.city}
                    type="text"
                    validators={['required']}
                    errorMessages={['Ange stad för att kunna gå vidare']}
                />
                <br/>
                <TextValidator
                    label="Postnummer"
                    onChange={this.handleChange}
                    name="postCode"
                    value={formData.postCode}
                    type="number"
                    validators={['required']}
                    errorMessages={['Ange postnummer för att kunna gå vidare']}
                />
                <br/>
                <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    disabled={submitted}
                >
                    {
                        (submitted && (window.location.href = './done'))
                        || (!submitted && 'Betala')
                    }
                </Button>
            </ValidatorForm>
        );
    }
}