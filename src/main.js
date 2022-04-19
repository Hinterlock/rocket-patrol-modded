// Author: Kirsten Lindblad
// Project: Rocket Patrol Mods
// Time: 4/16-4/19 ~8 hours
// Point total: 100
// 30 - simultaneous 2 player mode
// 20 - new, faster ship
// 20 - adding time on successful hits (only in singleplayer, with the new fast ship)
// 20 - new artwork
// 10 - time remaining display
let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}
let game = new Phaser.Game(config);
// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
// reserve keyboard vars
let keyUP, keyW, keyR, keyLEFT, keyRIGHT, keyA, keyD;