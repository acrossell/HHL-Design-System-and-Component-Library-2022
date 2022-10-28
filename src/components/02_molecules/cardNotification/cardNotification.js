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
export const CardNotification_container_paddingVertical = tokenData.cards.notification.container.value.verticalPadding;
export const CardNotification_container_paddingHorizontal = tokenData.cards.notification.container.value.horizontalPadding;
export const CardNotification_container_fill = tokenData.cards.notification.container.value.fill;
export const CardNotification_container_borderColor = tokenData.cards.notification.container.value.border;
export const CardNotification_container_borderRadius_topLeft = tokenData.cards.notification.container.value.borderRadius;
export const CardNotification_container_borderRadius_topRight = tokenData.cards.notification.container.value.borderRadius;
export const CardNotification_container_borderRadius_bottomRight = tokenData.cards.notification.container.value.borderRadius;
export const CardNotification_container_borderRadius_bottomLeft = tokenData.cards.notification.container.value.borderRadius;
export const CardNotification_container_boxShadow =  `${tokenData.cards.notification.container.value.boxShadow.y} ${tokenData.cards.notification.container.value.boxShadow.x} ${tokenData.cards.notification.container.value.boxShadow.blur} ${tokenData.cards.notification.container.value.boxShadow.spread} ${tokenData.cards.notification.container.value.boxShadow.color}`;
export const CardNotification_container_opacity = tokenData.cards.notification.container.value.opacity;

// Title
export const CardNotification_title_fontFamily = tokenData.cards.chartCard.title.value.typography.fontFamily;
export const CardNotification_title_fontWeight = tokenData.cards.chartCard.title.value.typography.fontWeight;
export const CardNotification_title_fontSize = tokenData.cards.chartCard.title.value.typography.fontSize;
export const CardNotification_title_lineHeight = tokenData.cards.chartCard.title.value.typography.lineHeight;
export const CardNotification_title_letterSpacing = tokenData.cards.chartCard.title.value.typography.letterSpacing;
export const CardNotification_title_textCase = tokenData.cards.chartCard.title.value.typography.textCase;
export const CardNotification_title_textDecoration = tokenData.cards.chartCard.title.value.typography.textDecoration;
export const CardNotification_title_color = tokenData.cards.chartCard.title.value.fill;

// Close Icon
export const CardNotification_readoutValue_fontFamily = tokenData.cards.chartCard.value.value.typography.fontFamily;
export const CardNotification_readoutValue_fontWeight = tokenData.cards.chartCard.value.value.typography.fontWeight;
export const CardNotification_readoutValue_fontSize = tokenData.cards.chartCard.value.value.typography.fontSize;
export const CardNotification_readoutValue_lineHeight = tokenData.cards.chartCard.value.value.typography.lineHeight;
export const CardNotification_readoutValue_letterSpacing = tokenData.cards.chartCard.value.value.typography.letterSpacing;
export const CardNotification_readoutValue_textCase = tokenData.cards.chartCard.value.value.typography.textCase;
export const CardNotification_readoutValue_textDecoration = tokenData.cards.chartCard.value.value.typography.textDecoration;
export const CardNotification_readoutValue_color = tokenData.cards.chartCard.value.value.fill;

// Body Text
export const CardNotification_bodyText_fontFamily = tokenData.cards.notification.body.value.typography.fontFamily;
export const CardNotification_bodyText_fontWeight = tokenData.cards.notification.body.value.typography.fontWeight;
export const CardNotification_bodyText_fontSize = tokenData.cards.notification.body.value.typography.fontSize;
export const CardNotification_bodyText_lineHeight = tokenData.cards.notification.body.value.typography.lineHeight;
export const CardNotification_bodyText_letterSpacing = tokenData.cards.notification.body.value.typography.letterSpacing;
export const CardNotification_bodyText_textCase = tokenData.cards.notification.body.value.typography.textCase;
export const CardNotification_bodyText_textDecoration = tokenData.cards.notification.body.value.typography.textDecoration;
export const CardNotification_bodyText_color = tokenData.cards.chartCard.valueLabel.value.fill;

// Define Styles //
// ---------------//

const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-style: solid;
    outline: none;
    padding: 
        ${CardNotification_container_paddingVertical} 
        ${CardNotification_container_paddingHorizontal};
    background-color: 
        ${CardNotification_container_fill};
    border-color: 
        ${CardNotification_container_borderColor};
    border-radius: 
        ${CardNotification_container_borderRadius_topLeft} 
        ${CardNotification_container_borderRadius_topRight} 
        ${CardNotification_container_borderRadius_bottomLeft} 
        ${CardNotification_container_borderRadius_bottomRight};
    box-shadow: 
        ${CardNotification_container_boxShadow};
    opacity: 
        ${CardNotification_container_opacity};
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
        font-family: ${CardNotification_bodyText_fontFamily};
        font-weight: ${CardNotification_bodyText_fontWeight};
        font-size: ${CardNotification_bodyText_fontSize};
        line-height: ${CardNotification_bodyText_lineHeight};
        letter-spacing: ${CardNotification_bodyText_letterSpacing};
        text-transform: ${CardNotification_bodyText_textCase};
        text-decoration: ${CardNotification_bodyText_textDecoration};
        color: ${CardNotification_bodyText_color};
    }
`;

const CloseButton = styled.button`
    height: 24px;
    width: 24px;
    background-color: white;
`;

const CardTitle = styled.h3`
    margin: 0;
    font-family: ${CardNotification_title_fontFamily};
    font-weight: ${CardNotification_title_fontWeight};
    font-size: ${CardNotification_title_fontSize};
    line-height: ${CardNotification_title_lineHeight};
    letter-spacing: ${CardNotification_title_letterSpacing};
    text-transform: ${CardNotification_title_textCase};
    text-decoration: ${CardNotification_title_textDecoration};
    color: ${CardNotification_title_color};
`;

// Define Component //
// -----------------//
function CardNotification() {
  return (
      <Container className="">
        <Header className="header">
            <CardTitle className="title">Card Title</CardTitle>
            <CloseButton></CloseButton>
        </Header>
        <Body className="body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Body>
      </Container>  
    
  );
}

export default CardNotification;

CardNotification.propTypes = {
  hasIcon: PropTypes.string,
  buttonCopy: PropTypes.string
};