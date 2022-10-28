import React from 'react';

import CardTransaction from "./cardTransaction.js";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Cards/CardTransaction',
  component: CardTransaction
};

export const Default= () =>  
  <CardTransaction

  ></CardTransaction>;