import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

// Styled-components based on Header.styles.md

const HeaderContainer = styled.header`
  background-color: rgb(255, 255, 255);
  overflow: visible;
  justify-content: flex-start;
  display: flex;
  align-items: center;
  gap: 0px;
  border-radius: 0px;
  opacity: 1;
  align-self: flex-start;
  min-width: 1440px;
  max-width: 1440px;
  order: 1;
  min-height: 40px;
  max-height: 40px;
  height: 40px;
  flex-grow: 1;
  width: 1440px;
  margin: 0px;
  z-index: 3;
`;

const Logo = styled.div`
  white-space: pre-wrap;
  overflow: visible;
  font-family: var(--font_default);
  font-size: 18px;
  font-weight: bold;
  color: #093062;
  text-align: center;
  line-height: 1.4;
  border-radius: 0px;
  opacity: 1;
  cursor: pointer;
  align-self: flex-start;
  min-width: 80px;
  order: 1;
  min-height: 40px;
  width: max-content;
  flex-grow: 0;
  height: max-content;
  margin: 0px 0px 0px 16px;
  z-index: 2;
  display: flex;
  align-items: center;
`;

const Nav = styled.nav`
  align-self: flex-start;
  min-width: 450px;
  max-width: 450px;
  order: 4;
  min-height: 40px;
  max-height: 40px;
  width: 450px;
  flex-grow: 1;
  height: 40px;
  margin: 0px 0px 0px 192px;
  z-index: 5;
  overflow: visible;
  justify-content: flex-start;
  border-radius: 0px;
  opacity: 1;
  display: flex;
  align-items: center;
`;

const LinkContainer = styled.div`
  overflow: visible;
  justify-content: flex-start;
  border-radius: 0px;
  padding: 0px 0px 0px 10px;
  opacity: 1;
  cursor: pointer;
  align-self: flex-start;
  min-width: 150px;
  max-width: 150px;
  order: 2;
  min-height: 40px;
  width: 150px;
  flex-grow: 1;
  height: max-content;
  margin: 0px;
  z-index: 4;
  background: none transparent;
  display: flex;
  align-items: center;
`;

const IconContainer = styled.div`
  align-self: center;
  min-width: 20px;
  max-width: 20px;
  order: 2;
  min-height: 20px;
  max-height: 20px;
  width: 20px;
  flex-grow: 1;
  height: 20px;
  margin: 0px;
  z-index: 4;
  padding: 0px;
  text-align: center;
  background: none;
  border: none;
  cursor: inherit;
  color: var(--color_primary_default);
  border-radius: 4px;
`;

const NavLink = styled.a`
  white-space: pre-wrap;
  overflow: visible;
  font-family: var(--font_default);
  font-size: 14px;
  font-weight: bold;
  color: var(--color_text_default);
  line-height: 1.4;
  padding: 0px 0px 0px 4px;
  border-radius: 0px;
  opacity: 1;
  min-width: 0px;
  order: 3;
  width: max-content;
  flex-grow: 0;
  height: max-content;
  margin: 0px;
  z-index: 2;
  text-decoration: none;
  cursor: pointer;
`;

// Navigation links data
const navLinks = [
  { href: '/anken', label: '案件一覧', icon: faStar },
  { href: '/personnel', label: '要員一覧', icon: faStar },
  { href: '/favorites', label: 'お気に入り一覧', icon: faStar },
];

// Header component
const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Saiteki</Logo>
      <Nav>
        {navLinks.map((link) => (
          <LinkContainer key={link.href}>
            <IconContainer>
              <FontAwesomeIcon icon={link.icon} />
            </IconContainer>
            <NavLink href={link.href}>{link.label}</NavLink>
          </LinkContainer>
        ))}
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
