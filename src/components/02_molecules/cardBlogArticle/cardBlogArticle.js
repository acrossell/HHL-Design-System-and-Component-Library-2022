import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Import style token json data
//----------------//
import tokenData from '../../../assets/designTokens/tokensMasterTransformed.json';
console.log(tokenData);

//Import Sample Image
// ---------------//
import SampleImage from '../../../assets/images/sampleArtcileImage.png';

// Define Tokens //
// ---------------//

// Container
export const CardBlogArticle_container_paddingVertical = tokenData.cards.article.container.value.verticalPadding;
export const CardBlogArticle_container_paddingHorizontal = tokenData.cards.article.container.value.horizontalPadding;
export const CardBlogArticle_container_fill = tokenData.cards.article.container.value.fill;
export const CardBlogArticle_container_borderColor = tokenData.cards.article.container.value.border;
export const CardBlogArticle_container_borderRadius_topLeft = tokenData.cards.article.container.value.borderRadius;
export const CardBlogArticle_container_borderRadius_topRight = tokenData.cards.article.container.value.borderRadius;
export const CardBlogArticle_container_borderRadius_bottomRight = tokenData.cards.article.container.value.borderRadius;
export const CardBlogArticle_container_borderRadius_bottomLeft = tokenData.cards.article.container.value.borderRadius;
export const CardBlogArticle_container_boxShadow =  `${tokenData.cards.article.container.value.boxShadow.y} ${tokenData.cards.article.container.value.boxShadow.x} ${tokenData.cards.article.container.value.boxShadow.blur} ${tokenData.cards.article.container.value.boxShadow.spread} ${tokenData.cards.article.container.value.boxShadow.color}`;
export const CardBlogArticle_container_opacity = tokenData.cards.article.container.value.opacity;

// // Elipsis Button
// export const CardBlogArticle_readoutValue_fontFamily = tokenData.cards.article.value.value.typography.fontFamily;
// export const CardBlogArticle_readoutValue_fontWeight = tokenData.cards.article.value.value.typography.fontWeight;
// export const CardBlogArticle_readoutValue_fontSize = tokenData.cards.article.value.value.typography.fontSize;
// export const CardBlogArticle_readoutValue_lineHeight = tokenData.cards.article.value.value.typography.lineHeight;
// export const CardBlogArticle_readoutValue_letterSpacing = tokenData.cards.article.value.value.typography.letterSpacing;
// export const CardBlogArticle_readoutValue_textCase = tokenData.cards.article.value.value.typography.textCase;
// export const CardBlogArticle_readoutValue_textDecoration = tokenData.cards.article.value.value.typography.textDecoration;
// export const CardBlogArticle_readoutValue_color = tokenData.cards.chartCard.value.value.fill;

// Body Text
export const CardBlogArticle_bodyText_fontFamily = tokenData.cards.article.title.value.typography.fontFamily;
export const CardBlogArticle_bodyText_fontWeight = tokenData.cards.article.title.value.typography.fontWeight;
export const CardBlogArticle_bodyText_fontSize = tokenData.cards.article.title.value.typography.fontSize;
export const CardBlogArticle_bodyText_lineHeight = tokenData.cards.article.title.value.typography.lineHeight;
export const CardBlogArticle_bodyText_letterSpacing = tokenData.cards.article.title.value.typography.LetterSpacing;
export const CardBlogArticle_bodyText_textCase = tokenData.cards.article.title.value.typography.textCase;
export const CardBlogArticle_bodyText_textDecoration = tokenData.cards.article.title.value.typography.textDecoration;
export const CardBlogArticle_bodyText_color = tokenData.cards.article.title.value.fill;

// Define Styles //
// ---------------//

const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-style: solid;
    outline: none;
    padding: 
        ${CardBlogArticle_container_paddingVertical} 
        ${CardBlogArticle_container_paddingHorizontal};
    background-color: 
        ${CardBlogArticle_container_fill};
    border-color: 
        ${CardBlogArticle_container_borderColor};
    border-radius: 
        ${CardBlogArticle_container_borderRadius_topLeft} 
        ${CardBlogArticle_container_borderRadius_topRight} 
        ${CardBlogArticle_container_borderRadius_bottomLeft} 
        ${CardBlogArticle_container_borderRadius_bottomRight};
    box-shadow: 
        ${CardBlogArticle_container_boxShadow};
    opacity: 
        ${CardBlogArticle_container_opacity};
`;

const ImageWrapper = styled.div`
    display:flex;
    min-height: 320px;
    margin-bottom: 16px;
    border-radius: 16px;
    overflow: hidden;

    img{
        width: 100%;
        height: auto;
    }
`;

const ElipsisButton = styled.button`
    height: 24px;
    width: 24px;
    background-color: white;
`;

const Body = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const ArticleIntro = styled.p`
    margin: 0;
    font-family: ${CardBlogArticle_bodyText_fontFamily};
    font-weight: ${CardBlogArticle_bodyText_fontWeight};
    font-size: ${CardBlogArticle_bodyText_fontSize};
    line-height: ${CardBlogArticle_bodyText_lineHeight};
    letter-spacing: ${CardBlogArticle_bodyText_letterSpacing};
    text-transform: ${CardBlogArticle_bodyText_textCase};
    text-decoration: ${CardBlogArticle_bodyText_textDecoration};
    color: ${CardBlogArticle_bodyText_color};
`;

// Define Component //
// -----------------//
function CardBlogArticle() {
  return (
      <Container className="">
        <ImageWrapper className="header">
            <img className="articleImage" src={SampleImage} alt=""/>
        </ImageWrapper>
        <Body className="body">
            <ArticleIntro className="articleIntro">This is a pargraph of ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</ArticleIntro>
            <ElipsisButton></ElipsisButton>
        </Body>
      </Container>  
    
  );
}

export default CardBlogArticle;

CardBlogArticle.propTypes = {
  hasIcon: PropTypes.string,
  buttonCopy: PropTypes.string
};