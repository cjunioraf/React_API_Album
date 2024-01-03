import React from 'react'

const FotoAmpliada = ({foto, setFotoAmpli}) => {
  return (

    <div className='foto_ampli' onClick={() => setFotoAmpli(null)}>
      <div className='foto_ampli_container'>
        <img src={foto.urls.regular} alt={foto.alt_description}/>      
      </div>
    </div>
  )
}

export default FotoAmpliada