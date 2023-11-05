import React from "react";
import styled from "styled-components";
import MercadonaLogo from "../../assets/logo-mercadona.png"

// Styles pour le composant de header
const HeaderContainer = styled.header`
  height: 100px;
  padding-left: 40px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #B5B5B5;
`;

const LogoImage = styled.img`
  width: 80px;
  height: 80px;
`;

const SiteName = styled.h1`
  font-size: 24px;
  color: #239C6B;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <LogoImage src={MercadonaLogo} />
      <SiteName>
        Fake site web <br /> Mercadona
      </SiteName>
    </HeaderContainer>
  );
}