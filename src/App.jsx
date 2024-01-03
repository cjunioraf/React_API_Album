import axios from 'axios'
import FotoAmpliada from './components/FotoAmpliada'
import FotoList from './components/Fotolist'
import Searchbar from './components/Searchbar'

import { useState, useEffect } from 'react'

function App() { 

  const [query, setQuery] = useState("");
  const [categoria, setCategoria] = useState("");
  const [fotos, setFotos] = useState([]);
  const [fotoAmpli, setFotoAmpli] = useState(null);
  const [activeSearch, setActiveSearch] = useState(false);

  //função
  const fetchData = async({query, categoria}) => {
    
    const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;

    if(query || categoria){

      let searchQuery = query;

      if(query && categoria){
        searchQuery = `${query} ${categoria}`;
      } else if(categoria){
        searchQuery = categoria;          
      } 
      
      const resp = await axios.get('https://api.unsplash.com/search/photos', {params:{client_id: apiKey, query: searchQuery}});          
      setFotos(resp.data.results);

    } else{
      const resp = await axios.get('https://api.unsplash.com/photos/random', {params:{client_id: apiKey, count: 12}});  
      setFotos(resp.data);
    }

  }

  useEffect(() => {
    fetchData(query, categoria);      
  }, [])

  useEffect(() => {

    if(activeSearch){
      fetchData({query, categoria});
      setActiveSearch(false);
    }

  }, [activeSearch])


  return (
    <div className='container'>
      <Searchbar setQuery={setQuery} setCategoria={setCategoria} setActiveSearch={setActiveSearch}/>  
      <FotoList fotos={fotos} setFotoAmpli={setFotoAmpli} />
      {fotoAmpli && 
        <FotoAmpliada foto={fotoAmpli} setFotoAmpli={setFotoAmpli} />
      }      
    </div>
  )
}

export default App
