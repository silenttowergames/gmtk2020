import { world } from "../world";
import { body } from "../components/body";
import { v2d } from "../../v2d";

export class MoveSystem
{
    update(w : world)
    {
        let b : body;
        
        for(b of w.get('body'))
        {
            if(b.velocity.X == 0 && b.velocity.Y == 0)
            {
                continue;
            }
            
            const tempPos = new v2d();
            tempPos.X = b.position.X + b.velocity.X;
            tempPos.Y = b.position.Y + b.velocity.Y;
            const tempIndex = (tempPos.X / 8) + Math.floor(((tempPos.Y - 12) / 8) * (320 / 8));
            
            if(window['tiles'].index[tempIndex])
            {
                b.velocity.X = 0;
                b.velocity.Y = 0;
                
                continue;
            }
            
            window['tiles'].index[b.index] = 0;
            
            b.position.X += b.velocity.X;
            b.position.Y += b.velocity.Y;
            
            b.index = (b.position.X / 8) + Math.floor(((b.position.Y - 12) / 8) * (320 / 8));
            window['tiles'].index[b.index] = 1;
            
            b.velocity.X = 0;
            b.velocity.Y = 0;
        }
    }
}
