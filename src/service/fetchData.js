const JSON = require('./data.json');

class fetchData {
  constructor () {
    this.data = JSON;
  }

  fetch() {
    return new Promise(resolve => {
      resolve(this.data)
    })
  }
}

export default fetchData;