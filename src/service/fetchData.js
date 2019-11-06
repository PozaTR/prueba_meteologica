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

  const service = new fetchData()
    service.fetch().then(response => 
    console.log(response))

export default fetchData;