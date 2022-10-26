import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import '../../../../src/assets/css/normalize.css';
import Logo from "../../../assets/images/AvivaLogo.svg";
import tokenData from '../../../assets/designTokens/tokensMasterTransformed.json';

// Define Tokens //
// ---------------//

//Container
export const globalNav_container_paddingVertical = tokenData.globalNavigation.container.value.verticalPadding;
export const globalNav_container_paddingHorizontal = tokenData.globalNavigation.container.value.horizontalPadding;
export const globalNav_container_fill = tokenData.globalNavigation.container.value.fill;
// export const globalNav_container_borderColor = tokenData.globalNavigation.container.value;
// export const globalNav_container_borderRadius_topLeft = tokenData.globalNavigation.container.value;
// export const globalNav_container_borderRadius_topRight = tokenData.globalNavigation.container.value;
// export const globalNav_container_borderRadius_bottomRight = tokenData.globalNavigation.container.value;
// export const globalNav_container_borderRadius_bottomLeft = tokenData.globalNavigation.container.value;
// export const globalNav_container_boxShadow =  tokenData.globalNavigation.container.value;
// export const globalNav_container_opacity = tokenData.globalNavigation.container.value;

//Links
export const globalNav_navLink_fontFamily = tokenData.globalNavigation.navLink.value.typography.fontFamily;
export const globalNav_navLink_fontWeight = tokenData.globalNavigation.navLink.value.typography.fontWeight;
export const globalNav_navLink_fontSize = tokenData.globalNavigation.navLink.value.typography.fontSize;
export const globalNav_navLink_lineHeight = tokenData.globalNavigation.navLink.value.typography.lineHeight;
export const globalNav_navLink_letterSpacing = tokenData.globalNavigation.navLink.value.typography.letterSpacing;
export const globalNav_navLink_textCase = tokenData.globalNavigation.navLink.value.typography.textCase;
export const globalNav_navLink_textDecoration = tokenData.globalNavigation.navLink.value.typography.textDecoration;
export const globalNav_navLink_color = tokenData.globalNavigation.navLink.value.fill;


// Define Styles //
// ---------------//

const Container = styled.div`
    padding: 
        ${globalNav_container_paddingVertical} 
        ${globalNav_container_paddingHorizontal};
    background-color: ${globalNav_container_fill};
    display: flex;
    justify-content: space-between;
    alignItems: center;
`
const LogoWrapper = styled.div`
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
`;

const Navlist = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
`;

const NavlistItem = styled.li`
    padding-right: 16px;
    list-style: none;
`;

const Link = styled.a`
    text-decoration: none;
    font-family: ${globalNav_navLink_fontFamily};
    font-weight: ${globalNav_navLink_fontWeight};
    font-size: ${globalNav_navLink_fontSize};
    line-height: ${globalNav_navLink_lineHeight};
    letter-spacing: ${globalNav_navLink_letterSpacing};
    text-transform: ${globalNav_navLink_textCase};
    text-decoration: ${globalNav_navLink_textDecoration};
    color: ${globalNav_navLink_color};
`;


const ArticleImage = styled.img`

`;

// Define Component //
// -----------------//
function GlobalNav() {
  return (
      <Container className="globalNavigation">
          <LogoWrapper className="logoWrapper">
                <img src={Logo}/>
          </LogoWrapper>
          <Nav>
              <Navlist className="navList">
                  <NavlistItem><Link href="navLink">Nav Link</Link></NavlistItem>
                  <NavlistItem><Link href="navLink">Nav Link</Link></NavlistItem>
                  <NavlistItem><Link href="navLink">Nav Link</Link></NavlistItem>
                  <NavlistItem><Link href="navLink">Nav Link</Link></NavlistItem>
              </Navlist>
          </Nav>
      </Container>  
    
  );
}

export default GlobalNav;

GlobalNav.propTypes = {
  hasIcon: PropTypes.string,
  buttonCopy: PropTypes.string
};