import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import formFields from './formFields';
import * as actions from '../../actions';

const SurveyFormReview = (props) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{props.formValues[name]}</div>
      </div>
    )
  });

  return (
    <div>
      <h5>Please confirm your entires</h5>
      <div>
        {reviewFields}
      </div>
      <button
        className="yellow darken-3 btn-flat white-text"
        onClick={props.onCancel}
      >
        Back
      </button>

      <button
        className="green btn-flat white-text right"
        onClick={() => props.submitSurvey(props.formValues, props.history)}
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
