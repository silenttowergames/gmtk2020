import { component } from "../component";

export class TextC extends component
{
    static create(message : string, box : boolean = true) : TextC
    {
        const t : TextC = new TextC();
        
        t.box = box;
        t.message = message;
        
        return t;
    }
    
    class()
    {
        return 'TextC';
    }
    
    box : boolean = true;
    color : string = '#999';
    message : string;
}
