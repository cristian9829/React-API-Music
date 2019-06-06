import React, {useState, useEffect, Fragment} from 'react';
import Formulario from './components/Formulario';
import Cancion from './components/Cancion';
import Informacion from './components/informacion';
import axios from 'axios';
import { async } from 'q';

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

    //almacenar el artista que se busco
    agregarArtista(artista)
    
    //almacenar la letra en el state
    agregarLetra(resultado.data.lyrics)
  }

  //Metodo para consultar la Api de informacion
  const consultarAPIInfo = async () =>{
    if(artista){
      const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
      const resultado = await axios(url)

      agregarInfo(resultado.data.artists[0]);
    }
  }

  useEffect(
    () =>{
      consultarAPIInfo();
    }, [artista]
  )

  return(
    <Fragment>
      <Formulario
        consultarApiLetra = {consultarApiLetra}
      /> 

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Informacion
              info = {info}
            />
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