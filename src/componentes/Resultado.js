import React,{Component} from 'react';
import Imagen from './Imagen';  
class Resultado extends Component{
    mostrarImagenes = () =>{
        const imagenes = this.props.imagenes;
     
        console.log(imagenes);
        return(
            <React.Fragment>
                <div className="col-12 p-5 row">
                    {imagenes.map(imagen =>(
                        <Imagen
                        key={imagen.imdbID}
                        imagen={imagen}/>
                    ))}
                </div>
            </React.Fragment>
        )
    }
    
    render(){
        return  (
            <React.Fragment>
            {this.mostrarImagenes() }
            </React.Fragment>
        );
    }
}
export default Resultado;