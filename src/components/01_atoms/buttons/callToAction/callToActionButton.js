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
  background-color: ${primaryButton_default_background};
  border-color: ${primaryButton_default_border};
  border-radius: ${primaryButton_default_borderRadius};
  border-width: ${primaryButton_default_borderWidth};
  box-shadow: ${primaryButton_default_boxShadow};
  display: flex;
  align-items: center;
  padding: ${primaryButton_default_padding};
  &:hover {
    background-color: ${primaryButton_hover_background};
    border-color: ${primaryButton_hover_border};
  }
  &:focus {
    background-color: ${primaryButton_focused_background};
    border-color: ${primaryButton_focused_border};
  }
  &:active {
    background-color: ${primaryButton_disabled_background};
    border-color: ${primaryButton_disabled_border};
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
  font-family: ${primaryButton_default_fontFamily};
  font-weight: ${primaryButton_default_fontWeight};
  line-height: ${primaryButton_default_lineHeight};
  font-size: ${primaryButton_default_fontSize};
  letter-spacing: ${primaryButton_default_letterSpacing};
  paragraph-spacing: ${primaryButton_default_paragraphSpacing};
  textt-transform: ${primaryButton_default_textCase};
  text-decoration: ${primaryButton_default_textDecoration};
`;

const Icon = styled.img`
  height: 26px;
  width: 26p;
`;

// Define Component //
// -----------------//
function CallToActionButton({ hasIcon, buttonCopy }) {
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

export default CallToActionButton;

CallToActionButton.propTypes = {
  hasIcon: PropTypes.string,
  buttonCopy: PropTypes.string
};