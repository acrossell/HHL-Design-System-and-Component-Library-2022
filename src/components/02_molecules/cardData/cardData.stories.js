import React from 'react';

import CardData from "./cardData.js";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Molecules/Cards/Data',
  component: CardData
};

export const Default= () =>  
  <CardData

  ></CardData>;