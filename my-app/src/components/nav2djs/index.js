import React, {Component} from 'react'
import Nav2d from './vendor/index0.js';

class Demo extends Component {
  componentDidMount() {
    const _ID = this.props.id
    if(document.getElementById(_ID)
       && document.getElementById(_ID).getElementsByTagName("canvas").length > 1){
      document.getElementById(_ID).getElementsByTagName("canvas")[0].remove();
       }
  }

  render() {
    return  <div>
      <Nav2d id={this.props.id} width={this.props.width} height={this.props.height} serverName={this.props.serverName} ros={this.props.ros}/>
    </div>
  }
}


export default Demo;