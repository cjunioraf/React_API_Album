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

  //função
  const fetchData = async({query, categoria}) => {

    const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;
    const resp = await axios.get('https://api.unsplash.com/photos/random', {params:{client_id: apiKey, count: 12}});  
    setFotos(resp.data);    
    //console.log(resp);
  }

  useEffect(() => {
    fetchData(query, categoria);      
  }, [])


  return (
    <div className='container'>
      <Searchbar />  
      <FotoList fotos={fotos} setFotoAmpli={setFotoAmpli} />
      {fotoAmpli && 
        <FotoAmpliada foto={fotoAmpli} setFotoAmpli={setFotoAmpli} />
      }      
    </div>
  )
}

export default App
