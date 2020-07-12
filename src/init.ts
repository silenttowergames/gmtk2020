import { canvas } from "./canvas";
import { world } from "./ecs/world";
import { SpriteSheet } from "./rendering/SpriteSheet";
import { v2d } from "./v2d";
import { body } from "./ecs/components/body";
import { sprite } from "./ecs/components/sprite";
import { DrawSystem } from "./ecs/systems/DrawSystem";
import { AnimationSystem } from "./ecs/systems/AnimationSystem";
import { input } from "./input";
import { MoveSystem } from "./ecs/systems/MoveSystem";
import { AIPlayer } from "./ecs/components/AIPlayer";
import { AIPlayerSystem } from "./ecs/systems/AIPlayerSystem";
import { TileMap } from "./ecs/components/TileMap";
import { TextC } from "./ecs/components/TextC";

function init() : void
{
    const c : canvas = canvas.create('c', 320, 180);
    
    let w : world;
    
    const spriteSheets : Array<SpriteSheet> = [
        SpriteSheet.create("8x8", v2d.create(8, 8), {
            protagLeft: [
                [ 0, 0, 0, ],
            ],
            
            protagRight: [
                [ 1, 0, 0, ],
            ],
            
            weed: [
                [ 2, 1, 15, ],
                [ 3, 1, 15, ],
                [ 0, 2, 15, ],
                [ 1, 2, 15, ],
            ],
            
            corn: [
                [ 2, 2, 0, ],
            ],
            
            fire: [
                [ 0, 3, 5, ],
                [ 1, 3, 5, ],
                [ 2, 3, 5, ],
                [ 3, 3, 5, ],
            ],
        }),
        
        SpriteSheet.create("endcard", v2d.create(320, 180), {
            only: [
                [ 0, 0, 0, ],
            ],
        }),
    ];
    
    const scenes = {
        firstScene: () => {
            let entity : number;
            
            entity = w.new();
            w.add(entity, TileMap.create('farm1'));
            w.add(entity, body.create(0, 12));
            
            entity = w.new();
            w.add(entity, new AIPlayer());
            w.add(entity, body.create(24 * 8, (14 * 8) + 12));
            w.add(entity, sprite.create(spriteSheets[0], 'protagLeft'));
            
            entity = w.new();
            w.add(entity, body.create(2, 2));
            w.add(entity, TextC.create(`Spring 1953`));
            
            entity = w.new();
            w.add(entity, body.create(320 - 128, 2));
            w.add(entity, TextC.create(`Seed [X] Dig [C]`));
        },
        
        secondScene: () => {
            let entity : number;
            
            entity = w.new();
            w.add(entity, body.create(0, 12));
            w.add(entity, sprite.create(spriteSheets[0], 'fire'));
        },
    };
    
    let nextScene = null;
    
    const loop = setInterval(() => {
        if((w == null && (nextScene = 'firstScene')) || (w.nextScene != null && (nextScene = w.nextScene)))
        {
            w = newWorld(c);
            
            w.spriteSheets = spriteSheets;
            
            scenes[nextScene]();
            
            nextScene = null;
        }
        
        if(w.focused)
        {
            w.progress();
            
            input.update();
        }
    }, 1000 / 60);
    
    document.addEventListener('focus', () => w.focused = true);
    document.addEventListener('blur', () => w.focused = false);
    
    input.init();
}

function newWorld(c : canvas) : world
{
    const w : world = world.create();
    
    w.canvas = c;
    w.systems.push(new AIPlayerSystem());
    w.systems.push(new MoveSystem());
    w.systems.push(new AnimationSystem());
    w.systems.push(new DrawSystem());
    
    return w;
}

window.addEventListener('load', init);
