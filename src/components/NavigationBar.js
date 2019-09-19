import React from 'react';
import '../css/Navigation.css';
import { NavLink } from 'react-router-dom';

 const NavigationBar = () => {

   
        return (
            <nav className="navegacion">
                <NavLink to={'/nosotros'} activeClassName="activo">Nosotros</NavLink>
                <NavLink to={'/productos'} activeClassName="activo">Productos</NavLink>
                <NavLink to={'/contacto'} activeClassName="activo">Contacto</NavLink>
            </nav>
        );
    
}

export default NavigationBar;