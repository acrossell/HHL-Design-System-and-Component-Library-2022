import React from 'react';

import CardNotification from "./cardNotification.js";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Cards/Notification',
  component: CardNotification
};

export const Default= () =>  
  <CardNotification

  ></CardNotification>;