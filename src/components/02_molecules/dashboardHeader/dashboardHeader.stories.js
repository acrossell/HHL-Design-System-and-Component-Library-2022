import React from 'react';

import DashboardHeader from "./dashboardHeader";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Dahsboard/Header',
  component: DashboardHeader
};

export const Default= () =>  
  <DashboardHeader

  ></DashboardHeader>;