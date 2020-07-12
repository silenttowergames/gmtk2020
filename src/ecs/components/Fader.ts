import { component } from "../component";

export class Fader extends component
{
    static create(nextScene : string)
    {
        const f : Fader = new Fader();
        
        f.nextScene = nextScene;
        
        return f;
    }
    
    class()
    {
        return 'Fader';
    }
    
    active : boolean = true;
    direction : boolean = false;
    faded : number = 1;
    nextScene : string;
}
