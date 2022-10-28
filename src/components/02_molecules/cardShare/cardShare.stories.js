import React from 'react';

import CardShare from "./cardShare.js";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Molecules/Cards/Share',
  component: CardShare
};

export const Default= () =>  
  <CardShare

  ></CardShare>;