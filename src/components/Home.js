import React from "react";
import { Title, NoteBookImage } from "../styles";

const Home = () => {
  return (
    <div>
      <Title>
        <p>NoteBook</p>
      </Title>

      <NoteBookImage
        alt="shop"
        src="https://lh3.googleusercontent.com/proxy/uHfqGC7-lLOxg6oftzGmMlPihY9g76hAOsSeBKo1pDT4qO-8sUAZdGdDmjJTM1FrPthmRVuLG3k6N4oI2mQGoge1OUTbXiA"
      />
    </div>
  );
};

export default Home;
