import { system } from "../system";
import { world } from "../world";
import { sprite } from "../components/sprite";
import { body } from "../components/body";
import { v2d } from "../../v2d";
import { TileMap } from "../components/TileMap";
import { i } from "../../i";
import { TextC } from "../components/TextC";
import { Fader } from "../components/Fader";

export class DrawSystem extends system
{
    update(w : world)
    {
        w.canvas.ctx.clearRect(0, 0, w.canvas.element.width, w.canvas.element.height);
        
        const zoom = w.canvas.zoom * w.canvas.cam.zoom;
        
        w.canvas.ctx.imageSmoothingEnabled = false;
        
        for(const e of w.getEntitiesWith('TileMap'))
        {
            const t : TileMap = <TileMap>w.getComponentForEntity(e, 'TileMap');
            const b : body = <body>w.getComponentForEntity(e, 'body');
            const size : v2d = new v2d();
            
            for(const layer of t.data.layers)
            {
                if(layer.type != 'tilelayer')
                {
                    continue;
                }
                
                size.Y = layer.height;
                size.X = layer.data.length / size.Y;
                
                for(let y = 0; y < size.Y; y++)
                {
                    for(let x = 0; x < size.X; x++)
                    {
                        const index = x + (y * size.X);
                        let key = layer.data[index];
                        
                        if(key == 0)
                        {
                            continue;
                        }
                        
                        key--;
                        
                        const frame : v2d = new v2d();
                        frame.X = key % 4;
                        frame.Y = Math.floor(key / 4);
                        
                        w.canvas.ctx.drawImage(
                            i(t.data.tilesets[0].name),
                            frame.X * 8,
                            frame.Y * 8,
                            8,
                            8,
                            (b.position.X + (x * 8)) * zoom,
                            (b.position.Y + (y * 8)) * zoom,
                            8 * zoom,
                            8 * zoom
                        );
                    }
                }
            }
        }
        
        for(const e of w.getEntitiesWith('sprite'))
        {
            const b : body = <body>w.getComponentForEntity(e, 'body');
            const s : sprite = <sprite>w.getComponentForEntity(e, 'sprite');
            
            const frame : v2d = v2d.create(
                s.sheet.animations[s.animationID][s.frameID][0],
                s.sheet.animations[s.animationID][s.frameID][1]
            );
            
            w.canvas.ctx.drawImage(
                s.sheet.asset,
                frame.X * s.sheet.tilesize.X,
                frame.Y * s.sheet.tilesize.Y,
                s.sheet.tilesize.X,
                s.sheet.tilesize.Y,
                (b.position.X) * zoom,
                (b.position.Y) * zoom,
                s.sheet.tilesize.X * zoom,
                s.sheet.tilesize.Y * zoom
            );
        }
        
        w.canvas.ctx.font = `${zoom * 8}px PressStart2P`;
        for(const e of w.getEntitiesWith('TextC'))
        {
            const b : body = <body>w.getComponentForEntity(e, 'body');
            const t : TextC = <TextC>w.getComponentForEntity(e, 'TextC');
            
            let message : string[] = t.message.split('\n');
            
            let i = -1;
            for(const line of message)
            {
                i++;
                
                if(line == '')
                {
                    continue;
                }
                
                w.canvas.ctx.fillStyle = 'rgba(0, 0, 0, 0.9)';
                w.canvas.ctx.fillRect(
                    (b.position.X - 2) * zoom,
                    (b.position.Y - 2 + (12 * i)) * zoom,
                    (320 - (2 * b.position.X) + 4) * zoom,
                    12 * zoom
                );
                
                w.canvas.ctx.fillStyle = t.color;
                
                w.canvas.ctx.fillText(
                    line,
                    b.position.X * zoom,
                    (b.position.Y + 8 + (12 * i)) * zoom
                );
            }
        }
        
        let f : Fader;
        for(f of w.get('Fader'))
        {
            if(!f.active)
            {
                continue;
            }
            
            w.canvas.ctx.fillStyle = `rgba(0, 0, 0, ${Math.round(f.faded * 5) / 5})`;
            w.canvas.ctx.fillRect(
                0,
                0,
                320 * zoom,
                180 * zoom
            );
        }
    }
}
