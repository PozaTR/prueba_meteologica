import { reject } from 'q';

const JSON = require('./data.json');

class fetchData {
  constructor () {
    this.data = JSON;
    this.count = 0
  }

  fetch() {
    return new Promise(resolve => {
      const power = this.data.power.values[this.count]
      const temperature =this.data.temperature.values[this.count]

      const response = {
        power: {
          unit: this.data.power.unit,
          value: power.value,
          time: power.time 
        },
        temperature: {
          unit: 'C',  
          value: this._dkToC(temperature.value),
          time: temperature.time
        }
      };

      this.count++

      resolve(response)
    })
  }

  _dkToC(dkValue) {
    return ((dkValue / 10) - 273).toFixed(2)
  }
}

export default fetchData;