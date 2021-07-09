import styled, { createGlobalStyle } from "styled-components";
// import { Link, NavLink } from "react-router-dom";
import { AiFillPlusCircle } from "react-icons/ai";

export const GlobalStyle = createGlobalStyle`
body {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.mainColor};
}
P {
    font-style: italic;
}
`;

// export const NavStyled = styled.nav`
//   background-color: ${(props) => props.theme.backgroundColor};
// `;

export const AiFillPlusCircleStyled = styled(AiFillPlusCircle)`
  color: ${(props) => props.theme.mainColor};
  margin-left: 70%;
`;

// export const Logo = styled(Link)`
//   padding: 10em;

//   img {
//     width: 30vh;
//     height: 100%;
//     display: block;
//     margin-left: auto;
//     margin-right: auto;
//   }
// `;

// export const NavLinkStyled = styled(NavLink)`
//   box-sizing: content-box;
//   display: block;
//   align-text: center;
//   margin: 10px;
//   font-size: 2em;

//   &.active {
//     color: ${(props) => props.theme.red};
//   }
// `;

export const ShopItemImage = styled.img`
  widh: 20em;
`;

export const Title = styled.h1`
  text-align: center;
  p {
    background-color: #282c34;
    min-height: 10vh;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 6vmin);
    color: white;
  }
`;

export const Description = styled.h3`
  text-align: center;
  font-size: 40px;
`;

export const NoteBookImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

export const LogoImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
`;

export const ListWrapper = styled.div`
  box-sizing: content-box;
  width: 100%;
  padding: 5px;
  display: grid;
  justify-content: space-around;
  grid-template-columns: 10% 10% 10%; /*Make the grid smaller than the container*/
  grid-gap: 10em;
  justify-content: center;
`;

export const NoteWrapper = styled.div`
  margin: 4vw;
  box-sizing: content-box;
  width: 100%;
  border: 2px solid red;
  border-radius: 20px;

  img {
    width: 250px;
    height: 350px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  p {
    text-align: center;
    font-size: 2em;
  }
  p:last-child {
    text-align: center;
    color: red;
    font-size: 1em;
  }
  Button {
    display: block;
    margin-left: auto;
    margin-right: auto;
    button-size: 10%;
  }
`;
export const ThemeButton = styled.button`
  font-size: 2em;
  margin-left: 40vw;
  margin-right: 50px;
  padding: 0.25em 3em;
  border-radius: 1px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  display: block;
  margin: 1rem auto;
  width: 40%;
  align-self: center;
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  img {
    width: 40%;
    float: left;
    margin-right: 20px;
  }

  p {
    vertical-align: middle;
    font-size: 30px;
  }
`;
export const DeletButtonStyled = styled.button`
  color: ${(props) => props.theme.red};
`;

export const CreateButtonStyled = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;

export const UpdateButtonStyled = styled.button`
  background-color: blue;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;
