import { component } from "../component";

export class TextC extends component
{
    static create(message : string) : TextC
    {
        const t : TextC = new TextC();
        
        t.message = message;
        
        return t;
    }
    
    class()
    {
        return 'TextC';
    }
    
    message : string;
}
