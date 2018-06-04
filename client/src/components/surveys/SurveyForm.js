import React, { Component } from 'react';
import { reduxForm } from 'redux-form'; // Nearly identical to connect helper.  Allows component to talk to redux store

class SurveyForm extends Component {
  render() {
    return (
      <div>SurveyForm</div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm',
})(SurveyForm);
