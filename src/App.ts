namespace WataGame {
    export class Global {
        
        static game: Phaser.Game;
        static GAME_WIDTH: number = 1024;
        static GAME_HEIGHT: number = 640;
    }
}

window.onload = function () {
    WataGame.Global.game = new WataGame.Game();
};