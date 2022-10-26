import React from 'react';

import Form from "./form";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Form',
  component: Form,
};
export const Simpleform = () => <Form>Test</Form>;