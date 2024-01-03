import React from 'react'

const Searchbar = () => {

    const categorias = ["Natureza", "Pessoas", "Carros", "Animais", "Esportes", "Tecnologia"]

  return (
    <div className='search_bar'>
        <input type="text" placeholder='Pesquisar Fotos...' />
        <button>Perquisar</button>
        <select>
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