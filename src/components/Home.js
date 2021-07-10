import React from "react";
import { Title, NoteBookImage } from "../styles";
import NavLogo from "../imgs/notelogo.png";
const Home = () => {
  return (
    <div>
      <Title>
        <p>NoteBook</p>
      </Title>

      <NoteBookImage alt="notebook" src={NavLogo} />
    </div>
  );
};

export default Home;
