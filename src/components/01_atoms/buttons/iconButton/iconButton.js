import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import icon from "../../../../assets/images/iconSample.svg";

// Import style token json data
//----------------//
import tokenData from '../../../../assets/designTokens/tokensMasterTransformed.json';
console.log(tokenData);

// Define Tokens //
// ---------------//

//Container
export const iconButton_inactive_container_paddingVertical = tokenData.buttons.iconButton.inactive.container.value.verticalPadding;
export const iconButton_inactive_container_paddingHorizontal = tokenData.buttons.iconButton.inactive.container.value.horizontalPadding;
export const iconButton_inactive_container_fill = tokenData.buttons.iconButton.inactive.container.value.fill;
export const iconButton_inactive_container_borderColor = tokenData.buttons.iconButton.inactive.container.value.border;
export const iconButton_inactive_container_borderWidth = tokenData.buttons.iconButton.inactive.container.value.borderWidth;
export const iconButton_inactive_container_borderRadius_topLeft = tokenData.buttons.iconButton.inactive.container.value.borderRadiusTopLeft;
export const iconButton_inactive_container_borderRadius_topRight = tokenData.buttons.iconButton.inactive.container.value.borderRadiusTopRight;
export const iconButton_inactive_container_borderRadius_bottomRight = tokenData.buttons.iconButton.inactive.container.value.borderRadiusBottomRight;
export const iconButton_inactive_container_borderRadius_bottomLeft = tokenData.buttons.iconButton.inactive.container.value.borderRadiusBottomLeft;
export const iconButton_inactive_container_boxShadow =  tokenData.buttons.iconButton.inactive.container.value.boxShadow;
export const iconButton_inactive_container_opacity = tokenData.buttons.iconButton.inactive.container.value.opacity;

// Define Styles //
// ---------------//
const Button = styled.button`
  border-style: solid;
  outline: none;
  padding: 
    ${iconButton_inactive_container_paddingVertical} 
    ${iconButton_inactive_container_paddingHorizontal};
  background-color: ${iconButton_inactive_container_fill};
  border-width: ${iconButton_inactive_container_borderWidth};
  border-color: ${iconButton_inactive_container_borderColor};
  border-radius: 
    ${iconButton_inactive_container_borderRadius_topLeft} 
    ${iconButton_inactive_container_borderRadius_topRight} 
    ${iconButton_inactive_container_borderRadius_bottomLeft} 
    ${iconButton_inactive_container_borderRadius_bottomRight};
  box-shadow: ${iconButton_inactive_container_boxShadow};
  opacity: ${iconButton_inactive_container_opacity};
  `;

  const Icon = styled.img`
    height: 26px;
    width: 26p;
`;

// Define Component //
// -----------------//
function IconButton({ iconSrc }) {
  return (
    <>
      <Button>
        <Icon src={icon}></Icon>
      </Button>
    </>
  );
}

export default IconButton;

IconButton.propTypes = {
  iconSrc: PropTypes.string
};