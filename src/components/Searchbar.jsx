const Searchbar = ({setQuery, setCategoria, setActiveSearch}) => {

    const categorias = ["Natureza", "Pessoas", "Carros", "Animais", "Esportes", "Tecnologia"]

  return ( 

    <div className='search_bar'>
        <input type="text" placeholder='Pesquisar Fotos...' onChange={(e) => setQuery(e.target.value)} />
        <button onClick={() => setActiveSearch(true)}>Perquisar</button>
        <select onChange={(e) => 
            {setCategoria(e.target.value); 
             setActiveSearch(true);}}>
            {categorias.map((categoria) => (
                <option key={categoria} 
                        value={categoria}>
                    {categoria}
                </option>
            ))}
        </select>
    </div>
  )
}

export default Searchbar