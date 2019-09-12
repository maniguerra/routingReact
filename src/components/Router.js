import React,{Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Productos from './Productos';
import Nosotros from './Nosotros';
import Contacto from './Contacto';
import Error from './Error';
import infoProductos from '../datos/datos.json'
import Header from './Header';

export default class Router extends Component {

state={
    productos: []
}

componentWillMount() {
    this.setState({
        productos: infoProductos
    })
}

    render() {
        return (
            
            <BrowserRouter>
                <div className="contenedor">
                    <Header />
                    
                    
                    
                        <Switch>
                            <Route exact path="/" render={()=>(
                                <Productos
                                    productos={this.state.productos}
                                />
                            )} />
                            <Route exact path="/nosotros" component={Nosotros} />
                            <Route exact path="/contacto" component={Contacto} />
                            <Route component={Error} />

                            

                        </Switch>
                </div>
            </BrowserRouter>
        );
    }
}