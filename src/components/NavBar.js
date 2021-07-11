import React from "react";
//style
import { NavLinkStyled, Logo, LogoImage, NavStyled } from "../styles";

//logo
import NavLogo from "../imgs/notelogo.png";

function NavBar(props) {
  return (
    <NavStyled className="navbar navbar-expand-md">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Logo to="/" className="navbar-brand">
            <LogoImage src={NavLogo} width="10" />
          </Logo>
          <ul className="navbar-nav ml-0">
            <NavLinkStyled to="/notes" className="nav-item">
              Notes
            </NavLinkStyled>
            <NavLinkStyled to="/notebooks" className="nav-item">
              NoteBooks
            </NavLinkStyled>
          </ul>
        </div>
      </div>
    </NavStyled>
  );
}

export default NavBar;
