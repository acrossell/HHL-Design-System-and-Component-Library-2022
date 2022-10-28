import React from 'react';

import DashBoard from "./dashboard.js";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Pages/Dashboard/Index',
  component: DashBoard
};

export const Default= () =>  
  <DashBoard

  ></DashBoard>;