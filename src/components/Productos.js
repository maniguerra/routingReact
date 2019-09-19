import React,{Component} from 'react';
import Producto from './Producto';
import '../css/Productos.css';
import Buscador from './Buscador';

export default class Productos extends Component {

    render() {
        return (
            <div className="Productos">
                <h2>Nuestros Productos</h2>
                <Buscador
                    busqueda={this.props.busquedaProducto}
                />
                <ul className="lista-productos ">
                    {Object.keys(this.props.productos).map (producto => (
                        <Producto 
                            key={producto}
                            informacion={this.props.productos[producto]}

                        />
                    ))
                    }

                </ul>
            </div>
        );
    }
}