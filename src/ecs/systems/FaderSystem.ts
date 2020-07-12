import { system } from "../system";
import { world } from "../world";
import { Fader } from "../components/Fader";

export class FaderSystem extends system
{
    update(w : world)
    {
        let f : Fader;
        const denom = 0.01;
        
        for(f of w.get('Fader'))
        {
            if(!f.active)
            {
                continue;
            }
            
            if(f.direction)
            {
                if(f.faded < 1)
                {
                    f.faded += denom;
                }
                else
                {
                    w.nextScene = f.nextScene;
                }
            }
            else
            {
                if(f.faded > 0)
                {
                    f.faded -= denom;
                }
                else
                {
                    f.active = false;
                    f.direction = true;
                }
            }
        }
    }
}
