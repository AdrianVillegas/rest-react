import React from 'react';

const Imagen = (props) =>{
   
    return(
        <div className="col-12 sol-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={props.imagen.Poster} className="card-img-top"></img>
            </div>
        </div>
    )
}
export default Imagen;  