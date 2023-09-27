const axios = require('axios')

axios.get('https://api.github.com/users/tthayza').then((res) => {
  console.log(res.data)
})
