import React from 'react';
import styles from './ComplyPricingForm.module.css';
import TextInput from '../forms/TextInput';
import Button from '../buttons/Button';
import { submitMarketoForm, COMPLY_PRICING_FORM } from '../../lib/marketo';
import done from '../../images/signup/done.svg';

class ComplyPricingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      finished: false,
    };
  }

  fieldChanged = (field, value) => {
    this.setState({ [field]: value });
  };

  submit = () => {
    if (this.state.email.length < 1 || this.state.email.indexOf('@') === -1) {
      return;
    }

    const payload = {
      FirstName: this.state.firstName,
      LastName: this.state.lastName,
      Email: this.state.email,
      Phone: this.state.phone,
      Company: this.state.company,
      LeadSource: 'Comply Pricing',
    };

    submitMarketoForm(COMPLY_PRICING_FORM, payload, () => {
      this.setState({ finished: true });
    });
  };

  render() {
    return (
      <React.Fragment>
        {!this.state.finished && (
          <React.Fragment>
            <TextInput
              labelText="First Name"
              required="true"
              value={this.state.firstName}
              changeFn={value => this.fieldChanged('firstName', value)}
            />
            <TextInput
              labelText="Last Name"
              required="true"
              value={this.state.lastName}
              changeFn={value => this.fieldChanged('lastName', value)}
            />
            <TextInput
              labelText="Work Email"
              required="true"
              value={this.state.email}
              changeFn={value => this.fieldChanged('email', value)}
            />
            <TextInput
              labelText="Phone Number"
              value={this.state.phone}
              changeFn={value => this.fieldChanged('phone', value)}
            />
            <TextInput
              labelText="Company Name"
              value={this.state.company}
              changeFn={value => this.fieldChanged('company', value)}
            />

            <div className={styles.complyCta}>
              <Button onClickFn={this.submit}>Request Pricing Info</Button>
            </div>
          </React.Fragment>
        )}

        {this.state.finished && (
          <div className={styles.thankYou}>
            <div className={styles.checkmark}>
              <img src={done} alt="Checkmark" />
            </div>

            <h3>Thank you</h3>
            <p>
              One of our compliance program specialists will reach out soon to
              discuss Comply pricing.
            </p>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default ComplyPricingForm;
