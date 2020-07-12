(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("farm9",
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
         "data":[20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 0, 20, 20, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 20, 20, 0, 20, 20, 20, 0, 20, 20, 0, 0, 0, 0, 0, 0, 0, 0, 21, 21, 21, 21, 21, 21, 18, 18, 21, 21, 21, 21, 21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 20, 20, 0, 20, 20, 20, 20, 20, 20, 0, 0, 0, 0, 0, 0, 21, 21, 21, 4, 4, 4, 4, 4, 4, 18, 18, 4, 4, 4, 4, 4, 4, 21, 21, 21, 0, 0, 0, 0, 0, 0, 20, 20, 20, 20, 20, 0, 20, 0, 0, 0, 0, 0, 21, 21, 4, 4, 4, 4, 4, 4, 4, 4, 4, 18, 18, 4, 4, 4, 4, 4, 4, 4, 4, 4, 21, 21, 0, 0, 0, 0, 0, 20, 0, 20, 20, 20, 0, 0, 0, 0, 0, 21, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 18, 18, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 21, 0, 0, 0, 0, 0, 20, 20, 20, 0, 0, 0, 0, 0, 21, 4, 4, 21, 21, 4, 4, 4, 4, 21, 21, 21, 21, 18, 18, 21, 21, 21, 21, 4, 4, 4, 4, 4, 4, 4, 4, 21, 0, 0, 0, 0, 0, 20, 20, 0, 0, 0, 0, 0, 21, 4, 4, 21, 4, 4, 4, 21, 21, 0, 0, 0, 0, 18, 18, 0, 0, 0, 0, 21, 21, 4, 4, 4, 21, 21, 4, 21, 0, 0, 0, 0, 0, 20, 20, 0, 0, 0, 0, 21, 4, 4, 4, 4, 4, 4, 21, 0, 0, 0, 18, 18, 18, 21, 18, 18, 18, 18, 0, 0, 0, 21, 4, 4, 4, 21, 4, 4, 21, 0, 0, 0, 0, 20, 20, 0, 0, 0, 0, 21, 4, 4, 4, 4, 4, 21, 0, 0, 0, 0, 18, 22, 6, 21, 21, 6, 22, 18, 0, 0, 0, 0, 21, 4, 4, 4, 4, 4, 21, 0, 0, 0, 0, 20, 20, 0, 0, 0, 0, 21, 4, 4, 4, 4, 4, 21, 0, 0, 0, 0, 18, 21, 21, 21, 21, 21, 21, 18, 0, 0, 0, 0, 21, 4, 4, 4, 4, 4, 21, 0, 0, 0, 0, 20, 20, 0, 0, 0, 21, 4, 4, 4, 4, 4, 21, 0, 0, 0, 0, 0, 18, 22, 6, 21, 21, 6, 22, 18, 0, 0, 0, 0, 0, 21, 4, 4, 4, 4, 4, 21, 0, 0, 0, 20, 20, 0, 0, 0, 21, 4, 4, 4, 4, 4, 21, 0, 0, 0, 0, 0, 18, 18, 18, 21, 21, 18, 18, 18, 0, 0, 0, 0, 0, 21, 4, 4, 4, 4, 4, 21, 0, 0, 0, 20, 20, 0, 0, 0, 21, 4, 4, 4, 4, 4, 21, 0, 0, 0, 0, 0, 18, 22, 6, 21, 21, 6, 22, 18, 0, 0, 0, 0, 0, 21, 4, 4, 4, 4, 4, 21, 0, 0, 0, 20, 20, 0, 0, 0, 21, 4, 4, 4, 4, 21, 0, 0, 0, 0, 0, 0, 18, 21, 21, 21, 21, 21, 21, 18, 0, 0, 0, 0, 0, 0, 21, 4, 4, 4, 4, 21, 0, 0, 0, 20, 20, 0, 0, 0, 21, 4, 4, 4, 4, 21, 0, 0, 0, 0, 0, 0, 18, 22, 6, 21, 21, 6, 22, 18, 0, 0, 0, 0, 0, 0, 21, 4, 4, 4, 4, 21, 0, 0, 0, 20, 20, 0, 0, 0, 21, 4, 4, 4, 4, 21, 0, 0, 0, 0, 0, 0, 18, 18, 18, 21, 21, 18, 18, 18, 0, 0, 0, 0, 0, 0, 21, 4, 4, 4, 4, 21, 0, 0, 0, 20, 20, 0, 0, 0, 21, 4, 4, 4, 4, 21, 0, 0, 0, 0, 0, 0, 18, 22, 6, 6, 6, 6, 22, 18, 0, 0, 0, 0, 0, 0, 21, 4, 4, 4, 4, 21, 0, 0, 0, 20, 20, 20, 20, 0, 21, 4, 4, 4, 4, 21, 0, 0, 0, 0, 0, 0, 18, 18, 18, 18, 18, 18, 18, 18, 0, 0, 0, 0, 0, 0, 21, 4, 4, 4, 4, 21, 0, 20, 20, 20, 20, 0, 20, 5, 21, 4, 4, 4, 4, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 4, 4, 4, 4, 21, 5, 20, 0, 20, 20, 20, 20, 20, 21, 4, 4, 4, 4, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 4, 4, 4, 4, 21, 20, 20, 20, 20],
         "height":21,
         "id":2,
         "name":"fg",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":40,
         "x":0,
         "y":0
        }, 
        {
         "draworder":"topdown",
         "id":4,
         "name":"objects",
         "objects":[
                {
                 "gid":9,
                 "height":8,
                 "id":109,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":8,
                 "x":184,
                 "y":80
                }, 
                {
                 "gid":9,
                 "height":8,
                 "id":110,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":8,
                 "x":128,
                 "y":80
                }, 
                {
                 "gid":9,
                 "height":8,
                 "id":111,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":8,
                 "x":128,
                 "y":96
                }, 
                {
                 "gid":9,
                 "height":8,
                 "id":112,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":8,
                 "x":184,
                 "y":96
                }, 
                {
                 "gid":9,
                 "height":8,
                 "id":113,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":8,
                 "x":184,
                 "y":112
                }, 
                {
                 "gid":9,
                 "height":8,
                 "id":114,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":8,
                 "x":128,
                 "y":112
                }, 
                {
                 "gid":9,
                 "height":8,
                 "id":115,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":8,
                 "x":128,
                 "y":128
                }, 
                {
                 "gid":9,
                 "height":8,
                 "id":116,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":8,
                 "x":128,
                 "y":144
                }, 
                {
                 "gid":9,
                 "height":8,
                 "id":117,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":8,
                 "x":184,
                 "y":144
                }, 
                {
                 "gid":9,
                 "height":8,
                 "id":122,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":8,
                 "x":152,
                 "y":24
                }, 
                {
                 "gid":9,
                 "height":8,
                 "id":123,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":8,
                 "x":160,
                 "y":24
                }, 
                {
                 "gid":9,
                 "height":8,
                 "id":124,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":8,
                 "x":160,
                 "y":56
                }, 
                {
                 "gid":9,
                 "height":8,
                 "id":125,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":8,
                 "x":152,
                 "y":56
                }, 
                {
                 "gid":9,
                 "height":8,
                 "id":126,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":8,
                 "x":184,
                 "y":128
                }],
         "opacity":1,
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }],
 "nextlayerid":5,
 "nextobjectid":127,
 "orientation":"orthogonal",
 "properties":[
        {
         "name":"nextScene",
         "type":"string",
         "value":"fifthYearBible"
        }],
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