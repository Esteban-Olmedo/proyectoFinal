
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #FF5A5F;
  color: black;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooterTitle = styled.h2`
  font-size: 24px;
`;

const FooterLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
`;

const FooterLink = styled.li`
  a {
    text-decoration: none;
    color: black;
  }
`;

const FooterIcons = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
`;

const FooterIcon = styled.li`
  img {
    width: 30px;
    height: 30px;
  }
`;

const Copyright = styled.div`
  p {
    font-size: 14px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTitle>FUNNY SOCKS</FooterTitle>
      <div>
        <FooterLinks>
          <FooterLink>
            <Link to="/twitter">Twitter</Link>
          </FooterLink>
          <FooterLink>
            <Link to="/instagram">Instagram</Link>
          </FooterLink>
          <FooterLink>
            <Link to="/facebook">Facebook</Link>
          </FooterLink>
        </FooterLinks>
        {/* <FooterIcons>
          <FooterIcon>
            <img src="img/twitter.png" alt="twitter" />
          </FooterIcon>
          <FooterIcon>
            <img src="img/ig.png" alt="ig" />
          </FooterIcon>
          <FooterIcon>
            <img src="img/fb.png" alt="fb" />
          </FooterIcon>
        </FooterIcons> */}
      </div>
      <Copyright>
        <p>Copyright 2023 &copy;</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
