//Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, keyL, keyR, keyF) {
        super(scene, x, y, texture, frame);

        // add obj to existing scene
        scene.add.existing(this);
        this.isFiring = false;
        this.moveSpeed = 5 ;

        // add rocket sfx
        this.sfxRocket = scene.sound.add('sfx_rocket');

        // store control keys
        this.keyLft = keyL;
        this.keyRht = keyR;
        this.keyFire = keyF;
    }

    update() {
        // l/r movement
        if (!this.isFiring) {
            if (this.keyLft.isDown && this.x >= borderUISize + this.width) {
                this.x -= this.moveSpeed;
            } else if (this.keyRht.isDown && this.x <= game.config.width - borderUISize - this.width) {
                this.x += this.moveSpeed;
            }
        }

        // fire
        if (Phaser.Input.Keyboard.JustDown(this.keyFire) && !this.isFiring) {
            this.isFiring = true;
            this.sfxRocket.play();
        }

        // firing up
        if (this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
            this.y -= this.moveSpeed;
        }

        // miss reset
        if (this.y <= borderUISize * 3 + borderPadding) {
            this.reset();
        }
    }

    reset() {
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding;
    }
}