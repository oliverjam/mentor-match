import React from 'react';
import {
  Categories,
  Form,
  DevelopmentInput,
  TextArea,
  FormLink,
} from './base/Form';

const DevelopmentForm = props => {
  // console.log(props);

  return (
    <Form onSubmit={props.handleFormSubmit}>
      <Categories
        name="category"
        onChange={props.handleFormInputChange}
        required
      >
        <option value="">Select a Category</option>
        <option value="programming">Programming</option>
        <option value="public speaking">Public Speaking</option>
        <option value="leadership">leadership</option>
        <option value="management">Management</option>
        <option value="leadership">leadership</option>
      </Categories>
      <DevelopmentInput
        onChange={props.handleFormInputChange}
        name="goal"
        required
        type="text"
        placeholder="Final Goal"
      />
      <TextArea required />
      <DevelopmentInput
        onChange={props.handleFormInputChange}
        name="time"
        required
        type="text"
        placeholder="Time to Achieve Goal"
      />
      <DevelopmentInput type="submit" />
    </Form>
  );
};

export default DevelopmentForm;
