namespace WataGame {
    export class Game extends Phaser.Game {

        public constructor() {
            super(Global.GAME_WIDTH, Global.GAME_HEIGHT, Phaser.AUTO, "content");
            
            //states
            this.state.add("Boot", Boot);
            this.state.add("Preload", Preload);
            this.state.add("Play", Play);
            
            // start 
            this.state.start("Boot");
        }
    }
}