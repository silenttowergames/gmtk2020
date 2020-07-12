(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("farm1",
{ "compressionlevel":-1,
 "height":21,
 "infinite":false,
 "layers":[
        {
         "data":[17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17],
         "height":21,
         "id":1,
         "name":"bg",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":40,
         "x":0,
         "y":0
        }, 
        {
         "data":[20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 12, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 20, 20, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 20, 20, 20, 20, 0, 0, 20, 0, 20, 0, 20, 20, 20, 20, 0, 12, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 20, 0, 0, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 20, 0, 12, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 20, 0, 5, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 20, 20, 0, 12, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 20, 0, 5, 0, 20, 20, 20, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 5, 0, 0, 0, 20, 0, 12, 12, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 20, 0, 5, 0, 0, 20, 20, 20, 0, 0, 0, 0, 20, 20, 0, 5, 0, 20, 20, 0, 0, 5, 0, 0, 0, 0, 0, 0, 12, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 20, 0, 0, 5, 0, 0, 0, 0, 0, 20, 0, 20, 20, 0, 0, 0, 0, 0, 20, 20, 0, 5, 0, 0, 0, 0, 20, 0, 12, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 20, 20, 0, 0, 5, 5, 5, 0, 0, 0, 0, 20, 0, 0, 20, 20, 20, 0, 0, 0, 0, 5, 0, 20, 0, 0, 20, 0, 12, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 20, 20, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 20, 0, 5, 0, 0, 0, 0, 20, 0, 12, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 20, 0, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 0, 0, 0, 0, 0, 0, 5, 0, 0, 20, 0, 20, 0, 12, 12, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 20, 0, 0, 20, 20, 20, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 20, 0, 0, 12, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 20, 20, 20, 20, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 5, 5, 0, 0, 0, 0, 5, 0, 0, 0, 0, 20, 20, 0, 12, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 20, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 20, 0, 0, 5, 0, 0, 20, 20, 0, 5, 0, 0, 20, 0, 20, 20, 0, 12, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 20, 0, 0, 5, 5, 5, 5, 5, 5, 5, 0, 0, 20, 20, 0, 5, 0, 20, 20, 20, 0, 5, 0, 0, 0, 0, 0, 20, 0, 12, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 20, 0, 5, 5, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 5, 0, 20, 20, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 12, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 20, 0, 5, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 0, 20, 20, 0, 0, 5, 5, 5, 5, 5, 5, 5, 0, 12, 12, 4, 4, 4, 4, 4, 4, 4, 4, 4, 20, 0, 5, 5, 0, 20, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 4, 4, 4, 4, 4, 4, 4, 4, 4, 20, 0, 5, 0, 0, 20, 20, 0, 20, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 20, 20, 0, 12, 4, 4, 4, 4, 4, 4, 4, 4, 4, 20, 0, 0, 0, 20, 20, 20, 0, 0, 20, 20, 20, 0, 0, 20, 20, 20, 20, 0, 0, 20, 20, 20, 0, 0, 0, 20, 20, 20, 0, 12, 12, 4, 4, 4, 4, 4, 4, 4, 4, 20, 20, 0, 20, 20, 20, 20, 20, 0, 0, 0, 0, 0, 20, 20, 20, 20, 20, 20, 0, 0, 0, 0, 0, 20, 20, 20, 20, 20, 20, 20, 12, 4, 4, 4, 4, 4, 4, 4, 4, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 12, 4, 4, 4, 4, 4, 4, 4, 4],
         "height":21,
         "id":2,
         "name":"fg",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":40,
         "x":0,
         "y":0
        }],
 "nextlayerid":4,
 "nextobjectid":2,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.4.1",
 "tileheight":8,
 "tilesets":[
        {
         "columns":4,
         "firstgid":1,
         "image":"8x8.png",
         "imageheight":48,
         "imagewidth":32,
         "margin":0,
         "name":"8x8",
         "spacing":0,
         "tilecount":24,
         "tileheight":8,
         "tilewidth":8
        }],
 "tilewidth":8,
 "type":"map",
 "version":1.4,
 "width":40
});