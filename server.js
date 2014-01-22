var connect = require('connect')

connect.createServer(
  connect.static('src')
).listen(8080)
console.log('Listening on localhost:8080')
