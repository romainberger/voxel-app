var spawn = require('child_process').spawn
  , task  = process.argv[2]

if (task === 'build') {
  spawn('zip' , ['-r', 'app.nw', 'src', 'package.json'], {stdio: 'inherit'})
}
