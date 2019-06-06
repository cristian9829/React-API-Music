import React, {useState, useEffect, Fragment} from 'react';
import Formulario from './components/Formulario';

function App (){

  //Ultilizar useState con 3 state diferentes
  const [artista, agregarArtista] = useState('');
  const [letra, agregarLetra] = useState([]);
  const [info, agregarInfo] = useState({});

  // Metodo para consultar la api de letras de canciones
  const consultarApiLetra = busqueda =>{
    console.log(busqueda)
  }
  return(
    <Fragment>
      <Formulario
        consultarApiLetra = {consultarApiLetra}
      /> 
    </Fragment>
  )
}

export default App;