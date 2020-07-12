import { component } from "../component";

export class AIPlayer extends component
{
    class()
    {
        return 'AIPlayer';
    }
    
    actNow : boolean = false;
    speed : number = 8;
}
