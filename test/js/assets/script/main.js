window.gLocalAssetContainer["main"] = function(g) { (function(exports, require, module, __filename, __dirname) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
var click = require("@akashic-extension/akashic-direct-click-plugin");
var hover = require("@akashic-extension/akashic-hover-plugin");
g.game.operationPluginManager.register(hover.HoverPlugin, 1);
g.game.operationPluginManager.register(click.DirectClickPlugin, 2);
g.game.operationPluginManager.start(1);
g.game.operationPluginManager.start(2);
function main(_param) {
    var scene = new g.Scene({ game: g.game });
    scene.onLoad.addOnce(function () {
        var font = new g.DynamicFont({
            game: g.game,
            size: 25,
            fontFamily: "sans-serif"
        });
        var label = new g.Label({
            scene: scene,
            x: 10,
            y: 10,
            text: "Akashicの公式ページに移動",
            fontSize: 20,
            font: font,
            local: true
        });
        var hLabel = hover.Converter.asHoverable(label);
        hLabel.hovered.add(function () {
            label.textColor = "red";
            label.invalidate();
        });
        hLabel.unhovered.add(function () {
            label.textColor = undefined;
            label.invalidate();
        });
        var dLabel = click.Converter.asDirectClickable(label);
        dLabel.clicked.add(function () {
            window.open("https://akashic-games.github.io/", "_blank");
        });
        // const rect =  new g.FilledRect({
        // 	scene,
        // 	width: 200,
        // 	height: 200,
        // 	cssColor: "blue",
        // 	opacity:0.5,
        // 	touchable: true
        // });
        // scene.append(rect);
        scene.append(label);
    });
    g.game.pushScene(scene);
}
exports.main = main;
module.exports = main;

})(g.module.exports, g.module.require, g.module, g.filename, g.dirname);
}