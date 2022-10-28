import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import tokenData from '../../../../assets/designTokens/tokensMasterTransformed.json';

// Define Tokens //
// ---------------//

//Container
export const primaryButton_inactive_container_paddingVertical = tokenData.buttons.primaryButton.inactive.container.value.verticalPadding;
export const primaryButton_inactive_container_paddingHorizontal = tokenData.buttons.primaryButton.inactive.container.value.horizontalPadding;
export const primaryButton_inactive_container_fill = tokenData.buttons.primaryButton.inactive.container.value.fill;
export const primaryButton_inactive_container_borderColor = tokenData.buttons.primaryButton.inactive.container.value.border;
export const primaryButton_inactive_container_borderRadius_topLeft = tokenData.buttons.primaryButton.inactive.container.value.borderRadiusTopLeft;
export const primaryButton_inactive_container_borderRadius_topRight = tokenData.buttons.primaryButton.inactive.container.value.borderRadiusTopRight;
export const primaryButton_inactive_container_borderRadius_bottomRight = tokenData.buttons.primaryButton.inactive.container.value.borderRadiusBottomRight;
export const primaryButton_inactive_container_borderRadius_bottomLeft = tokenData.buttons.primaryButton.inactive.container.value.borderRadiusBottomLeft;
export const primaryButton_inactive_container_boxShadow =  tokenData.buttons.primaryButton.inactive.container.value.boxShadow;
export const primaryButton_inactive_container_opacity = tokenData.buttons.primaryButton.inactive.container.value.opacity;

//Text
export const primaryButton_inactive_text_fontFamily = tokenData.buttons.primaryButton.inactive.text.value.typography.fontFamily;
export const primaryButton_inactive_text_fontWeight = tokenData.buttons.primaryButton.inactive.text.value.typography.fontWeight;
export const primaryButton_inactive_text_fontSize = tokenData.buttons.primaryButton.inactive.text.value.typography.fontSize;
export const primaryButton_inactive_text_lineHeight = tokenData.buttons.primaryButton.inactive.text.value.typography.lineHeight;
export const primaryButton_inactive_text_letterSpacing = tokenData.buttons.primaryButton.inactive.text.value.typography.letterSpacing;
export const primaryButton_inactive_text_textCase = tokenData.buttons.primaryButton.inactive.text.value.typography.textCase;
export const primaryButton_inactive_text_textDecoration = tokenData.buttons.primaryButton.inactive.text.value.typography.textDecoration;
export const primaryButton_inactive_text_color = tokenData.buttons.primaryButton.inactive.text.value.fill;


//Hover
// export const primaryButton_hover_paddingVertical = tokenData.buttons.primary.hover.container.verticalPadding + "px";
// export const primaryButton_hover_paddingHorizontal = tokenData.buttons.primary.hover.container.horizontalPadding + "px";
// export const primaryButton_hover_fill = tokenData.buttons.primary.hover.container.fill;
// export const primaryButton_hover_borderColor = tokenData.buttons.primary.hover.container.border;
// export const primaryButton_hover_borderRadius_topLeft = tokenData.buttons.primary.hover.container.borderRadiusTopLeft + "px";
// export const primaryButton_hover_borderRadius_topRight = tokenData.buttons.primary.hover.container.borderRadiusTopRight + "px";
// export const primaryButton_hover_borderRadius_bottomRight = tokenData.buttons.primary.hover.container.borderRadiusBottomRight + "px";
// export const primaryButton_hover_borderRadius_bottomLeft = tokenData.buttons.primary.default.container.borderRadiusBottomLeft + "px";
// export const primaryButton_hover_boxShadow =  tokenData.buttons.primary.hover.container.boxShadow;
// export const primaryButton_hover_opacity = tokenData.buttons.primary.hover.container.opacity;

// //Focus
// export const primaryButton_focus_paddingVertical = tokenData.buttons.primary.focus.container.verticalPadding + "px";
// export const primaryButton_focus_paddingHorizontal = tokenData.buttons.primary.focus.container.horizontalPadding + "px";
// export const primaryButton_focus_fill = tokenData.buttons.primary.focus.container.fill;
// export const primaryButton_focus_borderColor = tokenData.buttons.primary.focus.container.border;
// export const primaryButton_focus_borderRadius_topLeft = tokenData.buttons.primary.focus.container.borderRadiusTopLeft + "px";
// export const primaryButton_focus_borderRadius_topRight = tokenData.buttons.primary.focus.container.borderRadiusTopRight + "px";
// export const primaryButton_focus_borderRadius_bottomRight = tokenData.buttons.primary.focus.container.borderRadiusBottomRight + "px";
// export const primaryButton_focus_borderRadius_bottomLeft = tokenData.buttons.primary.focus.container.borderRadiusBottomLeft + "px";
// export const primaryButton_focus_boxShadow =  tokenData.buttons.primary.focus.container.boxShadow;
// export const primaryButton_focus_opacity = tokenData.buttons.primary.focus.container.opacity;

//Active
// export const primaryButton_active_paddingVertical = tokenData.buttons.primary.default.container.verticalPadding + "px";
// export const primaryButton_active_paddingHorizontal = tokenData.buttons.primary.default.container.horizontalPadding + "px";
// export const primaryButton_active_fill = tokenData.buttons.primary.default.container.fill;
// export const primaryButton_active_borderColor = tokenData.buttons.primary.default.container.border;
// export const primaryButton_active_borderRadius_topLeft = tokenData.buttons.primary.default.container.borderRadiusTopLeft + "px";
// export const primaryButton_active_borderRadius_topRight = tokenData.buttons.primary.default.container.borderRadiusTopRight + "px";
// export const primaryButton_active_borderRadius_bottomRight = tokenData.buttons.primary.default.container.borderRadiusBottomRight + "px";
// export const primaryButton_active_borderRadius_bottomLeft = tokenData.buttons.primary.default.container.borderRadiusBottomLeft + "px";
// export const primaryButton_active_boxShadow =  tokenData.buttons.primary.default.container.boxShadow;
// export const primaryButton_active_opacity = tokenData.buttons.primary.default.container.opacity;

//Disabled
// export const primaryButton_disabled_paddingVertical = tokenData.buttons.primary.disabled.container.verticalPadding + "px";
// export const primaryButton_disabled_paddingHorizontal = tokenData.buttons.primary.disabled.container.horizontalPadding + "px";
// export const primaryButton_disabled_fill = tokenData.buttons.primary.disabled.container.fill;
// export const primaryButton_disabled_borderColor = tokenData.buttons.primary.disabled.container.border;
// export const primaryButton_disabled_borderRadius_topLeft = tokenData.buttons.primary.disabled.container.borderRadiusTopLeft + "px";
// export const primaryButton_disabled_borderRadius_topRight = tokenData.buttons.primary.disabled.container.borderRadiusTopRight + "px";
// export const primaryButton_disabled_borderRadius_bottomRight = tokenData.buttons.primary.disabled.container.borderRadiusBottomRight + "px";
// export const primaryButton_disabled_borderRadius_bottomLeft = tokenData.buttons.primary.disabled.container.borderRadiusBottomLeft + "px";
// export const primaryButton_disabled_boxShadow =  tokenData.buttons.primary.disabled.container.boxShadow;
// export const primaryButton_disabled_opacity = tokenData.buttons.primary.disabled.container.opacity;


// Define Styles //
// ---------------//

const Button = styled.button`
  border-style: solid;
  outline: none;
  padding: 
    ${primaryButton_inactive_container_paddingVertical} 
    ${primaryButton_inactive_container_paddingHorizontal};
  background-color: ${primaryButton_inactive_container_fill};
  border-color: ${primaryButton_inactive_container_borderColor};
  border-radius: 
    ${primaryButton_inactive_container_borderRadius_topLeft} 
    ${primaryButton_inactive_container_borderRadius_topRight} 
    ${primaryButton_inactive_container_borderRadius_bottomLeft} 
    ${primaryButton_inactive_container_borderRadius_bottomRight};
  box-shadow: ${primaryButton_inactive_container_boxShadow};
  opacity: ${primaryButton_inactive_container_opacity};

  &:hover {
    padding: 
      ${primaryButton_inactive_container_paddingVertical} 
      ${primaryButton_inactive_container_paddingHorizontal};
    background-color: ${primaryButton_inactive_container_fill};
    border-color: ${primaryButton_inactive_container_borderColor};
    border-radius: 
      ${primaryButton_inactive_container_borderRadius_topLeft} 
      ${primaryButton_inactive_container_borderRadius_topRight} 
      ${primaryButton_inactive_container_borderRadius_bottomLeft} 
      ${primaryButton_inactive_container_borderRadius_bottomRight};
    box-shadow: ${primaryButton_inactive_container_boxShadow};
    opacity: ${primaryButton_inactive_container_opacity};
  }
  &:focus {
    padding: ${primaryButton_inactive_container_paddingVertical} ${primaryButton_inactive_container_paddingHorizontal};
    background-color: ${primaryButton_inactive_container_fill};
    border-color: ${primaryButton_inactive_container_borderColor};
    border-radius: 
      ${primaryButton_inactive_container_borderRadius_topLeft} 
      ${primaryButton_inactive_container_borderRadius_topRight} 
      ${primaryButton_inactive_container_borderRadius_bottomLeft} 
      ${primaryButton_inactive_container_borderRadius_bottomRight};
    box-shadow: ${primaryButton_inactive_container_boxShadow};
    opacity: ${primaryButton_inactive_container_opacity};
  }
  &:disabled {
    padding: 
      ${primaryButton_inactive_container_paddingVertical} 
      ${primaryButton_inactive_container_paddingHorizontal};
    background-color: ${primaryButton_inactive_container_fill};
    border-color: ${primaryButton_inactive_container_borderColor};
    border-radius: 
      ${primaryButton_inactive_container_borderRadius_topLeft} 
      ${primaryButton_inactive_container_borderRadius_topRight} 
      ${primaryButton_inactive_container_borderRadius_bottomLeft} 
      ${primaryButton_inactive_container_borderRadius_bottomRight};
    box-shadow: ${primaryButton_inactive_container_boxShadow};
    opacity: ${primaryButton_inactive_container_opacity};
  }
`;

const ButtonIconLeft = styled(Button)`;
  span{
    margin-right: 16px
  }
`;

const ButtonIconRight = styled(Button)`;
  span{
    margin-left: 16px
  }
`;

const Text = styled.span`
  font-family: ${primaryButton_inactive_text_fontFamily};
  font-weight: ${primaryButton_inactive_text_fontWeight};
  font-size: ${primaryButton_inactive_text_fontSize};
  line-height: ${primaryButton_inactive_text_lineHeight};
  letter-spacing: ${primaryButton_inactive_text_letterSpacing};
  text-transform: ${primaryButton_inactive_text_textCase};
  text-decoration: ${primaryButton_inactive_text_textDecoration};
  color: ${primaryButton_inactive_text_color};

  &:hover {
    font-family: ${primaryButton_inactive_text_fontFamily};
    font-weight: ${primaryButton_inactive_text_fontWeight};
    font-size: ${primaryButton_inactive_text_fontSize};
    line-height: ${primaryButton_inactive_text_lineHeight};
    letter-spacing: ${primaryButton_inactive_text_letterSpacing};
    text-transform: ${primaryButton_inactive_text_textCase};
    text-decoration: ${primaryButton_inactive_text_textDecoration};
    color: ${primaryButton_inactive_text_color};
  }
  &:focus {
    font-family: ${primaryButton_inactive_text_fontFamily};
    font-weight: ${primaryButton_inactive_text_fontWeight};
    font-size: ${primaryButton_inactive_text_fontSize};
    line-height: ${primaryButton_inactive_text_lineHeight};
    letter-spacing: ${primaryButton_inactive_text_letterSpacing};
    text-transform: ${primaryButton_inactive_text_textCase};
    text-decoration: ${primaryButton_inactive_text_textDecoration};
    color: ${primaryButton_inactive_text_color};
  }
  &:disabled {
    font-family: ${primaryButton_inactive_text_fontFamily};
    font-weight: ${primaryButton_inactive_text_fontWeight};
    font-size: ${primaryButton_inactive_text_fontSize};
    line-height: ${primaryButton_inactive_text_lineHeight};
    letter-spacing: ${primaryButton_inactive_text_letterSpacing};
    text-transform: ${primaryButton_inactive_text_textCase};
    text-decoration: ${primaryButton_inactive_text_textDecoration};
    color: ${primaryButton_inactive_text_color};
  }
`;

const Icon = styled.img`
  height: 26px;
  width: 26p;
`;

// Define Component //
// -----------------//
function PrimaryButton({ hasIcon, buttonCopy }) {
  return (
    <>
      {/* if has no icon */}
      {hasIcon === "none" &&
        <Button>
          <Text>{buttonCopy}</Text>
        </Button>
      }
      {/* if has right icons */}
      {hasIcon === "right" &&
        <ButtonIconRight>
          <Icon src="https://place-hold.it/26"></Icon>
          <Text>{buttonCopy}</Text>
        </ButtonIconRight>
      }
      {/* If has left icon*/}
      {hasIcon === 'left' &&
        <ButtonIconLeft>
          <Text>{buttonCopy}</Text>
          <Icon src="https://place-hold.it/26"></Icon>
        </ButtonIconLeft>
      }
    </>
  );
}

export default PrimaryButton;

PrimaryButton.propTypes = {
  hasIcon: PropTypes.string,
  buttonCopy: PropTypes.string
};