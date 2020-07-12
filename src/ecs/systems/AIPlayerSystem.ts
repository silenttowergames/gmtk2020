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
            let acted : boolean = false;
            let dug : boolean = false;
            let water : boolean = false;
            
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
            
            const ia = [
                b.index - 1,
                b.index + 0,
                b.index + 1,
                
                b.index - 1 - 40,
                b.index + 0 - 40,
                b.index + 1 - 40,
                
                b.index - 1 + 40,
                b.index + 0 + 40,
                b.index + 1 + 40,
            ];
            
            if(input.down('x') > 0)
            {
                for(const i of ia)
                {
                    if(window['maps'][window['tiles'].currentMap].layers[1].data[i] == 5)
                    {
                        window['maps'][window['tiles'].currentMap].layers[1].data[i] = 6;
                        
                        acted = true;
                        
                        dug = true;
                    }
                }
            }
            
            if(input.down('c') > 0)
            {
                for(const i of ia)
                {
                    if(
                        window['maps'][window['tiles'].currentMap].layers[1].data[i] == 12
                        ||
                        window['maps'][window['tiles'].currentMap].layers[1].data[i] == 0
                    )
                    {
                        window['maps'][window['tiles'].currentMap].layers[1].data[i] = 18;
                        
                        acted = true;
                        
                        a.actNow = false;
                    }
                }
            }
            
            // c = kerosene
            
            if(dug)
            {
                window['sounds'][`plant${Math.round(Math.random() * 2)}`].play();
            }
            
            if(b.velocity.X != 0 || b.velocity.Y != 0)
            {
                acted = true;
                
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
            
            if(acted)
            {
                if(a.actNow)
                {
                    let i = -1;
                    for(const w of window['maps'][window['tiles'].currentMap].layers[1].data)
                    {
                        i++;
                        
                        if(w != 4 && w != 19)
                        {
                            continue;
                        }
                        
                        // Live Quietly And Work With Your Own Hands
                        // 
                        
                        const wia = [
                            i - 1,
                            i + 0,
                            i + 1,
                            
                            i + 0 - 40,
                            
                            i + 0 + 40,
                        ];
                        
                        for(const j of wia)
                        {
                            if(window['maps'][window['tiles'].currentMap].layers[1].data[j] == 18)
                            {
                                window['maps'][window['tiles'].currentMap].layers[1].data[j] = 19;
                                
                                water = true;
                            }
                            else if(window['maps'][window['tiles'].currentMap].layers[1].data[j] == 6)
                            {
                                window['maps'][window['tiles'].currentMap].layers[1].data[j] = 11;
                                
                                water = true;
                            }
                        }
                    }
                }
                
                a.actNow = !a.actNow;
                
                window['maps'][window['tiles'].currentMap].properties;
                
                if(
                    (window['maps'][window['tiles'].currentMap].layers[1].data.indexOf(5) == -1)
                    &&
                    (window['maps'][window['tiles'].currentMap].layers[1].data.indexOf(6) == -1)
                )
                {
                    for(const property of window['maps'][window['tiles'].currentMap].properties)
                    {
                        if(property.name != 'nextScene')
                        {
                            continue;
                        }
                        
                        w.nextScene = property.value;
                    }
                    
                    if(w.nextScene == null)
                    {
                        throw new Error('No next scene!');
                    }
                    
                    window['sounds'].won.play();
                }
            }
            
            if(water && !dug)
            {
                window['sounds'].water.play();
            }
        }
    }
}
