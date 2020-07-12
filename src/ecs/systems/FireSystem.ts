import { system } from "../system";
import { world } from "../world";
import { body } from "../components/body";
import { Fire } from "../components/Fire";

export class FireSystem extends system
{
    update(w : world)
    {
        if(window['fireSound'])
        {
            window['fireSound'] = false;
            
            window['sounds'].fire.play();
        }
        
        for(const p of w.getEntitiesWith('AIPlayer'))
        {
            const pb : body = <body>w.getComponentForEntity(p, 'body');
            
            if(pb.velocity.X == 0 && pb.velocity.Y == 0)
            {
                continue;
            }
            
            for(const e of w.getEntitiesWith('Fire'))
            {
                const f : Fire = <Fire>w.getComponentForEntity(e, 'Fire');
                
                if((--f.countdown) != 0)
                {
                    continue;
                }
                
                const b : body = <body>w.getComponentForEntity(e, 'body');
                
                const arr = [
                    b.index - 1,
                    b.index + 1,
                    b.index - 40,
                    b.index + 40,
                ];
                
                const map = window['maps'][window['tiles'].currentMap];
                
                for(const i of arr)
                {
                    if(map.layers[1].data[i] == 11)
                    {
                        map.layers[1].data[i] = 22;
                    }
                    else if(map.layers[1].data[i] == 22)
                    {
                        map.layers[1].data[i] = 5;
                    }
                }
                
                b.position.X = -512;
                b.position.Y = -512;
                window['tiles'].index[b.index] = 0;
            }
        }
    }
}
