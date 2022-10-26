import React, { Fragment } from 'react';
import styled from 'styled-components';
import tokenData from '../../../../assets/designTokens/tokensMasterTransformed.json';

// Define Tokens //
// ---------------//
// Default Colors
export const input_default_background = tokenData.BaseStyles.Input.Default.Fill.value;
export const input_default_border = tokenData.BaseStyles.Input.Default.Border.value;

//Default Border Width
export const input_default_borderWidth = tokenData.BaseStyles.Input.Default.BorderWidth.value;
export const input_hover_borderWidth = tokenData.BaseStyles.Input.Hover.BorderWidth.value;
export const input_focus_borderWidth = tokenData.BaseStyles.Input.Focus.BorderWidth.value;
export const input_disabled_borderWidth = tokenData.BaseStyles.Input.Disabled.BorderWidth.value;

// Default Padding
export const input_default_padding = tokenData.BaseStyles.PrimaryButton.Default.Padding.value;

// Default Border Radius
export const input_default_borderRadius = tokenData.BaseStyles.PrimaryButton.Default.BorderRadius.value;

// Default Typography
export const input_default_fontFamily = tokenData.BaseStyles.Input.Default.FieldText.value.fontFamily;
export const input_default_fontWeight= tokenData.BaseStyles.Input.Default.FieldText.value.fontWeight;
export const input_default_lineHeight= tokenData.BaseStyles.Input.Default.FieldText.value.lineHeight;
export const input_default_fontSize = tokenData.BaseStyles.Input.Default.FieldText.value.fontSize;
export const input_default_letterSpacing= tokenData.BaseStyles.Input.Default.FieldText.value.letterSpacing;
export const input_default_paragraphSpacing= tokenData.BaseStyles.Input.Default.FieldText.value.paragraphSpacing;
export const input_default_textCase= tokenData.BaseStyles.Input.Default.FieldText.value.textCase;
export const input_default_textDecoration= tokenData.BaseStyles.Input.Default.FieldText.value.textDecoration;

//Hover Styles

//Focus Styles

//Disabled Styles


// Define Styles //
// ---------------//
const Input = styled.input`
  border-style: solid;
  outline: none;
  background-color: ${input_default_background};
  border-color: ${input_default_border};
  border-width: ${input_default_borderWidth};
  border-radius: ${input_default_borderRadius};
  font-family: ${input_default_fontFamily};
  font-weight: ${input_default_fontWeight};
  line-height: ${input_default_lineHeight};
  font-size: ${input_default_fontSize};
  letter-spacing: ${input_default_letterSpacing};
  paragraph-spacing: ${input_default_paragraphSpacing};
  textt-transform: ${input_default_textCase};
  text-decoration: ${input_default_textDecoration};
  padding: ${input_default_padding};
  &:hover {
    border-width: ${input_hover_borderWidth};
  }
  &:focus {
    border-width: ${input_focus_borderWidth};
  }
  &:disabled {
    border-width: ${input_disabled_borderWidth};
  }
`;

// Define Component //
// -----------------//
function InputField() {
  return (
    <Input type="text" id="fname" name="fname" placeholder="This is an input"></Input>
  );
}

export default InputField;