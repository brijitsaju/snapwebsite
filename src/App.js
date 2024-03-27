
import { Col, Row } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import hero from './images/image-hero-desktop.png'
import hero1 from './images/image-hero-mobile.png'
import data from './images/client-databiz.svg'
import audio from './images/client-audiophile.svg'
import maker from './images/client-maker.svg'
import meet from './images/client-meet.svg'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='row'>
        <div className='rounded'>
          <Row style={{ padding: "40px", marginLeft: "-50px" }} >
            <Col className='dis' sm={12} md={6} style={{ display: 'none' }}>
              <img height={"350px"} width={"410px"} src={hero1} alt="" />
            </Col>
            <Col sm={12} md={6}>
              <div>
                <h1 className="heading">Make <br /> Remote Work</h1>
                <p className="paragraph" style={{ marginLeft: "" }}>Get your team in sync, no matter your location <br /> Streamline processes, create team rituals, and <br /> Watch productivity soar</p>
              </div><br></br>

              <button className='btn btn-bl rounded' style={{ borderColor: "black" }}>Learn More</button>
              <div className='d-flex justify-content-evenly ms-2' style={{ marginTop: "100px", marginLeft: "0px", alignItems: "center" }}>
                <img src={data} />
                <img src={audio} />
                <img src={meet} />
                <img src={maker} />
              </div>
            </Col>
            <Col className='dis2' sm={12} md={6} style={{ display: 'none' }}>
              <img height={"500px"} width={"550px"} src={hero} alt="" />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default App;
