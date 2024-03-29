import React from 'react'
import Foto from './Foto'

const FotoList = ({fotos, setFotoAmpli}) => {
  return (
    <div className='album'>
        {fotos.map((foto) => ( 
            <Foto key={foto.id} dados={foto} setFotoAmpli={setFotoAmpli} />            
        ))}
    </div>
  )
}

export default FotoList