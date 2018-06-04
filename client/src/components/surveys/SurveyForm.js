import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'; // Nearly identical to connect helper.  Allows component to talk to redux store
import _ from 'lodash';
import formFields from './formFields';
import SurveyField from './SurveyField';

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          component={SurveyField}
          type="text"
          label={label}
          name={name}
          key={name}
        />
      )
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm',
})(SurveyForm);
