import React from 'react';
import nipplejs from 'nipplejs';

export default class Joystick extends React.Component {
  constructor(props) {
    super(props);

    this._onMove = this._onMove.bind(this);

    this.moveEvents = [
      {
        name: 'up',
        clb: this.onMoveUp,
      },
      {
        name: 'down',
        clb: this.onMoveDown,
      },
      {
        name: 'left',
        clb: this.onMoveLeft,
      },
      {
        name: 'right',
        clb: this.onMoveRight,
      },
    ];

    this.value = 0;
  }

  _onMove(e, { distance, direction, ...all}) {
    if (!direction) return;
        const size = e.target.options.size;
        const angle = direction.angle;
        const isHorizontal = angle === 'left' || angle === 'right';

        if (angle && (angle === 'left' || angle === 'down')) {
            distance *= -1;
        }

        const { XRangeMin, XRangeMax, YRangeMax, YRangeMin } = this.props;
        let range = 100;
        let minRangeValue = 0;

        if (isHorizontal) {
            range = Math.abs(XRangeMax * 1) - XRangeMin * 1;
            minRangeValue = XRangeMin * 1;
        } else {
            range = Math.abs(YRangeMax * 1) - YRangeMin * 1;
            minRangeValue = YRangeMin * 1;
        }

        this.value = ((distance / size) + 0.5) * range + minRangeValue;
    
    console.log(this.value, distance, size);

    if (isHorizontal) {
      this.onMoveHorizontal(this.value);
    } else {
      this.onMoveVertical(this.value);
    }

    this.moveEvents.forEach(event => {
      event.clb(angle === event.name ? 1 : 0);
    });
  }

  onMoveHorizontal() {}
  onMoveVertical() {}
  onMoveUp() {}
  onMoveDown() {}
  onMoveLeft() {}
  onMoveRight() {}

  componentWillUnmount() {
    this.joystick.destroy();
  }

  componentDidMount() {
    this.joystick = nipplejs.create({
      zone: this.zone,
      mode: 'static',
      color: 'white',
      size: 80
    });   

    this.joystick.on('move', this._onMove);
    this.joystick.on('end', ()=> console.log('end'));
    
    
    window.dispatchEvent(new Event('resize'));
    window.joystick = this.joystick; 
    window.nipplejs = nipplejs;  
  }

  render() {
    const style = {
      position: 'relative',
      width: '100',
      height: '100',
      marginLeft: '66%',
      marginTop: '-2%',
    };

    return (
      <div width={100} height={100}>
        <div style={style} ref={ref => (this.zone = ref)} />
      </div>
    );
  }
}

Joystick.defaultProps = {
  XRangeMin: 0,
  XRangeMax: 100,
  YRangeMin: 0,
  YRangeMax: 100,
  SignalRepeatTime: 100,
};
