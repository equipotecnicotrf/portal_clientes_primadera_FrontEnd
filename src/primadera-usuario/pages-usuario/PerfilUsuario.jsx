import BannerUser from './BannerUsuario';
import imagenes from "../../assets/imagenes";
import './PerfilUsuario.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Cookies from 'js-cookie';
import LoginService from '../../services/LoginService';
import UserService from '../../services/UserService';
import { Form, Button } from 'react-bootstrap';

const DataTablePerfilUser = ({ backgroundColor }) => {

    //validacion de sesion activa

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

    const backgroundStyle = {
        backgroundImage: `url(${imagenes.fondoTextura}`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
    };

    const Datos_usuario = {
        position: 'absolute',
        top: '54%',
        left: '14.5%',
        transform: 'translate (-50%, -50%)',
    };

    const bannerStyle = {
        backgroundColor: backgroundColor || '#EFEEEE',
        color: '#000000',
        padding: '2px',
        textAlign: 'left',
        marginTop: '20px',
        width: 'auto'
    };

    const styles = {
        icon: {
            width: '30px',
            height: '28px',
            borderRadius: '40px 0 0 40px',
            cursor: 'pointer',
        },
    };

    const [isOverlayVisible, setOverlayVisible] = useState(false);

    const toggleOverlay = () => {
        setOverlayVisible(!isOverlayVisible);
    };

    const [isOverlayVisible2, setOverlayVisible2] = useState(false);

    const toggleOverlay2 = () => {
        setOverlayVisible2(!isOverlayVisible2);
    };

    const data = [

        { direccion: 'calle 127 F No. 93 - d 41', dpt: 'Cundinamarca', ciudad: 'Bogotá D.C.', pais: 'Colombia', vendedor: 'Lucia', uso: '123' },
        { direccion: 'calle 127 F No. 93 - d 43', dpt: 'Meta', ciudad: 'Villavicencio', pais: 'Colombia', vendedor: 'Andrea', uso: '123' },
        { direccion: 'calle 127 F No. 93 - d 44', dpt: 'Meta', ciudad: 'Villavicencio', pais: 'Colombia', vendedor: 'Andrea', uso: '123' },
        { direccion: 'calle 127 F No. 93 - d 45', dpt: 'Meta', ciudad: 'Villavicencio', pais: 'Colombia', vendedor: 'Andrea', uso: '123' },
        { direccion: 'calle 127 F No. 93 - d 41', dpt: 'Cundinamarca', ciudad: 'Bogotá D.C.', pais: 'Colombia', vendedor: 'Lucia', uso: '123' },
        { direccion: 'calle 127 F No. 93 - d 43', dpt: 'Meta', ciudad: 'Villavicencio', pais: 'Colombia', vendedor: 'Andrea', uso: '123' },

    ];

    return (
        <>
            <div className='Back' style={backgroundStyle}>
                <BannerUser />
                <div className='FondoBlanco'>
                    {/*AJUSTE LCPG 11-10 fin*/}
                    <div className='perfil'>
                        <tr>
                            <td><Container>
                                <Row>
                                    <Col xs={6} md={4}>
                                        <Image className='Img-Admin' src={imagenes.Arboles} roundedCircle />
                                    </Col>
                                </Row>
                            </Container>
                            </td>
                        </tr>
                    </div>

                    <div style={Datos_usuario}>
                        <td >
                            <tr><th>{usuarioSesion}</th></tr>
                            <tr>Empresa</tr>
                            <tr>{usuarioCorreo}</tr>
                            <tr>Telefono</tr>
                        </td>
                    </div>

                    <div className='Buttons_perfil mt-12'>
                        <button className='btns_perfil p-2 m-2 btn-sm'>Perfil</button>
                        <button className='btns_perfil p-2 m-2 btn-sm' onClick={() => navigate("/DataInventario")}>Inventario Disponible</button>
                        <button className='btns_perfil p-2 m-2 btn-sm'>Haz tu pedido</button>
                        <button className='btns_perfil p-2 m-2 btn-sm'>Consulta tu pedido</button>
                    </div>

                    <div>
                        <div className='CuadroInfo'>
                            <div className='Tex_ima'>
                                <td>
                                    <tr className='TextoIni'><h1>¡Bienvenido!</h1> </tr>
                                    <tr className='ImagenIni'><img src={imagenes.LogoRojo}></img> </tr>
                                </td>
                            </div>
                        </div>

                        <div>
                            {isOverlayVisible && (

                                <div className='CuadroInfo_dir'>
                                    <div className='titulo_dir'>
                                        <th>Direcciones</th>
                                    </div>
                                    <div className='CuadroInfo_dir2'>

                                        <table className='table table-borderless' style={bannerStyle} >

                                            <thead>
                                                <tr style={bannerStyle} >
                                                    <th style={bannerStyle}>Dirección</th>
                                                    <th style={bannerStyle}>Dpt</th>
                                                    <th style={bannerStyle}>Ciudad</th>
                                                    <th style={bannerStyle}>País</th>
                                                    <th style={bannerStyle}>Vendedor</th>
                                                    <th style={bannerStyle}>Uso</th>
                                                </tr>
                                            </thead>

                                            <tbody >
                                                {data.map((item) => (
                                                    <tr style={bannerStyle} key={item}>
                                                        <td style={bannerStyle}>{item.direccion}</td>
                                                        <td style={bannerStyle}>{item.dpt}</td>
                                                        <td style={bannerStyle}>{item.ciudad}</td>
                                                        <td style={bannerStyle}>{item.pais}</td>
                                                        <td style={bannerStyle}>{item.vendedor}</td>
                                                        <td style={bannerStyle}>{item.uso}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div>
                            {isOverlayVisible2 && (

                                <div className='CuadroInfo_ayuda'>
                                    <div className='parrafos'>
                                        <Form.Group className='parrafo_espacio'>
                                            <Form.Text><h3><th>Tienes algún comentario, duda o reclamo CONTÁCTANOS</th></h3></Form.Text>
                                            <div >
                                                <Row>
                                                    <Col>
                                                        <a href='https://api.whatsapp.com/send?phone=TUNUMERO' target="_blank" rel="noopener noreferrer"><button className='btn_whastapp2 p-2 m-2 btn-sm'  ><th>
                                                            <img src={imagenes.wpp} alt="Icono de WhatsApp" style={styles.icon} />+ 57 323 234 88 03</th>
                                                        </button></a>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Form.Group>

                                        <Form.Group className='parrafo_espacio'>
                                            <Form.Text style={{ marginBottom: '700px' }}><h4>Preguntas frecuentes</h4></Form.Text>
                                        </Form.Group>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className='Buttons_perfil2 mt-12'>
                        <Row>
                            <Col><button className='btns_perfil2 p-2 m-2 btn-sm' onClick={toggleOverlay}><td><th>Direcciones</th>3 direcciones agregadas</td></button></Col>
                        </Row>
                        <Row>
                            <Col><button className='btns_perfil2 p-2 m-2 btn-sm' onClick={toggleOverlay2}><th>Servicio de ayuda</th></button></Col>
                        </Row>
                    </div>

                </div >
                <Image className='Img-Creamos_perfil' src={imagenes.Creamos} />
            </div > {/*AJUSTE LCPG*/}
        </>
    );
};

export default DataTablePerfilUser;