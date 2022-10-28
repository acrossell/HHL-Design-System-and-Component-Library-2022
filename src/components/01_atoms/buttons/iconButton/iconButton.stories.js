import React from 'react';

import IconButton from "./iconButton.js";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'IconButton',
  component: IconButton
};

export const TestButton= () =>  
  <IconButton
    hasIcon="none"
    buttonCopy="this is a button with no icon"
  ></IconButton>;