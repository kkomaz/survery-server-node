import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'; // Nearly identical to connect helper.  Allows component to talk to redux store
import SurveyField from './SurveyField';

class SurveyForm extends Component {
  renderFields() {
    return (
      <div>
        <Field type="text" name="title" component={SurveyField} />
      </div>
    )
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
