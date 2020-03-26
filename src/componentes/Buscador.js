import React, {Component} from 'react';

class Buscador extends Component{
    busquedaRef = React.createRef();
//metodo  para obttener datos del api
obtenerDatos = (e) =>{
    e.preventDefault();
    //tomo el valor del input y lo almacenoen la constannte
   const termino = this.busquedaRef.current.value;
//    lo envio al componenete principal
    this.props.datosBusqueda(termino); 
}

render(){
    return(
        <form onSubmit={this.obtenerDatos}>
            <div className="row">
                <div className="form-group col-md-8">
                    <input ref={this.busquedaRef} type="text" className="form-control form-control-lg" placeholder="Busca Tu Pelicula ejemplo: Goku"></input>
                   
                </div>
                <div className="form-group col-md-4 ">
                <input type="submit" className="btn btn-lg btn-danger btn-block" value="buscar"></input>
                </div>
            </div>
        </form>
    );
}

}


export default Buscador;