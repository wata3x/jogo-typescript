var WataGame;
(function (WataGame) {
    var Global = (function () {
        function Global() {
        }
        Global.GAME_WIDTH = 1024;
        Global.GAME_HEIGHT = 640;
        return Global;
    }());
    WataGame.Global = Global;
})(WataGame || (WataGame = {}));
window.onload = function () {
    WataGame.Global.game = new WataGame.Game();
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var WataGame;
(function (WataGame) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            _super.call(this, WataGame.Global.GAME_WIDTH, WataGame.Global.GAME_HEIGHT, Phaser.AUTO, "content");
            //states
            this.state.add("Boot", WataGame.Boot);
            this.state.add("Preload", WataGame.Preload);
            this.state.add("Play", WataGame.Play);
            // start 
            this.state.start("Boot");
        }
        return Game;
    }(Phaser.Game));
    WataGame.Game = Game;
})(WataGame || (WataGame = {}));
var WataGame;
(function (WataGame) {
    var Boot = (function (_super) {
        __extends(Boot, _super);
        function Boot() {
            _super.apply(this, arguments);
        }
        Boot.prototype.create = function () {
            this.game.state.start("Preload");
        };
        return Boot;
    }(Phaser.State));
    WataGame.Boot = Boot;
})(WataGame || (WataGame = {}));
var WataGame;
(function (WataGame) {
    var Play = (function (_super) {
        __extends(Play, _super);
        function Play() {
            _super.apply(this, arguments);
        }
        Play.prototype.create = function () {
            this.stage.backgroundColor = 0x80FF80;
        };
        Play.prototype.update = function () {
        };
        return Play;
    }(Phaser.State));
    WataGame.Play = Play;
})(WataGame || (WataGame = {}));
var WataGame;
(function (WataGame) {
    var Preload = (function (_super) {
        __extends(Preload, _super);
        function Preload() {
            _super.apply(this, arguments);
            //ready for game
            this._ready = false;
        }
        Preload.prototype.preload = function () {
        };
        Preload.prototype.create = function () {
        };
        Preload.prototype.update = function () {
            //run only once
            if (this._ready === false) {
                this._ready = true;
                this.game.state.start("Play");
            }
        };
        return Preload;
    }(Phaser.State));
    WataGame.Preload = Preload;
})(WataGame || (WataGame = {}));
//# sourceMappingURL=game.js.map