import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Import style token json data
//----------------//
import tokenData from '../../../assets/designTokens/tokensMasterTransformed.json';
console.log(tokenData);

// Define Tokens //
// ---------------//

// Container
export const CardTransaction_container_paddingVertical = tokenData.cards.notification.container.value.verticalPadding;
export const CardTransaction_container_paddingHorizontal = tokenData.cards.notification.container.value.horizontalPadding;
export const CardTransaction_container_fill = tokenData.cards.notification.container.value.fill;
export const CardTransaction_container_borderColor = tokenData.cards.notification.container.value.border;
export const CardTransaction_container_borderRadius_topLeft = tokenData.cards.notification.container.value.borderRadius;
export const CardTransaction_container_borderRadius_topRight = tokenData.cards.notification.container.value.borderRadius;
export const CardTransaction_container_borderRadius_bottomRight = tokenData.cards.notification.container.value.borderRadius;
export const CardTransaction_container_borderRadius_bottomLeft = tokenData.cards.notification.container.value.borderRadius;
export const CardTransaction_container_boxShadow =  `${tokenData.cards.notification.container.value.boxShadow.y} ${tokenData.cards.notification.container.value.boxShadow.x} ${tokenData.cards.notification.container.value.boxShadow.blur} ${tokenData.cards.notification.container.value.boxShadow.spread} ${tokenData.cards.notification.container.value.boxShadow.color}`;
export const CardTransaction_container_opacity = tokenData.cards.notification.container.value.opacity;

// Title
export const CardTransaction_title_fontFamily = tokenData.cards.chartCard.title.value.typography.fontFamily;
export const CardTransaction_title_fontWeight = tokenData.cards.chartCard.title.value.typography.fontWeight;
export const CardTransaction_title_fontSize = tokenData.cards.chartCard.title.value.typography.fontSize;
export const CardTransaction_title_lineHeight = tokenData.cards.chartCard.title.value.typography.lineHeight;
export const CardTransaction_title_letterSpacing = tokenData.cards.chartCard.title.value.typography.letterSpacing;
export const CardTransaction_title_textCase = tokenData.cards.chartCard.title.value.typography.textCase;
export const CardTransaction_title_textDecoration = tokenData.cards.chartCard.title.value.typography.textDecoration;
export const CardTransaction_title_color = tokenData.cards.chartCard.title.value.fill;

// Close Icon
export const CardTransaction_readoutValue_fontFamily = tokenData.cards.chartCard.value.value.typography.fontFamily;
export const CardTransaction_readoutValue_fontWeight = tokenData.cards.chartCard.value.value.typography.fontWeight;
export const CardTransaction_readoutValue_fontSize = tokenData.cards.chartCard.value.value.typography.fontSize;
export const CardTransaction_readoutValue_lineHeight = tokenData.cards.chartCard.value.value.typography.lineHeight;
export const CardTransaction_readoutValue_letterSpacing = tokenData.cards.chartCard.value.value.typography.letterSpacing;
export const CardTransaction_readoutValue_textCase = tokenData.cards.chartCard.value.value.typography.textCase;
export const CardTransaction_readoutValue_textDecoration = tokenData.cards.chartCard.value.value.typography.textDecoration;
export const CardTransaction_readoutValue_color = tokenData.cards.chartCard.value.value.fill;

// Body Text
export const CardTransaction_bodyText_fontFamily = tokenData.cards.notification.body.value.typography.fontFamily;
export const CardTransaction_bodyText_fontWeight = tokenData.cards.notification.body.value.typography.fontWeight;
export const CardTransaction_bodyText_fontSize = tokenData.cards.notification.body.value.typography.fontSize;
export const CardTransaction_bodyText_lineHeight = tokenData.cards.notification.body.value.typography.lineHeight;
export const CardTransaction_bodyText_letterSpacing = tokenData.cards.notification.body.value.typography.letterSpacing;
export const CardTransaction_bodyText_textCase = tokenData.cards.notification.body.value.typography.textCase;
export const CardTransaction_bodyText_textDecoration = tokenData.cards.notification.body.value.typography.textDecoration;
export const CardTransaction_bodyText_color = tokenData.cards.chartCard.valueLabel.value.fill;

// Define Styles //
// ---------------//

const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-style: solid;
    outline: none;
    padding: 
        ${CardTransaction_container_paddingVertical} 
        ${CardTransaction_container_paddingHorizontal};
    background-color: 
        ${CardTransaction_container_fill};
    border-color: 
        ${CardTransaction_container_borderColor};
    border-radius: 
        ${CardTransaction_container_borderRadius_topLeft} 
        ${CardTransaction_container_borderRadius_topRight} 
        ${CardTransaction_container_borderRadius_bottomLeft} 
        ${CardTransaction_container_borderRadius_bottomRight};
    box-shadow: 
        ${CardTransaction_container_boxShadow};
    opacity: 
        ${CardTransaction_container_opacity};
`;

const Header = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: top
`;

const Body = styled.div`
    p{
        margin: 0;
        font-family: ${CardTransaction_bodyText_fontFamily};
        font-weight: ${CardTransaction_bodyText_fontWeight};
        font-size: ${CardTransaction_bodyText_fontSize};
        line-height: ${CardTransaction_bodyText_lineHeight};
        letter-spacing: ${CardTransaction_bodyText_letterSpacing};
        text-transform: ${CardTransaction_bodyText_textCase};
        text-decoration: ${CardTransaction_bodyText_textDecoration};
        color: ${CardTransaction_bodyText_color};
    }
`;

const TransactionTitle = styled.h3`
    margin: 0;
    font-family: ${CardTransaction_title_fontFamily};
    font-weight: ${CardTransaction_title_fontWeight};
    font-size: ${CardTransaction_title_fontSize};
    line-height: ${CardTransaction_title_lineHeight};
    letter-spacing: ${CardTransaction_title_letterSpacing};
    text-transform: ${CardTransaction_title_textCase};
    text-decoration: ${CardTransaction_title_textDecoration};
    color: ${CardTransaction_title_color};
`;

const TransactionValue = styled.h3`
    margin: 0;
    font-family: ${CardTransaction_title_fontFamily};
    font-weight: ${CardTransaction_title_fontWeight};
    font-size: ${CardTransaction_title_fontSize};
    line-height: ${CardTransaction_title_lineHeight};
    letter-spacing: ${CardTransaction_title_letterSpacing};
    text-transform: ${CardTransaction_title_textCase};
    text-decoration: ${CardTransaction_title_textDecoration};
    color: ${CardTransaction_title_color};
`;

const TransactionDate = styled.h3`
    margin: 0;
    font-family: ${CardTransaction_title_fontFamily};
    font-weight: ${CardTransaction_title_fontWeight};
    font-size: ${CardTransaction_title_fontSize};
    line-height: ${CardTransaction_title_lineHeight};
    letter-spacing: ${CardTransaction_title_letterSpacing};
    text-transform: ${CardTransaction_title_textCase};
    text-decoration: ${CardTransaction_title_textDecoration};
    color: ${CardTransaction_title_color};
`;

// Define Component //
// -----------------//
function CardShare() {
  return (
      <Container className="">
        <Header className="header">
            <TransactionTitle className="title">Card Title</TransactionTitle>
            <TransactionValue className="value">Card Title</TransactionValue>
        </Header>
        <Body className="body">
            <TransactionDate className="date">Card Title</TransactionDate>
        </Body>
      </Container>  
    
  );
}

export default CardShare;

CardShare.propTypes = {
  hasIcon: PropTypes.string,
  buttonCopy: PropTypes.string
};