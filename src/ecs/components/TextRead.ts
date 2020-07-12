import { component } from "../component";

export class TextRead extends component
{
    static create(messages : string[], nextScene : string) : TextRead
    {
        const t = new TextRead();
        
        t.messages = messages;
        t.nextScene = nextScene;
        
        return t;
    }
    
    class()
    {
        return 'TextRead';
    }
    
    messageID : number = 0;
    messages : string[];
    nextScene : string;
    wait : number = 0;
}
