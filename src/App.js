import React, {useState, useEffect, Fragment} from 'react';
import Formulario from './components/Formulario';
import Cancion from './components/Cancion';
import axios from 'axios';

function App (){

  //Ultilizar useState con 3 state diferentes
  const [artista, agregarArtista] = useState('');
  const [letra, agregarLetra] = useState([]);
  const [info, agregarInfo] = useState({});

  // Metodo para consultar la api de letras de canciones
  const consultarApiLetra = async busqueda =>{
    const {artista, cancion} = busqueda;
    const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;

    //consultar la API
    const resultado = await axios(url)
    
    //almacenar la letra en el state
    agregarLetra(resultado.data.lyrics)
    console.log(letra)
  }
  return(
    <Fragment>
      <Formulario
        consultarApiLetra = {consultarApiLetra}
      /> 

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">

          </div>
          <div className="col-md-6">
            <Cancion
              letra = {letra}
            />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App;