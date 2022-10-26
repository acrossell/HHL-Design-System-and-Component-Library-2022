import React, { Fragment } from 'react';
import styled from 'styled-components';
import tokenData from '../../../../assets/designTokens/tokensMasterTransformed.json';

// Define Tokens //
// ---------------//

// Default Typography
export const label_default_fontFamily = tokenData.BaseStyles.Label.Default.Typography.value.fontFamily;
export const label_default_fontWeight= tokenData.BaseStyles.Label.Default.Typography.value.fontWeight;
export const label_default_lineHeight= tokenData.BaseStyles.Label.Default.Typography.value.lineHeight;
export const label_default_fontSize = tokenData.BaseStyles.Label.Default.Typography.value.fontSize;
export const label_default_letterSpacing= tokenData.BaseStyles.Label.Default.Typography.value.letterSpacing;
export const label_default_paragraphSpacing= tokenData.BaseStyles.Label.Default.Typography.value.paragraphSpacing;
export const label_default_textCase= tokenData.BaseStyles.Label.Default.Typography.value.textCase;
export const label_default_textDecoration= tokenData.BaseStyles.Label.Default.Typography.value.textDecoration;

// Define Styles //
// ---------------//
const FieldLabel = styled.label`
    font-family: ${label_default_fontFamily};
    font-weight: ${label_default_fontWeight};
    line-height: ${label_default_lineHeight};
    font-size: ${label_default_fontSize};
    letter-spacing: ${label_default_letterSpacing};
    paragraph-spacing: ${label_default_paragraphSpacing};
    textt-transform: ${label_default_textCase};
    text-decoration: ${label_default_textDecoration};
`;

// Define Component //
// -----------------//
function Label() {
  return (
    <>
        <FieldLabel htmlFor="fname">Field Label</FieldLabel>
    </>
  );
}

export default Label;