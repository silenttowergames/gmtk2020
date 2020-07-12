import { system } from "../system";
import { world } from "../world";
import { TextRead } from "../components/TextRead";
import { TextC } from "../components/TextC";
import { input } from "../../input";

export class TextReadSystem extends system
{
    update(w : world)
    {
        let f = w.get('Fader');
        
        if(!f.length)
        {
            return;
        }
        
        f = f[0];
        
        if(f.active)
        {
            return;
        }
        
        for(const e of w.getEntitiesWith('TextRead'))
        {
            const r : TextRead = <TextRead>w.getComponentForEntity(e, 'TextRead');
            const t : TextC = <TextC>w.getComponentForEntity(e, 'TextC');
            
            if(r.messageID >= r.messages.length)
            {
                if(r.nextScene)
                {
                    f.nextScene = r.nextScene;
                    f.active = true;
                }
                
                continue;
            }
            
            let message = r.messages[r.messageID];
            
            if(message.substr(0, 1) == 'p')
            {
                t.color = '#76428A';
                
                message = message.substr(1);
            }
            else if(message.substr(0, 1) == 'r')
            {
                t.color = '#551111';
                
                message = message.substr(1);
            }
            else
            {
                t.color = '#999';
            }
            
            if(t.message.length == message.length)
            {
                if(
                    input.down(' ') == 1
                    ||
                    input.down('x') == 1
                    ||
                    input.down('c') == 1
                    ||
                    input.down('v') == 1
                    ||
                    input.down('Enter') == 1
                )
                {
                    t.message = '';
                    r.messageID++;
                    this.slowmo = false;
                }
                
                continue;
            }
            
            if(r.wait > 0)
            {
                r.wait--;
            }
            else
            {
                r.wait = this.slowmo ? 3 : 1;
                
                const char : string = message.substr(t.message.length, 1);
                
                if(char == '\n')
                {
                    r.wait = 10;
                }
                else if(char == '\t')
                {
                    this.slowmo = true;
                }
                else if(t.message.length % 2 == 0)
                {
                    window['sounds'][`text${Math.round(Math.random() * 2) + (t.color == '#551111' ? 3 : 0)}`].play();
                }
                
                t.message += char;
            }
        }
    }
    
    private slowmo : boolean = false;
}
