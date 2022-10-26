import React from 'react';

import GlobalNav from "./globalNavigation.js";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Navigation',
  component: GlobalNav
};

export const DefaultGlobalNav= () =>  
  <GlobalNav></GlobalNav>;