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
      time: []
   }
 }

 componentDidMount() {
   setInterval(() => {
    meteoService.fetch().then(resp => {
      this.setState(prevState => {
        const {
          powerInfo: prevPowerInfo, 
          temperatureInfo: prevTemperatureInfo, 
          time: prevTime
         } = prevState;

        return {
          lastPowerInfo: resp.power,
          lastTemperatureInfo: resp.temperature,
          powerInfo: [...prevPowerInfo, resp.power.value],
          temperatureInfo: [...prevTemperatureInfo, resp.temperature.value],
          time: [...prevTime, resp.power.time]
         }
       })
    })
  }, 5000);
 }

 render() {
  const { powerInfo, temperatureInfo, time, lastPowerInfo, lastTemperatureInfo } = this.state;

   return(
     <>
       <header className="header">
        <h1 className="header__title">Meteológica S.A</h1>
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
                  powerInfo={powerInfo} 
                  temperatureInfo={temperatureInfo} 
                  time={time} 
                  lastPowerInfo={lastPowerInfo} 
                  lastTemperatureInfo={lastTemperatureInfo}
                />
              </Route>
              <Route path='/minute'>
                <MinuteInfo />    
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
