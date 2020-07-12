import { system } from "../system";
import { world } from "../world";
import { body } from "../components/body";
import { input } from "../../input";
import { v2d } from "../../v2d";
import { sprite } from "../components/sprite";
import { Fire } from "../components/Fire";

export class WeedSystem extends system
{
    update(w : world)
    {
        if(input.down('v') != 1)
        {
            return;
        }
        
        const remove = [];
        
        for(const p of w.getEntitiesWith('AIPlayer'))
        {
            const pb : body = <body>w.getComponentForEntity(p, 'body');
            
            for(const e of w.getEntitiesWith('Weed'))
            {
                const b : body = <body>w.getComponentForEntity(e, 'body');
                
                if(
                    Math.abs(b.position.X - pb.position.X) > 8
                    ||
                    Math.abs(b.position.Y - pb.position.Y) > 8
                )
                {
                    continue;
                }
                
                const entity = w.new();
                w.add(entity, body.create(b.position.X, b.position.Y));
                w.add(entity, sprite.create(w.spriteSheets[0], 'fire'));
                w.add(entity, new Fire());
                
                window['fireSound'] = true;
                
                b.position = v2d.create(-512, -512);
            }
        }
        
        for(const e of remove)
        {
            w.remove(e);
        }
    }
}
