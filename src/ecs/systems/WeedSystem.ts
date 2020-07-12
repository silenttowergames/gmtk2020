import { system } from "../system";
import { world } from "../world";
import { body } from "../components/body";
import { input } from "../../input";

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
                
                window['tiles'].index[b.index] = 0;
                
                remove.push(e);
            }
        }
        
        for(const e of remove)
        {
            w.remove(e);
        }
    }
}
