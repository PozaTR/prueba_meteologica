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
      liveData: {
        power: [],
        temperature: [],
      },
      lastPowerInfo: [],
      lastTemperature: []
   }
 }

 componentDidMount() {
   setInterval(() => {
    meteoService.fetch().then(resp => {
      this.setState(prevState => {
        const { liveData: prevLiveData } = prevState
        prevLiveData.power.push(resp.power)
        prevLiveData.temperature.push(resp.temperature)
        const lastPowerValue = prevLiveData.power.map(power => power.value);
        const lastPowerUnit = prevLiveData.power.map(power => power.unit);
        const lastTemperatureValue = prevLiveData.temperature.map(temperature => temperature.value);
        const lastTemperatureUnit = prevLiveData.temperature.map(temperature => temperature.unit)
        return {
          liveData: prevLiveData,
          lastPowerInfo: lastPowerValue,
          lastTemperature: lastTemperatureValue
         }
       })
    })
  }, 5000);
 }

 render() {
  const { lastPowerInfo, lastTemperature } = this.state;

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
                <LiveInfo />
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
