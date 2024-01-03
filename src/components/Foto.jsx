const Foto = ({ dados, setFotoAmpli }) => {

    return (
    <div className='foto' onClick={() => setFotoAmpli(dados)}>
        <img src={dados.urls.small} alt={dados.alt_description} />
    </div>
  )
}

export default Foto