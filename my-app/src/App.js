import React from 'react';
import logo from './logo.png';
import './App.css';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
//import 'dotenv'
import Icons from "./Icon"
// get our fontawesome imports
import Nav2D from './components/nav2djs';
import UseNipple from './nipple'

function App() {

  ///////////////////

  function fnURL(sURL)
  {
    //console.log(process.env.ROS_BRIDGE_URL)
    //console.log(process.env.NODE_ENV)
    let ROSLIB = require('roslib');
    let ROSLIB_Ros = new ROSLIB.Ros({url: sURL})

    return ROSLIB_Ros
  }


  ///////////////////

  return (
    <div style={{backgroundColor:"#282c34" }} className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
        
        <div>
        <Container style={{}} >
         
              <div style={{display:"flex" , marginLeft:"32%"}} >
           <Icons />
              <Nav2D id="nav2d" width={500} height={500} ros={fnURL('ws://3.141.4.113:9090')} />
              </div>
              <UseNipple
                        style={{color:"white"}} 
                        XRangeMin={10}
                        XRangeMax={100}
                        YRangeMin={0}
                        YRangeMax={100}
                        SignalRepeatTime={100}/>
            
          
          <br></br>
          <Row>
          
          </Row>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
        </Container>
        </div>      
        <div>

        </div>
        

      </div>
  );
}
        //<CanvasChart/>


export default App;
