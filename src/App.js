import React from 'react';
import LiveInfo from './components/LiveInfo';
import MinuteInfo from './components/MinuteInfo';
import './styles/app.scss';

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
            <LiveInfo />
            <MinuteInfo />
         </React.Fragment>
       </main>
       <footer></footer>
     </div>
   )
 }
}

export default App;
