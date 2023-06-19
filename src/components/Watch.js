import React from 'react';
import ClockFace from './ClockFace.png';
import ClockFace_H from './ClockFace_H.png';
import ClockFace_M from './ClockFace_M.png';
import ClockFace_S from './ClockFace_S.png';

class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { time } = this.state;

    const secondsRotation = (time.getSeconds() / 60) * 360;
    const minutesRotation = ((time.getMinutes() * 60 + time.getSeconds()) / 3600) * 360;
    const hoursRotation = ((time.getHours() % 12) / 12) * 360 + minutesRotation / 12;

    return (
      <div className='clock-container'>
        <img className="clock" src={ClockFace} alt="clock" />
        <img className="arrow arrow-hours" src={ClockFace_H} alt="clock" style={{ transform: `rotate(${hoursRotation}deg)` }} />
        <img className="arrow arrow-minutes" src={ClockFace_M} alt="clock" style={{ transform: `rotate(${minutesRotation}deg)` }} />
        <img className="arrow arrow-seconds" src={ClockFace_S} alt="clock" style={{ transform: `rotate(${secondsRotation}deg)` }} />
      </div>
    );
  }
}

export default Watch;
