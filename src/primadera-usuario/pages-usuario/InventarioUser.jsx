import BannerUser from './BannerUsuario';
import './InventarioUser.css';
import imagenes from "../../assets/imagenes";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Cookies from 'js-cookie';
import LoginService from '../../services/LoginService';
import UserService from '../../services/UserService';
import Button from 'react-bootstrap/Button';

const DataInventario = () => {

    const [usuarioSesion, setUarioSesion] = useState([]);
    const [usuarioCorreo, setUsuarioCorreo] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        SesionUsername()
    }, [])

    const SesionUsername = () => {
        if (LoginService.isAuthenticated()) {
            // Renderizar la vista protegida
            const read = Cookies.get()
            //console.log(read)
            //alert("Bienvenido " + read.portal_sesion);    
            UserService.getUserByUsername(read.portal_sesion).then((responseid) => {
                //console.log(responseid.data)
                setUarioSesion(responseid.data.cp_name);
                setUsuarioCorreo(responseid.data.username);

            }).catch(error => {
                console.log(error)
                alert("Error obtener usuario de sesion")
            })
        } else {
            // Redirigir al inicio de sesión u otra acción
            LoginService.logout();
            navigate('/')
        }
    }

    const productos = [
        { imagen: 'Arboles', codigo: 1, nombre: 'Producto 1', descripcion: 10, cantidad: 19.99, precio: 9.99 },
        { imagen: 'Arboles', codigo: 2, nombre: 'Producto 1', descripcion: 10, cantidad: 19.99, precio: 9.99 },
        { imagen: 'Arboles', codigo: 3, nombre: 'Producto 1', descripcion: 10, cantidad: 19.99, precio: 9.99 },
        // ... otros productos
    ];

    const backgroundStyle = {
        backgroundImage: `url(${imagenes.fondoTextura}`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
    };

    const perfil = {
        padding: '10px',
        height: '13vh',
        marginTop: '3%'
    };
    const dropDownbackgroundStyle = {
        backgroundColor: 'white',
        color: 'Black',
        borderRadius: '10px',
        borderColor: 'Black',
        width: '250px'
    };
    const dropDown = {
        position: 'absolute',
        top: '27.2%',
        left: '75%',
        transform: 'translate (-50%, -50%)',
    };





    return (
        <>
            <div className='Back' style={backgroundStyle}>
                <BannerUser />
{/* pRUEBAAAAA*/}
                <div className='Buttons_perfil mt-12'>

                    <button className='btns_perfil p-2 m-2 btn-sm' onClick={() => navigate("/DataTablePerfilUser")}>Perfil</button>
                    <button className='btns_perfil p-2 m-2 btn-sm' onClick={() => navigate("/DataInventario")}>Inventario Disponible</button>
                    <button className='btns_perfil p-2 m-2 btn-sm'>Haz tu pedido</button>
                    <button className='btns_perfil p-2 m-2 btn-sm'>Consulta tu pedido</button>
                </div>

                <div className='FondoBlanco'>
                    <div style={perfil}>
                        <tr>
                            <td><Container>
                                <Row>
                                    <Col xs={6} md={4}>
                                        <Image className='Img-Admin' src={imagenes.Arboles} roundedCircle />
                                    </Col>
                                </Row>
                            </Container>
                            </td>
                            <td><th>{usuarioSesion}</th>
                                <tr><td>Empresa</td></tr>
                                <tr><td>{usuarioCorreo}</td></tr>
                                <tr><td>Telefono</td></tr>
                            </td>
                        </tr>
                    </div>

                    <div className='CuadroInventario row rows-cols-1 row-cols-md-3 g-3'>


                    <Row>
                            <tbody>
                            
                                {productos.map(producto => (
                                 
                                    <tr key={producto.imagen}>

                                        <td>
                                           
                                                <Col>
                                                    <img
                                                        src={imagenes[producto.imagen]}
                                                        alt={producto.nombre}
                                                        style={{ width: '220px', height: '300px' }}
                                                    />
                                                </Col>
                                                
                                                
                                                <Col>{producto.imagen}</Col>
                                                <Col>{producto.nombre}</Col>
                                                <Col>{producto.descripcion}</Col>
                                                <Col>{producto.cantidad}</Col>
                                                <Col>{producto.precio}</Col>
                                                
                                        </td>

                                    </tr>


                                ))}
                             
                            </tbody>
                            </Row>
                        


                    </div>
                </div>

                <Image className='Img-Creamos_ped' src={imagenes.Creamos} />
            </div>{/*AJUSTE LCPG*/}
        </>
    );
};

export default DataInventario;