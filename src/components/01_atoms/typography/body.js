import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tokenData from '../../../assets/designTokens/tokensMasterTransformed.json';

// Define Tokens //
// ---------------//

// Default Paragraph
export const paragraph_fontFamily = tokenData.BaseStyles.Typography.Paragraph.Paragraph.value.fontFamily;
export const paragraph_fontWeight= tokenData.BaseStyles.Typography.Paragraph.Paragraph.value.fontWeight;
export const paragraph_lineHeight= tokenData.BaseStyles.Typography.Paragraph.Paragraph.value.lineHeight;
export const paragraph_fontSize = tokenData.BaseStyles.Typography.Paragraph.Paragraph.value.fontSize;
export const paragraph_letterSpacing= tokenData.BaseStyles.Typography.Paragraph.Paragraph.value.letterSpacing;
export const paragraph_paragraphSpacing= tokenData.BaseStyles.Typography.Paragraph.Paragraph.value.paragraphSpacing;
export const paragraph_textCase= tokenData.BaseStyles.Typography.Paragraph.Paragraph.value.textCase;
export const paragraph_textDecoration= tokenData.BaseStyles.Typography.Paragraph.Paragraph.value.textDecoration;

// Default Bold
export const italic_fontFamily = tokenData.BaseStyles.Typography.Paragraph.Bold.value.fontFamily;
export const italic_fontWeight= tokenData.BaseStyles.Typography.Paragraph.Bold.value.fontWeight;
export const italic_lineHeight= tokenData.BaseStyles.Typography.Paragraph.Bold.value.lineHeight;
export const italic_fontSize = tokenData.BaseStyles.Typography.Paragraph.Bold.value.fontSize;
export const italic_letterSpacing= tokenData.BaseStyles.Typography.Paragraph.Bold.value.letterSpacing;
export const italic_paragraphSpacing= tokenData.BaseStyles.Typography.Paragraph.Bold.value.paragraphSpacing;
export const italic_textCase= tokenData.BaseStyles.Typography.Paragraph.Bold.value.textCase;
export const italic_textDecoration= tokenData.BaseStyles.Typography.Paragraph.Bold.value.textDecoration;

// Default Italic
export const bold_fontFamily = tokenData.BaseStyles.Typography.Paragraph.Italic.value.fontFamily;
export const bold_fontWeight= tokenData.BaseStyles.Typography.Paragraph.Italic.value.fontWeight;
export const bold_lineHeight= tokenData.BaseStyles.Typography.Paragraph.Italic.value.lineHeight;
export const bold_fontSize = tokenData.BaseStyles.Typography.Paragraph.Italic.value.fontSize;
export const bold_letterSpacing= tokenData.BaseStyles.Typography.Paragraph.Italic.value.letterSpacing;
export const bold_paragraphSpacing= tokenData.BaseStyles.Typography.Paragraph.Italic.value.paragraphSpacing;
export const bold_textCase= tokenData.BaseStyles.Typography.Paragraph.Italic.value.textCase;
export const bold_textDecoration= tokenData.BaseStyles.Typography.Paragraph.Italic.value.textDecoration;

// Default Emphasised
export const emphasised_fontFamily = tokenData.BaseStyles.Typography.Paragraph.Emphasised.value.fontFamily;
export const emphasised_fontWeight= tokenData.BaseStyles.Typography.Paragraph.Emphasised.value.fontWeight;
export const emphasised_lineHeight= tokenData.BaseStyles.Typography.Paragraph.Emphasised.value.lineHeight;
export const emphasised_fontSize = tokenData.BaseStyles.Typography.Paragraph.Emphasised.value.fontSize;
export const emphasised_letterSpacing= tokenData.BaseStyles.Typography.Paragraph.Emphasised.value.letterSpacing;
export const emphasised_paragraphSpacing= tokenData.BaseStyles.Typography.Paragraph.Emphasised.value.paragraphSpacing;
export const emphasised_textCase= tokenData.BaseStyles.Typography.Paragraph.Emphasised.value.textCase;
export const emphasised_textDecoration= tokenData.BaseStyles.Typography.Paragraph.Emphasised.value.textDecoration;


// Define Styles //
// ---------------//
const Paragraph = styled.p`
    font-family: ${paragraph_fontFamily};
    font-weight: ${paragraph_fontWeight};
    line-height: ${paragraph_lineHeight};
    font-size: ${paragraph_fontSize};
    letter-spacing: ${paragraph_letterSpacing};
    paragraph-spacing: ${paragraph_paragraphSpacing};
    textt-transform: ${paragraph_textCase};
    text-decoration: ${paragraph_textDecoration};
`;

const Bold = styled.b`
    font-family: ${bold_fontFamily};
    font-weight: ${bold_fontWeight};
    line-height: ${bold_lineHeight};
    font-size: ${bold_fontSize};
    letter-spacing: ${bold_letterSpacing};
    paragraph-spacing: ${bold_paragraphSpacing};
    textt-transform: ${bold_textCase};
    text-decoration: ${bold_textDecoration};
`;

const Italic = styled.i`
    font-family: ${italic_fontFamily};
    font-weight: ${italic_fontWeight};
    line-height: ${italic_lineHeight};
    font-size: ${italic_fontSize};
    letter-spacing: ${italic_letterSpacing};
    paragraph-spacing: ${italic_paragraphSpacing};
    textt-transform: ${italic_textCase};
    text-decoration: ${italic_textDecoration};
`;

const Emphasised = styled.em`
    font-family: ${emphasised_fontFamily};
    font-weight: ${emphasised_fontWeight};
    line-height: ${emphasised_lineHeight};
    font-size: ${emphasised_fontSize};
    letter-spacing: ${emphasised_letterSpacing};
    paragraph-spacing: ${emphasised_paragraphSpacing};
    textt-transform: ${emphasised_textCase};
    text-decoration: ${emphasised_textDecoration};
`;


// Define Component //
// -----------------//
function Body( { children, BodyType } ) {
  return (
    <>
        {/* if is Paragraph */}
        {BodyType === 'Paragraph' &&
            <Paragraph>{children}</Paragraph>
        }
        {/* if is Bold */}
        {BodyType === 'Bold' &&
            <Bold>{children}</Bold>
        }
        {/* if is Italic */}
        {BodyType === 'Italic' &&
            <Italic>{children}</Italic>
        }
        {/* if is Emphasised */}
        {BodyType === 'Emphasised' &&
            <Emphasised>{children}</Emphasised>
        }
    </>
  );
}

export default Body;

Body.propTypes = {
    children: PropTypes.string,
    BodyType: PropTypes.string
};