import React, { useState } from "react";
import styled from "@emotion/styled";
import Quote from "./Components/Quote";

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Arial, Helvetica, Sans-serif;
  color: #fff;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size 0.8s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {
  //Quotes state
  const [quote, saveQuote] = useState({});

  const fetchApi = async () => {
    const api = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    const quote = await api.json();
    saveQuote(quote[0]);
  };

  return (
    <Contenedor>
      <Quote quote={quote} />
      <Button onClick={fetchApi}>Obtener frase</Button>
    </Contenedor>
  );
}

export default App;
