import React from 'react';

import './App.css';
import Button from 'react-bootstrap/Button';
import zoom from "./zoom.png";
import zoomout from "./zoom-out.png";
import placeholder from "./placeholder.png";
import paperplane from "./paper-plane.png";
import stop from "./stop.png";
import ButtonGroup from 'react-bootstrap/ButtonGroup'


function Icons() {

  ///////////////////

 

  function run_command(param){
    switch(param) {
      case 'navigate':
          console.log("navigate button clicked");
          window.navigation = true;
          window.homing = false;
          if(window.pathed !== true){
            window["pathed"]();
          }
          return;
      case 'pose':
        console.log("initial pose button clicked");
        window.navigation = false;
        window.homing = true; 
        return;
      case 'zoom-in':
        window["zoomIn"]();
        return;
      case 'zoom-out':
        window["zoomOut"]();
        return;
      case 'stop':
        // Rest-API [POST] url: '/navigation/stop'
        return;
      default:
      console.log(param);
    }
  }
 

  return (
   
            <table style={{width:"72px"}}>
                <tr>
              <Button  href="#"  onClick={() => run_command("zoom-in")}>
                  <img style={{width:"100%"}} src={zoom} alt='zoom' />
                  </Button></tr>
                  <tr>
              <Button href="#"  onClick={() => run_command("zoom-out")}>
              <img style={{width:"100%"}} src={zoomout} alt='zoom' />
                  </Button></tr>
                  <tr>
              <Button href="#"  onClick={() => run_command("pose")}>
              <img style={{width:"100%"}} src={placeholder} alt='zoom' />
                  </Button></tr>
                  <tr>
              <Button href="#"  onClick={() => run_command("stop")}>
              <img style={{width:"100%"}} src={stop} alt='zoom' />
                  </Button></tr>
                  <tr>
              <Button href="#"  onClick={() => run_command("navigate")}>
              <img style={{width:"100%"}} src={paperplane} alt='zoom' />
                </Button></tr>
                </table>
            
  );
}
        //<CanvasChart/>


export default Icons;
