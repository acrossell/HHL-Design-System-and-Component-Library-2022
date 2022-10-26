import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tokenData from '../../../assets/designTokens/tokensMasterTransformed.json';

// Define Tokens //
// ---------------//

// Default Typography
export const h1_fontFamily = tokenData.BaseStyles.Typography.Headers.h1.value.fontFamily;
export const h1_fontWeight= tokenData.BaseStyles.Typography.Headers.h1.value.fontWeight;
export const h1_lineHeight= tokenData.BaseStyles.Typography.Headers.h1.value.lineHeight;
export const h1_fontSize = tokenData.BaseStyles.Typography.Headers.h1.value.fontSize;
export const h1_letterSpacing= tokenData.BaseStyles.Typography.Headers.h1.value.letterSpacing;
export const h1_paragraphSpacing= tokenData.BaseStyles.Typography.Headers.h1.value.paragraphSpacing;
export const h1_textCase= tokenData.BaseStyles.Typography.Headers.h1.value.textCase;
export const h1_textDecoration= tokenData.BaseStyles.Typography.Headers.h1.value.textDecoration;

// Default Typography
export const h2_fontFamily = tokenData.BaseStyles.Typography.Headers.h2.value.fontFamily;
export const h2_fontWeight= tokenData.BaseStyles.Typography.Headers.h2.value.fontWeight;
export const h2_lineHeight= tokenData.BaseStyles.Typography.Headers.h2.value.lineHeight;
export const h2_fontSize = tokenData.BaseStyles.Typography.Headers.h2.value.fontSize;
export const h2_letterSpacing= tokenData.BaseStyles.Typography.Headers.h2.value.letterSpacing;
export const h2_paragraphSpacing= tokenData.BaseStyles.Typography.Headers.h2.value.paragraphSpacing;
export const h2_textCase= tokenData.BaseStyles.Typography.Headers.h2.value.textCase;
export const h2_textDecoration= tokenData.BaseStyles.Typography.Headers.h2.value.textDecoration;

// Default Typography
export const h3_fontFamily = tokenData.BaseStyles.Typography.Headers.h3.value.fontFamily;
export const h3_fontWeight= tokenData.BaseStyles.Typography.Headers.h3.value.fontWeight;
export const h3_lineHeight= tokenData.BaseStyles.Typography.Headers.h3.value.lineHeight;
export const h3_fontSize = tokenData.BaseStyles.Typography.Headers.h3.value.fontSize;
export const h3_letterSpacing= tokenData.BaseStyles.Typography.Headers.h3.value.letterSpacing;
export const h3_paragraphSpacing= tokenData.BaseStyles.Typography.Headers.h3.value.paragraphSpacing;
export const h3_textCase= tokenData.BaseStyles.Typography.Headers.h3.value.textCase;
export const h3_textDecoration= tokenData.BaseStyles.Typography.Headers.h3.value.textDecoration;

// Default Typography
export const h4_fontFamily = tokenData.BaseStyles.Typography.Headers.h4.value.fontFamily;
export const h4_fontWeight= tokenData.BaseStyles.Typography.Headers.h4.value.fontWeight;
export const h4_lineHeight= tokenData.BaseStyles.Typography.Headers.h4.value.lineHeight;
export const h4_fontSize = tokenData.BaseStyles.Typography.Headers.h4.value.fontSize;
export const h4_letterSpacing= tokenData.BaseStyles.Typography.Headers.h4.value.letterSpacing;
export const h4_paragraphSpacing= tokenData.BaseStyles.Typography.Headers.h4.value.paragraphSpacing;
export const h4_textCase= tokenData.BaseStyles.Typography.Headers.h4.value.textCase;
export const h4_textDecoration= tokenData.BaseStyles.Typography.Headers.h4.value.textDecoration;

// Default Typography
export const h5_fontFamily = tokenData.BaseStyles.Typography.Headers.h5.value.fontFamily;
export const h5_fontWeight= tokenData.BaseStyles.Typography.Headers.h5.value.fontWeight;
export const h5_lineHeight= tokenData.BaseStyles.Typography.Headers.h5.value.lineHeight;
export const h5_fontSize = tokenData.BaseStyles.Typography.Headers.h5.value.fontSize;
export const h5_letterSpacing= tokenData.BaseStyles.Typography.Headers.h5.value.letterSpacing;
export const h5_paragraphSpacing= tokenData.BaseStyles.Typography.Headers.h5.value.paragraphSpacing;
export const h5_textCase= tokenData.BaseStyles.Typography.Headers.h5.value.textCase;
export const h5_textDecoration= tokenData.BaseStyles.Typography.Headers.h5.value.textDecoration;

// Define Styles //
// ---------------//
const H1 = styled.h1`
    font-family: ${h1_fontFamily};
    font-weight: ${h1_fontWeight};
    line-height: ${h1_lineHeight};
    font-size: ${h1_fontSize};
    letter-spacing: ${h1_letterSpacing};
    paragraph-spacing: ${h1_paragraphSpacing};
    textt-transform: ${h1_textCase};
    text-decoration: ${h1_textDecoration};
`;

const H2 = styled.h2`
    font-family: ${h2_fontFamily};
    font-weight: ${h2_fontWeight};
    line-height: ${h2_lineHeight};
    font-size: ${h2_fontSize};
    letter-spacing: ${h2_letterSpacing};
    paragraph-spacing: ${h2_paragraphSpacing};
    textt-transform: ${h2_textCase};
    text-decoration: ${h2_textDecoration};
`;

const H3 = styled.h3`
    font-family: ${h3_fontFamily};
    font-weight: ${h3_fontWeight};
    line-height: ${h3_lineHeight};
    font-size: ${h3_fontSize};
    letter-spacing: ${h3_letterSpacing};
    paragraph-spacing: ${h3_paragraphSpacing};
    textt-transform: ${h3_textCase};
    text-decoration: ${h3_textDecoration};
`;

const H4 = styled.h4`
    font-family: ${h4_fontFamily};
    font-weight: ${h4_fontWeight};
    line-height: ${h4_lineHeight};
    font-size: ${h4_fontSize};
    letter-spacing: ${h4_letterSpacing};
    paragraph-spacing: ${h4_paragraphSpacing};
    textt-transform: ${h4_textCase};
    text-decoration: ${h4_textDecoration};
`;

const H5 = styled.h5`
    font-family: ${h5_fontFamily};
    font-weight: ${h5_fontWeight};
    line-height: ${h5_lineHeight};
    font-size: ${h5_fontSize};
    letter-spacing: ${h5_letterSpacing};
    paragraph-spacing: ${h5_paragraphSpacing};
    textt-transform: ${h5_textCase};
    text-decoration: ${h5_textDecoration};
`;


// Define Component //
// -----------------//
function Header( { children, HeaderType } ) {
  return (
    <>
        {/* if is h1 */}
        {HeaderType === 'h1' &&
            <H1>{children}</H1>
        }
        {/* if is h2 */}
        {HeaderType === 'h2' &&
            <H2>{children}</H2>
        }
        {/* if is h3 */}
        {HeaderType === 'h3' &&
            <H3>{children}</H3>
        }
        {/* if is h2 */}
        {HeaderType === 'h4' &&
            <H4>{children}</H4>
        }
        {/* if is h2 */}
        {HeaderType === 'h5' &&
            <H5>{children}</H5>
        }
    </>
  );
}

export default Header;

Header.propTypes = {
    children: PropTypes.string,
    HeaderType: PropTypes.string
};