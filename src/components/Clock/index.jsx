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
    const locale = this.props.locale ? this.props.locale : [];
    const hour12 = this.props.hour12 === false ? false : true;
    let hour, minute, second;
    if (this.props.format) {
      switch (this.props.format.toLowerCase()) {
        case "hh":
          hour = "2-digit";
          break;
        case "hh-mm":
          hour = "2-digit";
          minute = "2-digit";
          break;
        case "hh-mm-ss":
          hour = "2-digit";
          minute = "2-digit";
          second = "2-digit";
          break;
        default:
          hour = "2-digit";
          minute = "2-digit";
          second = "2-digit";
      }
    }
    let d = new Date();
    d.setHours(d.getUTCHours() + this.props.timeZoneOffset); // set time zone offset
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    let time = d.toUTCString({
      hour12: hour12,
      hour: h,
      minute: m,
      second: s,
    });
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
