import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconButton from "../../01_atoms/buttons/iconButton/iconButton.js"

// Import style token json data
//----------------//
import tokenData from '../../../assets/designTokens/tokensMasterTransformed.json';
console.log(tokenData);

// Define Tokens //
// ---------------//

// Container
export const PcsDashboard_container_paddingVertical = tokenData.pcsDashboardHeader.container.value.verticalPadding;
export const PcsDashboard_container_paddingHorizontal = tokenData.pcsDashboardHeader.container.value.horizontalPadding;
export const PcsDashboard_container_fill = tokenData.pcsDashboardHeader.container.value.fill;
export const PcsDashboard_container_borderColor = tokenData.pcsDashboardHeader.container.value.border;
export const PcsDashboard_container_borderRadius_topLeft = tokenData.pcsDashboardHeader.container.value.borderRadius;
export const PcsDashboard_container_borderRadius_topRight = tokenData.pcsDashboardHeader.container.value.borderRadius;
export const PcsDashboard_container_borderRadius_bottomRight = tokenData.pcsDashboardHeader.container.value.borderRadius;
export const PcsDashboard_container_borderRadius_bottomLeft = tokenData.pcsDashboardHeader.container.value.borderRadius;
export const PcsDashboard_container_boxShadow =  `${tokenData.pcsDashboardHeader.container.value.boxShadow.y} ${tokenData.pcsDashboardHeader.container.value.boxShadow.x} ${tokenData.pcsDashboardHeader.container.value.boxShadow.blur} ${tokenData.pcsDashboardHeader.container.value.boxShadow.spread} ${tokenData.pcsDashboardHeader.container.value.boxShadow.color}`;
export const PcsDashboard_container_opacity = tokenData.pcsDashboardHeader.container.value.opacity;

// Title
export const PcsDashboard_title_fontFamily = tokenData.pcsDashboardHeader.title.value.typography.fontFamily;
export const PcsDashboard_title_fontWeight = tokenData.pcsDashboardHeader.title.value.typography.fontWeight;
export const PcsDashboard_title_fontSize = tokenData.pcsDashboardHeader.title.value.typography.fontSize;
export const PcsDashboard_title_lineHeight = tokenData.pcsDashboardHeader.title.value.typography.lineHeight;
export const PcsDashboard_title_letterSpacing = tokenData.pcsDashboardHeader.title.value.typography.letterSpacing;
export const PcsDashboard_title_textCase = tokenData.pcsDashboardHeader.title.value.typography.textCase;
export const PcsDashboard_title_textDecoration = tokenData.pcsDashboardHeader.title.value.typography.textDecoration;
export const PcsDashboard_title_color = tokenData.pcsDashboardHeader.title.value.fill;


// Subline
export const PcsDashboard_subline_fontFamily = tokenData.pcsDashboardHeader.subline.value.typography.fontFamily;
export const PcsDashboard_subline_fontWeight = tokenData.pcsDashboardHeader.subline.value.typography.fontWeight;
export const PcsDashboard_subline_fontSize = tokenData.pcsDashboardHeader.subline.value.typography.fontSize;
export const PcsDashboard_subline_lineHeight = tokenData.pcsDashboardHeader.subline.value.typography.lineHeight;
export const PcsDashboard_subline_letterSpacing = tokenData.pcsDashboardHeader.subline.value.typography.letterSpacing;
export const PcsDashboard_subline_textCase = tokenData.pcsDashboardHeader.subline.value.typography.textCase;
export const PcsDashboard_subline_textDecoration = tokenData.pcsDashboardHeader.subline.value.typography.textDecoration;
export const PcsDashboard_subline_color = tokenData.pcsDashboardHeader.subline.value.fill;

// Define Styles //
// ---------------//

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 
      ${PcsDashboard_container_paddingVertical} 
      ${PcsDashboard_container_paddingHorizontal};
  background-color: 
      ${PcsDashboard_container_fill};
  border-color: 
      ${PcsDashboard_container_borderColor};
  border-radius: 
      ${PcsDashboard_container_borderRadius_topLeft} 
      ${PcsDashboard_container_borderRadius_topRight} 
      ${PcsDashboard_container_borderRadius_bottomLeft} 
      ${PcsDashboard_container_borderRadius_bottomRight};
  box-shadow: 
      ${PcsDashboard_container_boxShadow};
  opacity: 
      ${PcsDashboard_container_opacity};
`;

const Title = styled.h2`
  margin: 0;
  font-family: ${PcsDashboard_title_fontFamily};
  font-weight: ${PcsDashboard_title_fontWeight};
  font-size: ${PcsDashboard_title_fontSize};
  line-height: ${PcsDashboard_title_lineHeight};
  letter-spacing: ${PcsDashboard_title_letterSpacing};
  text-transform: ${PcsDashboard_title_textCase};
  text-decoration: ${PcsDashboard_title_textDecoration};
  color: ${PcsDashboard_title_color};
`;

const Subline = styled.h3`
  margin: 0;
  font-family: ${PcsDashboard_subline_fontFamily};
  font-weight: ${PcsDashboard_subline_fontWeight};
  font-size: ${PcsDashboard_subline_fontSize};
  line-height: ${PcsDashboard_subline_lineHeight};
  letter-spacing: ${PcsDashboard_subline_letterSpacing};
  text-transform: ${PcsDashboard_subline_textCase};
  text-decoration: ${PcsDashboard_subline_textDecoration};
  color: ${PcsDashboard_subline_color};
`;

const TabsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 0 16px;
`;

// Define Component //
// -----------------//
function DashboardHeader() {
  return (
      <Container className="dashboardHeader">
          <div className="copyWrapper">
            <Title>Good afternoon, Alexander</Title>
            <Subline>Welcome to your Aviva Pension Consolidation Dashboard</Subline>
          </div>
          <TabsWrapper className="tabsWrapper">
            <IconButton></IconButton>
            <IconButton></IconButton>
            <IconButton></IconButton>
            <IconButton></IconButton>
          </TabsWrapper>
      </Container>  
    
  );
}

export default DashboardHeader;

DashboardHeader.propTypes = {
  hasIcon: PropTypes.string,
  buttonCopy: PropTypes.string
};