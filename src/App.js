import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import MeteoService from './service/MeteoService';
import LiveInfo from './components/LiveInfo';
import MinuteInfo from './components/MinuteInfo';
import './styles/components/app.scss';

const meteoService = new MeteoService()
class App extends React.Component {
 constructor(props) {
   super(props)

   this.state = {
      lastPowerInfo: {},
      lastTemperatureInfo: {},
      powerInfo: [],
      temperatureInfo: [],
      time: [],
      minutePowerInfo: [],
      minuteTemperatureInfo: [],
      minuteTime: []
   }
 }

 componentDidMount() {
   this.requestInfo ();
   setInterval(() => {
    this.requestInfo()
  }, 5000);
 }

 requestInfo () {
  meteoService.fetch().then(resp => {
    this.setState(prevState => {
      const {
        powerInfo: prevPowerInfo, 
        temperatureInfo: prevTemperatureInfo, 
        time: prevTime,
        minutePowerInfo: prevMinutePowerInfo,
        minuteTemperatureInfo: prevMinuteTemperatureInfo,
        minuteTime: prevMinuteTime
       } = prevState;

      const powerInfo =  [...prevPowerInfo, resp.power.value];
      const temperatureInfo =  [...prevTemperatureInfo, resp.temperature.value];
      const time = [...prevTime, resp.power.time];
      const minutePowerInfo = [...prevMinutePowerInfo];
      const minuteTemperatureInfo = [...prevMinuteTemperatureInfo];
      const minuteTime = [...prevMinuteTime];

      if(powerInfo.length % 12 === 0) {
        const averagePower = powerInfo.slice(-12).reduce((acc, it) => acc + parseFloat(it), 0) / 12;
        minutePowerInfo.push(averagePower.toFixed(3));
        
      }
      if(temperatureInfo.length % 12 === 0) {
        const averageTemperature = temperatureInfo.slice(-12).reduce((acc, it) => acc + parseFloat(it), 0) / 12;
        minuteTemperatureInfo.push(averageTemperature.toFixed(3));
      }

      if(time.length % 12 === 0) {
        minuteTime.push(resp.power.time)
      }

      return {
        lastPowerInfo: resp.power,
        lastTemperatureInfo: resp.temperature,
        powerInfo,
        temperatureInfo,
        time,
        minutePowerInfo,
        minuteTemperatureInfo,
        minuteTime
       }
     })
  })
 }

 render() {
  const { 
    powerInfo, 
    temperatureInfo, 
    time, 
    lastPowerInfo, 
    lastTemperatureInfo ,
    minutePowerInfo,
    minuteTemperatureInfo,
    minuteTime
  } = this.state;

   return(
     <>
       <header className="header">
        <h1 className="header__title">Meteologica S.A</h1>
        <nav className="header__menu">
          <Link className="header__link" to='/'>live stream</Link>
          <Link className="header__link" to='/minute'>summary by minute</Link>
         </nav>
       </header>
       <main className="main">
         <div>
            <Switch>
              <Route exact path='/'>
                <LiveInfo 
                  powerInfo={powerInfo.slice(-12)} 
                  temperatureInfo={temperatureInfo.slice(-12)} 
                  time={time.slice(-12)} 
                  lastPowerInfo={lastPowerInfo} 
                  lastTemperatureInfo={lastTemperatureInfo}
                />
              </Route>
              <Route path='/minute'>
                <MinuteInfo 
                  minutePowerInfo={minutePowerInfo.slice(-8)}
                  minuteTemperatureInfo={minuteTemperatureInfo.slice(-8)}
                  minuteTime={minuteTime.slice(-8)}
                />    
              </Route>
            </Switch>
         </div>
       </main>
       <footer className="footer">
         <span className="footer__copyright">© 2019 Meteologica S.A.</span>
       </footer>
     </>
   )
 }
}

export default App;
