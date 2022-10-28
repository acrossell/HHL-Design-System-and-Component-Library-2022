import React from 'react';

import CardDonut from "./cardDonut.js";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Cards/Donut',
  component: CardDonut
};

export const Default= () =>  
  <CardDonut

  ></CardDonut>;