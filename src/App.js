import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LiveInfo from './components/LiveInfo';
import MinuteInfo from './components/MinuteInfo';
import './styles/components/app.scss';

class App extends React.Component {
 constructor(props) {
   super(props)

   this.state = {

   }
 }

 render() {
   return(
     <div>
       <header></header>
       <main>
         <React.Fragment>
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
         </React.Fragment>
       </main>
       <footer></footer>
     </div>
   )
 }
}

export default App;
