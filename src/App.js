import React, { Component } from 'react';
import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultado';

class App extends Component{

  state ={
    termino : '',
    imagenes : []
  }


consultarApi = () =>{

  const termino = this.state.termino;
  const  API_KEY  =  "e4a7f8e9";
  const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${termino}`;

 console.log(url);

 fetch(url)
 .then(respuesta => respuesta.json())
 .then(resultado =>  this.setState({imagenes:  resultado.this}))
 
}

  datosBusqueda = (termino) =>{
    this.setState({
      termino
    }, () =>{
      this.consultarApi();
    })
  }
  render(){
    return (
      <div className="app container">
        <div className="jumbotron">
  
          <p className="lead text-center">Buscador </p>
          <Buscador 
          datosBusqueda={this.datosBusqueda.bind(this)}
          />
        </div>
       <Resultado
          imagenes={this.state.imagenes}
       />
      </div>
    );
  }
}

export default App;
