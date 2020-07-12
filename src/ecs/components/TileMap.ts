import { component } from "../component";

export class TileMap extends component
{
    static create(name : string) : TileMap
    {
        const t = new TileMap();
        
        t.data = window['maps'][name];
        window['tiles'].currentMap = name;
        
        let i = -1;
        for(const tile of t.data.layers[1].data)
        {
            i++;
            
            if(window['tiles'].solids.indexOf(tile) == -1)
            {
                continue;
            }
            
            window['tiles'].index[i] = tile;
        }
        
        return t;
    }
    
    class()
    {
        return 'TileMap';
    }
    
    data;
}
