import React from 'react';
import { Link } from 'react-router-dom';
import '../components/styles/NotFound.css'
import Astronauts from '../images/Starman-bro.svg'
import Logo from '../images/platziconf-logo.svg'

function NotFound() {
    return (
        <div className="NotFound">
            <div className="container">
                <div className="row">
                    <div className="NotFound__col col-12 col-md-4">
                        <img
                            src={Logo}
                            alt="Platzi Conf Logo"
                            className="img-fluid mb-2"
                        />

                        <h1>404 Pagina no encontrada</h1>
                        <p>Parece que algo salio mal... </p>
                        <Link className="btn btn-primary" to="/">
                            Inicio
                        </Link>
                    </div>

                    <div className="NotFound__col d-none d-md-block col-md-8">
                        <img
                            src={Astronauts}
                            alt="Astronauts"
                            className="img-fluid p-4"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound;