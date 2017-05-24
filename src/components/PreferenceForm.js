import React from 'react';
import { Form, FormSelectWrapper, FormSelect, FormButton } from './base/Form';

const PreferenceForm = props => {
  return (
    <Form onSubmit={props.handleFormSubmit} name="preferenceSubmitted">
      <label htmlFor="formCategory">
        Do you have a gender preference?
      </label>
      <FormSelectWrapper>
        <FormSelect
          id="formGender"
          name="gender"
          onChange={props.handleFormInputChange}
          required
        >
          <option value="no preference">No preference</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </FormSelect>
      </FormSelectWrapper>
      <label htmlFor="formGoal">
        Do you have an age preference?
      </label>
      <FormSelectWrapper>
        <FormSelect
          id="formAge"
          name="age"
          onChange={props.handleFormInputChange}
          required
        >
          <option value="no preference">No preference</option>
          <option value="20">20-29</option>
          <option value="30">30-39</option>
          <option value="40">40-49</option>
          <option value="50">50-59</option>
          <option value="60">60-69</option>
        </FormSelect>
      </FormSelectWrapper>
      <FormButton type="submit">Submit</FormButton>
    </Form>
  );
};

export default PreferenceForm;
