import React from 'react';

import CardBlogArticle from "./cardBlogArticle.js";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Molecules/Cards/Article',
  component: CardBlogArticle
};

export const Default= () =>  
  <CardBlogArticle

  ></CardBlogArticle>;