import React, { useState , useEffect } from 'react';
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/CharacterGrid";
import axios from "axios";
import './App.css';
import Search from './components/ui/Search';

const App =  () =>  {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

useEffect(()=> {
  const fetchItems = async()=> {
    const result = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`)
    setItems(result.data);
    setIsLoading(false);
    console.log(result)
  }
  fetchItems();
  
}, [query])




  return (
    <div className="container">
      <Header/>
      <Search getQuery={(q)=> setQuery(q)}/>
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
