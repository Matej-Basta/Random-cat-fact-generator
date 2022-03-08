import logo from './logo.svg';
import './App.css';
import RandomCat from './components/RandomCat';
import React, {useEffect, useState} from "react";

function App() {

  const [fact, setFact] = useState("");

  const url = "https://cat-fact.herokuapp.com/facts/random";

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    data && setFact(data.text);
  }

  return (
    <RandomCat fact={fact}/>
  );
}

export default App;
