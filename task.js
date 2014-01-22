var spawn = require('child_process').spawn
  , task  = process.argv[2]

  console.log(task)

if (task === 'build') {
  spawn('zip' , ['-r', 'app.nw', 'src', 'package.json'], {stdio: 'inherit'})
}
