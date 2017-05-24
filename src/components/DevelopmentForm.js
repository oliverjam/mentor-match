import React from 'react';
import {
  Form,
  FormInput,
  TextArea,
  FormSelectWrapper,
  FormSelect,
  FormButton,
} from './base/Form';

const DevelopmentForm = props => {
  return (
    <Form onSubmit={props.handleFormSubmit}>
      <label htmlFor="formCategory">
        What category is your goal in?
      </label>
      <FormSelectWrapper>
        <FormSelect
          id="formCategory"
          name="category"
          onChange={props.handleFormInputChange}
          required
        >
          <option value="programming">Programming</option>
          <option value="public speaking">Public Speaking</option>
          <option value="leadership">Leadership</option>
          <option value="management">Management</option>
          <option value="leadership">Leadership</option>
        </FormSelect>
      </FormSelectWrapper>
      <label htmlFor="formGoal">
        What's your final goal?
      </label>
      <FormInput
        id="formGoal"
        onChange={props.handleFormInputChange}
        name="goal"
        required
        type="text"
        placeholder="Make a website about myself"
      />
      <label htmlFor="formDescription">
        Describe your goal in more detail.
      </label>
      <TextArea
        id="formDescription"
        required
        rows="7"
        placeholder="I'd like to learn to make websites so that..."
      />
      <label htmlFor="formTime">
        How many weeks do you have to work on this?
      </label>
      <FormInput
        id="formTime"
        onChange={props.handleFormInputChange}
        name="time"
        required
        type="number"
        placeholder="4"
      />
      <FormButton type="submit">Submit</FormButton>
    </Form>
  );
};

export default DevelopmentForm;
