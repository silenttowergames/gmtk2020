import { v2d } from "../../v2d";
import { component } from "../component";

export class body extends component
{
    static create(X : number, Y : number, isSolid : boolean = true) : body
    {
        const b = new body();
        
        b.position = v2d.create(X, Y);
        b.velocity = new v2d();
        
        if(isSolid)
        {
            b.index = (b.position.X / 8) + Math.floor(((b.position.Y - 12) / 8) * (320 / 8));
            
            window['tiles'].index[b.index] = 1;
        }
        
        return b;
    }
    
    class()
    {
        return 'body';
    }
    
    index : number;
    position : v2d;
    velocity : v2d;
}
