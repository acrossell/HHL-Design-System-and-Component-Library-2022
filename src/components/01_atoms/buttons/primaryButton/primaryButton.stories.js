import React from 'react';

import PrimaryButton from "./primaryButton.js";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'PrimaryButton',
  component: PrimaryButton
};

export const TestButton= () =>  
  <PrimaryButton
    hasIcon="none"
    buttonCopy="this is a button with no icon"
  ></PrimaryButton>;

  export const TestButtonLeftIcon= () =>  
  <PrimaryButton
    hasIcon="right"
    buttonCopy="this is a button with right icon"
  ></PrimaryButton>;

  export const TestButtonRightIcon= () =>  
  <PrimaryButton
    hasIcon="left"
    buttonCopy="this is a button with left icon"
  ></PrimaryButton>;