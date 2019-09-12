import React from 'react';


const Producto = (props) => {

    const {imagen, nombre, precio, id} = props.informacion;

    
        return (
            <li>
                <img class="img-prod" src={`img/${imagen}.jpg`} alt={nombre} />
                <p>{nombre} <span> $ {precio} </span></p>
                <a href="#">Mas Info</a>
            </li>
        )
    }


    export default Producto;