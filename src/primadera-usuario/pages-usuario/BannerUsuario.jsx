import { useNavigate } from "react-router-dom";
import imagenes from "../../assets/imagenes";
import { FaHome, FaRegEdit } from "react-icons/fa";
import LoginService from '../../services/LoginService';
import { Carousel } from 'react-bootstrap';


const BannerUser = ({ backgroundColor }) => {

  const navigate = useNavigate();
  const logout = () => {
    LoginService.logout();
    navigate("/")
  };

  const bannerStyle = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    textAling: 'center',
    height: '180px'
  };

  const backgroundS = {
    backgroundImage: `url(${imagenes.fondoTextura}`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
  };

  const logoStyle = {
    maxWidth: '138px', // Ajusta según tus necesidades
    marginTop: '-40px',
    backgroundColor: backgroundColor || '#323333',
    padding: '10px 20px',
    cursor: 'pointer',
    position: 'absolute',
    top: '16.5%',
    left: '89%',
    borderRadius: '0 0 60px 60px'
  };

  const btnCrrSesion = {
    padding: '10px 20px',
    cursor: 'pointer',
    position: 'absolute',
    top: '20px',
    right: '10px',
    backgroundColor: backgroundColor || '#323333',
    borderRadius: '20px 20px 0 0',
    color: 'white',

  };

  const imgCreamos = {
    width: '200px',
    height: '100px',
    margin: 'auto',
    display: 'block',
    position: 'fixed',
    bottom: '0',
    left: '50%',
    transform: 'translateX(-50%)',
  };

  {/*AJUSTE LCPG INI*/ }
  const btnHome = {
    padding: '10px 20px',
    cursor: 'pointer',
    position: 'absolute',
    top: '20px',
    right: '170px',
    backgroundColor: backgroundColor || '#323333',
    borderRadius: '20px',
    color: 'white',

  }
  {/*AJUSTE LCPG FIN*/ }
  const styles = {
    container: {
      position: 'fixed',
      bottom: '30%',
      right: '0',
      transform: 'translateY(-50%)',
    },
    icon: {
      width: '50px',
      height: '50px',
      borderRadius: '40px 0 0 40px',
      border: '1px solid #25D366',
      cursor: 'pointer',
      
    },
  };


  return (
    <>

      <div className='Back'>
        <Carousel >
          <Carousel.Item style={bannerStyle}>
            <img
              className="img1 "
              src={imagenes.BannerSenior}
              alt="Primera diapositiva"
            />
          </Carousel.Item>
          <Carousel.Item style={bannerStyle}>
            <img
              className="img2 img-fluid"
              src={imagenes.BannerArboles}
              alt="Segunda diapositiva"
            />
          </Carousel.Item >
          <Carousel.Item style={bannerStyle}>
            <img
              className="img2 img-fluid"
              src={imagenes.BannerTroncos}
              alt="Tercera diapositiva"
            />
          </Carousel.Item>
          <Carousel.Item style={bannerStyle}>
            <img
              className="img2 img-fluid"
              src={imagenes.BannerIndustria}
              alt="Cuarta diapositiva"
            />
          </Carousel.Item>
        </Carousel>
        
      </div>
      <div style={styles.container}>
        <a href="https://api.whatsapp.com/send?phone=TUNUMERO" target="_blank" rel="noopener noreferrer">
          <img src={imagenes.wpp} alt="Icono de WhatsApp" style={styles.icon} />
        </a>
      </div>

      <div >
        <button style={btnCrrSesion} onClick={((e) => logout(e))}>Cerrar Sesión</button>
        <img style={logoStyle} src={imagenes.ReciclajeBlanco} />
      </div>
      {/*AJUSTE LCPG INI*/}
      <div >
        <button style={btnHome} onClick={() => navigate("/DropdownMenu")}> <FaHome /></button>
      </div>
      {/*AJUSTE LCPG FIN*/}



    </>
  );
};

export default BannerUser;