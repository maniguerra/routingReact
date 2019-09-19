import React, {Component} from 'react';
import '../css/Buscador.css'

export default class Buscador extends Component {


    leerDatos = (e) => {
        // Termino de busqueda
        const termino = e.target.value;

        // Enviar por props
        this.props.busqueda(termino);
        
    }

    render() {
        return (
            <form className="buscador">
                <input type="text" placeholder="Búsqueda" onChange=
                {this.leerDatos}/>
            </form>
        );
    }
}