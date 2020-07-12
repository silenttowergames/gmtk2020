import { system } from "../system";
import { world } from "../world";
import { sprite } from "../components/sprite";
import { body } from "../components/body";
import { v2d } from "../../v2d";
import { TileMap } from "../components/TileMap";
import { i } from "../../i";

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
            const s : sprite = <sprite>w.getComponentForEntity(e, 'sprite');
            const b : body = <body>w.getComponentForEntity(e, 'body');
            
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
        w.canvas.ctx.fillStyle = '#999';
        w.canvas.ctx.fillText(
            'Spring 1953',
            2 * zoom,
            10 * zoom
        );
    }
}
