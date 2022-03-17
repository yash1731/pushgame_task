import {Application, InteractiveTarget, Sprite} from "pixi.js";
import {EventEmitter} from '@pixi/utils';
import buttonTexture from "./button.png";

type InteractiveSprite = Sprite & InteractiveTarget & EventEmitter;

const cornflowerBlue = 0x6495ED;
const gold = 0xFFD700;

// Create the canvas
const app = new Application({backgroundColor: cornflowerBlue});
document.body.appendChild(app.view);

// Create the sprite
const sprite = Sprite.from(buttonTexture) as InteractiveSprite;
sprite.x = Math.random() * (app.renderer.width - 100);
sprite.y = Math.random() * (app.renderer.height - 100);
app.stage.addChild(sprite);

// Add interaction to the sprite
sprite.interactive = true;
sprite.buttonMode = true;
sprite.on("pointerdown", () => {
    app.renderer.backgroundColor = gold;
    app.render();
});

app.render();