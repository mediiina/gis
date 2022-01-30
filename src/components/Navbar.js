import React, { useState } from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
} from "../styles/Navbar.style";
import LogoImg from "../assets/favicon.ico";

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/home"> Home</NavbarLink>
            <NavbarLink to="/about"> About</NavbarLink>
            <NavbarLink to="/aqi"> Aqi</NavbarLink>
            <NavbarLink to="/city"> Butmir</NavbarLink>
            <NavbarLink to="/sensor"> Sensor</NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <Logo src={LogoImg}></Logo>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/about"> About</NavbarLinkExtended>
          <NavbarLinkExtended to="/aqi"> Aqi</NavbarLinkExtended>
          <NavbarLinkExtended to="/city"> Butmir</NavbarLinkExtended>
          <NavbarLinkExtended to="/sensor"> Sensor</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;
