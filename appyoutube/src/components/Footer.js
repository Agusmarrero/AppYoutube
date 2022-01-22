import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './Footer.css';
import { MDBBtn  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom'

const Footer = () => {
    const handleClick = () => {
        console.log('clicked');
        return (
            <div></div>
        )
    } 


    return (
        <div className='footer-back navbar navbar-fixed-bottom'>
            <label className='text-secondary'>CANTIDAD DE REPRODUCCIONES: </label>
            <Link to="/InitialVideo">
            <MDBBtn style={{float:'right' , backgroundColor:'white'}} color='#ff0303' rounded>ATRÁS</MDBBtn>
            </Link>
        </div>

    )
}

export default Footer;
