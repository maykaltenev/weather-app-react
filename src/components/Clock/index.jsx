import React, { Component } from "react";
import classes from "./Clock.module.css";
let runner;
class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.getCurrentTime(),
    };
  }
  getCurrentTime = () => {
    let d = new Date();
    let currentTimeByZone = new Date(
      (d / 1000 + this.props.timeZoneOffset) * 1000
    )
      .toUTCString()
      .slice(17, 26);
    let time = currentTimeByZone;
    return time;
  };

  componentDidMount() {
    runner = setInterval(() => {
      this.setState({ time: this.getCurrentTime() });
    }, 1000);
  }
  componentWillUnmount() {
    if (runner) {
      clearInterval(runner);
    }
  }
  render() {
    return (
      <div className={classes.clockTile}>
        <span>{this.state.time}</span>
      </div>
    );
  }
}
export default Clock;
// export default function windTheClock(timeZoneOffset) {
//   var d = new Date();
//   d.setHours(d.getUTCHours() + timeZoneOffset); // set time zone offset
//   var h = d.getHours();
//   var m = d.getMinutes();
//   var s = d.getSeconds();
//   var ampm = h >= 12 ? "pm" : "am";
//   h = h % 12;
//   h = h ? h : 12; // replace '0' w/ '12'
//   h = addLeadingZero(h);
//   m = addLeadingZero(m);
//   s = addLeadingZero(s);
// }
//   let clock = h + ":" + m + ":" + s + " " + ampm;
//   setTimeout(function () {
//     windTheClock(timeZoneOffset);
//   }, 1000);

//   {
//     return (
//       <div className={classes.clockTile}>
//         <span>{this.state.time}</span>
//       </div>
//     );
