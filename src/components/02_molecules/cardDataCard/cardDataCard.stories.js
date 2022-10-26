import React from 'react';

import CardData from "./cardDataCard.js";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'cardData',
  component: CardData
};

export const DefaultCard= () =>  
  <CardData

  ></CardData>;