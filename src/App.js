import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import LiveInfo from './components/LiveInfo';
import MinuteInfo from './components/MinuteInfo';
import './styles/components/app.scss';


class App extends React.Component {
 constructor(props) {
   super(props)
   
   this.json = require('./service/data.json');

   this.state = {
      data: {}
   }
 }

 componentDidMount() {
  console.log(this.json)
   this.setState({
      data: this.json
   })
 }

 render() {
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
              <Route exact path='/' render={RouterProps => (
                <LiveInfo />
              )}>
              </Route>
              <Route path='/minute' render={RouterProps => (
                <MinuteInfo />    
              )}>
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
