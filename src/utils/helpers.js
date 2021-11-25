const setTimeFormat = (totalSecs) => {
  const seconds = (totalSecs % 60);
  const minutes = Math.floor(totalSecs / 60);
  const hours = Math.floor(totalSecs / 3600);
  const hoursFormat = (hours < 1 || hours > 23)
    ? '00'
    : (hours >= 1 && hours <= 9) ? `0${hours}` : `${hours}`;
  const minutesFormat = (minutes < 10)
    ? ((minutes === 0) ? '00' : `0${minutes}`)
    : `${minutes}`;
  const secondsFormant = (seconds < 10) ? `0${seconds}` : `${seconds}`;

  return <div className = "main_section">
 <div className = "clock-holder">
   <div className = "stopwatch">
        <span>
    {hoursFormat}
  </span>&nbsp;:&nbsp;
     <span>
    {minutesFormat}
  </span>&nbsp;:&nbsp;
     <span>
    {secondsFormant}
  </span>
   </div>
 </div>
  </div>

};

export default setTimeFormat;
