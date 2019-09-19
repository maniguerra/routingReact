import React,{Component} from 'react';
import '../css/Nosotros.css'

export default class Nosotros extends Component {

    render() {
        return (
            <div className="contenedor-nosotros">
                <div className="imagen">
                    <img id="avatar" src="/img/avatar.svg" alt="img nosotros" />
                </div>
                <div className="contenido">
                    <h2>Sobre Nosotros</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in risus consequat, lobortis nisi in, tempus leo. Fusce rutrum tristique pulvinar. Curabitur cursus luctus elit, a laoreet diam lacinia sed. Sed luctus lectus non nisl vestibulum, nec scelerisque lorem semper. Pellentesque id semper diam. Sed sit amet odio sed est euismod aliquam eget vitae nulla. Nulla et porttitor mi. Donec finibus est eu tortor porta faucibus. Nulla finibus tristique tortor sit amet suscipit. Nam consequat pellentesque est. Nam vel libero porttitor, tincidunt arcu a, ultricies odio. Nullam a elit urna. Mauris erat velit, lobortis sit amet tellus vitae, tincidunt vulputate tellus. Etiam aliquet arcu quis turpis consequat euismod. Cras non sapien quis sapien aliquam fermentum non egestas magna.</p>
                </div>
            </div>
        );
    }
}