class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/explosion38.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
    }

    create() {
        //this.add.text(20, 20, "Rocket Patrol Menu");
        //this.scene.start("playScene");

        // text config
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#c426e0',
            color: '#1c0e1f',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        // menu text
        this.add.text(game.config.width/2, game.config.height/2 - 2*(borderUISize + borderPadding), 'ROCKET PATROL', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 - (borderUISize + borderPadding), 'P1: Use <--> arrows to move', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, '& ^ arrow to fire', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'P2: Use A/D to move & W to fire', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#FFA54C';
        menuConfig.color = '#000';
        this.add.text(game.config.width/2, game.config.height/2 + 2*(borderUISize + borderPadding), '<- for 1 Player or -> for 2 Player', menuConfig).setOrigin(0.5);
        
        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            // 1 player
            game.settings = {
                spaceshipSpeed: 4,
                gameTimer: 45000,
                players: 1
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene');    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            // 2 player
            game.settings = {
                spaceshipSpeed: 6,
                gameTimer: 60000,
                players: 2 
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene');    
        }
    }
}