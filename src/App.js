import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Col, Row} from  'react-bootstrap';

import Header from './Header.jsx';
import CardImagen from './CardImagen.jsx';
import Footer from './Footer.jsx'

function App() {
  return (
    <div className="App">
      <Header titulo="Galeria de imagenes con React"></Header>
      <Container>  
       <Row>
          <Col>
            <CardImagen imagen="https://cdn.britannica.com/34/212134-050-A7289400/Lionel-Messi-2018.jpg" titulo="Lionel Messi" descripcion="Futbol"></CardImagen>
          </Col>
          <Col>
             <CardImagen imagen="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/11/29/16697391864006.jpg" titulo="Tiger Woods" descripcion="Golf"></CardImagen>
          </Col>
          <Col>
          <CardImagen imagen="https://imagenes.20minutos.es/files/image_990_v3/uploads/imagenes/2021/10/19/nba-4.jpeg" titulo="Lebron James" descripcion="Basketball"></CardImagen>
          </Col>  
       </Row>
      </Container>
      <Footer texto="Todos los derechos reservados"></Footer>
    </div>
  );
}

export default App;
