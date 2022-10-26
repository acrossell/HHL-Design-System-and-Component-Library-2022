import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import tokenData from '../../../../assets/designTokens/tokensMasterTransformed.json';

// Define Tokens //
// ---------------//

// Default Colors
export const primaryButton_default_background = tokenData.BaseStyles.PrimaryButton.Default.Background.value;
export const primaryButton_default_border = tokenData.BaseStyles.PrimaryButton.Default.Border.value;
export const primaryButton_default_fontColor = tokenData.BaseStyles.PrimaryButton.Default.Text.value.fontFamily;

// Default Padding
export const primaryButton_default_padding = tokenData.BaseStyles.PrimaryButton.Default.Padding.value;

// Default Border Width
export const primaryButton_default_borderWidth = tokenData.BaseStyles.PrimaryButton.Default.BorderWidth.value;

// Default Border Radius
export const primaryButton_default_borderRadius = tokenData.BaseStyles.PrimaryButton.Default.BorderRadius.value;

// Default Box Shadow
export const primaryButton_default_boxShadow = tokenData.BaseStyles.PrimaryButton.Default.BoxShadow.value;

// Default Typography
export const primaryButton_default_fontFamily = tokenData.BaseStyles.PrimaryButton.Default.Text.value.fontFamily;
export const primaryButton_default_fontWeight= tokenData.BaseStyles.PrimaryButton.Default.Text.value.fontWeight;
export const primaryButton_default_lineHeight= tokenData.BaseStyles.PrimaryButton.Default.Text.value.lineHeight;
export const primaryButton_default_fontSize = tokenData.BaseStyles.PrimaryButton.Default.Text.value.fontSize;
export const primaryButton_default_letterSpacing= tokenData.BaseStyles.PrimaryButton.Default.Text.value.letterSpacing;
export const primaryButton_default_paragraphSpacing= tokenData.BaseStyles.PrimaryButton.Default.Text.value.paragraphSpacing;
export const primaryButton_default_textCase= tokenData.BaseStyles.PrimaryButton.Default.Text.value.textCase;
export const primaryButton_default_textDecoration= tokenData.BaseStyles.PrimaryButton.Default.Text.value.textDecoration;

// Active State Colors
export const primaryButton_active_background = tokenData.BaseStyles.PrimaryButton.Default.Background.value;
export const primaryButton_active_border = tokenData.BaseStyles.PrimaryButton.Default.Border.value;

// Hover State Colors
export const primaryButton_hover_background = tokenData.BaseStyles.PrimaryButton.Hover.Background.value;
export const primaryButton_hover_border = tokenData.BaseStyles.PrimaryButton.Hover.Border.value;

// Focus State Colors
export const primaryButton_focused_background = tokenData.BaseStyles.PrimaryButton.Focused.Background.value;
export const primaryButton_focused_border = tokenData.BaseStyles.PrimaryButton.Focused.Border.value;

// Disabled State Colors
export const primaryButton_disabled_background = tokenData.BaseStyles.PrimaryButton.Disabled.Background.value;
export const primaryButton_disabled_border = tokenData.BaseStyles.PrimaryButton.Disabled.Border.value;

// Define Styles //
// ---------------//
const Button = styled.button`
  border-style: solid;
  outline: none;
  background: none;
  border: none;
  border-color: none;
  border-radius: none;
  border-width: none;
  box-shadow: none;
  display: flex;
  align-items: center;
  padding: ${primaryButton_default_padding};
  &:hover {
    background-color: none;
    border-color: none;
  }
  &:focus {
    background-color: none;
    border-color: none;
  }
  &:active {
    background-color: none;
    border-color: none;
  }
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
        <Icon src={iconSrc}></Icon>
      </Button>
    </>
  );
}

export default IconButton;

IconButton.propTypes = {
  iconSrc: PropTypes.string
};