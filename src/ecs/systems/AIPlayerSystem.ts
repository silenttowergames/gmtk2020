import { system } from "../system";
import { world } from "../world";
import { body } from "../components/body";
import { input } from "../../input";
import { AIPlayer } from "../components/AIPlayer";

export class AIPlayerSystem extends system
{
    update(w : world)
    {
        let denom = 10;
        
        for(const e of w.getEntitiesWith('AIPlayer'))
        {
            const a : AIPlayer = <AIPlayer>w.getComponentForEntity(+e, 'AIPlayer');
            const b : body = <body>w.getComponentForEntity(+e, 'body');
            
            if((input.down('ArrowRight') % denom) == 1)
            {
                b.velocity.X += a.speed;
            }
            
            if((input.down('ArrowLeft') % denom) == 1)
            {
                b.velocity.X -= a.speed;
            }
            
            if((input.down('ArrowDown') % denom) == 1)
            {
                b.velocity.Y += a.speed;
            }
            
            if((input.down('ArrowUp') % denom) == 1)
            {
                b.velocity.Y -= a.speed;
            }
        }
    }
}
