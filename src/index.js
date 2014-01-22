'use strict';

var voxel = require('voxel')
  , createGame = require('voxel-engine')
  , voxelPlayer = require('voxel-player')

var game = createGame({
    generate: voxel.generator['Valley']
  , chunkDistance: 2
  , materials: ['#fff', '#000']
  , materialFlatColor: true
  , worldOrigin: [0, 0, 0]
  , controls: { discreteFire: true }
})

game.appendTo('#game')

var createPlayer = voxelPlayer(game)
  , player = createPlayer('player.png')
player.possess()
player.position.set(0, 0, 4)

window.addEventListener('keydown', function(e) {
    if (e.keyCode === 'R'.charCodeAt(0)) {
        player.toggle()
    }

    // force exit pointer lock for node-webkit
    if (e.keyCode === 27) {
      document.exitPointerLock = document.exitPointerLock ||
         document.mozExitPointerLock ||
         document.webkitExitPointerLock
      document.exitPointerLock()
    }
})
