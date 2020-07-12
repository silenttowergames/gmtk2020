import { system } from "../system";
import { world } from "../world";
import { body } from "../components/body";
import { input } from "../../input";
import { AIPlayer } from "../components/AIPlayer";
import { sprite } from "../components/sprite";

export class AIPlayerSystem extends system
{
    update(w : world)
    {
        const
            denom = 8,
            threshold = 1
        ;
        
        for(const e of w.getEntitiesWith('AIPlayer'))
        {
            const a : AIPlayer = <AIPlayer>w.getComponentForEntity(+e, 'AIPlayer');
            const b : body = <body>w.getComponentForEntity(+e, 'body');
            const s : sprite = <sprite>w.getComponentForEntity(+e, 'sprite');
            
            if((input.down('ArrowRight') % denom) == threshold)
            {
                b.velocity.X += a.speed;
            }
            
            if((input.down('ArrowLeft') % denom) == threshold)
            {
                b.velocity.X -= a.speed;
            }
            
            if((input.down('ArrowDown') % denom) == threshold)
            {
                b.velocity.Y += a.speed;
            }
            
            if((input.down('ArrowUp') % denom) == threshold)
            {
                b.velocity.Y -= a.speed;
            }
            
            if(b.velocity.X != 0 || b.velocity.Y != 0)
            {
                if(s.animationID == 'protagLeft')
                {
                    s.animationID = 'protagRight';
                }
                else
                {
                    s.animationID = 'protagLeft';
                }
                
                if(b.velocity.X < 0 && b.position.X <= 0)
                {
                    b.velocity.X = 0;
                }
                
                if(b.velocity.X > 0 && b.position.X >= (320 - 8))
                {
                    b.velocity.X = 0;
                }
                
                if(b.velocity.Y < 0 && b.position.Y <= 12)
                {
                    b.velocity.Y = 0;
                }
                
                if(b.velocity.Y > 0 && b.position.Y >= (180 - 8))
                {
                    b.velocity.Y = 0;
                }
            }
        }
    }
}
