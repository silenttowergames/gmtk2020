(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("farm7",
{ "compressionlevel":-1,
 "editorsettings":
    {
     "export":
        {
         "target":"."
        }
    },
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
         "data":[20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 12, 12, 12, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 20, 20, 20, 20, 20, 20, 20, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 12, 12, 12, 12, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 20, 20, 20, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 20, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 20, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 12, 12, 12, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 20, 0, 0, 11, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 20, 0, 0, 0, 0, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 4, 4, 4, 4, 4, 4, 4, 4, 4, 20, 0, 0, 22, 0, 0, 0, 22, 0, 0, 20, 0, 0, 20, 0, 0, 20, 0, 0, 20, 0, 0, 20, 0, 0, 0, 0, 0, 0, 12, 12, 12, 4, 4, 4, 4, 4, 4, 4, 4, 20, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 4, 4, 4, 4, 4, 4, 20, 0, 0, 11, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 12, 4, 4, 4, 4, 4, 20, 0, 0, 0, 0, 11, 0, 0, 0, 0, 20, 0, 0, 20, 0, 0, 20, 0, 0, 20, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 12, 4, 4, 4, 20, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 4, 4, 20, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 4, 4, 20, 20, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 4, 4, 20, 20, 20, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 21, 21, 20, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 4, 4, 20, 20, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 20, 20, 21, 21, 21, 0, 0, 0, 0, 0, 0, 0, 12, 12, 4, 4, 20, 20, 20, 20, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 21, 21, 20, 20, 20, 21, 21, 0, 0, 0, 0, 0, 0, 0, 12, 12, 4, 4, 20, 20, 20, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 20, 20, 20, 20, 21, 21, 0, 0, 0, 0, 0, 0, 0, 12, 12, 4, 4, 20, 20, 20, 20, 20, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 21, 21, 20, 20, 20, 20, 20, 21, 21, 0, 0, 0, 0, 0, 0, 12, 12, 4, 4, 20, 20, 20, 20, 20, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 20, 20, 20, 20, 20, 20, 20, 21, 21, 0, 0, 0, 0, 0, 12, 12, 4, 4, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 12, 12, 4, 4],
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
                 "id":23,
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
                 "id":25,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":8,
                 "x":184,
                 "y":72
                }, 
                {
                 "gid":9,
                 "height":8,
                 "id":26,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":8,
                 "x":168,
                 "y":56
                }, 
                {
                 "gid":9,
                 "height":8,
                 "id":27,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":8,
                 "x":168,
                 "y":48
                }, 
                {
                 "gid":9,
                 "height":8,
                 "id":28,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":8,
                 "x":152,
                 "y":32
                }, 
                {
                 "gid":9,
                 "height":8,
                 "id":29,
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
                 "id":30,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":8,
                 "x":56,
                 "y":72
                }, 
                {
                 "gid":9,
                 "height":8,
                 "id":31,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":8,
                 "x":56,
                 "y":56
                }, 
                {
                 "gid":9,
                 "height":8,
                 "id":32,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":8,
                 "x":40,
                 "y":64
                }, 
                {
                 "gid":9,
                 "height":8,
                 "id":33,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":8,
                 "x":40,
                 "y":48
                }, 
                {
                 "gid":9,
                 "height":8,
                 "id":34,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":8,
                 "x":24,
                 "y":56
                }, 
                {
                 "gid":9,
                 "height":8,
                 "id":35,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":8,
                 "x":24,
                 "y":72
                }, 
                {
                 "gid":9,
                 "height":8,
                 "id":38,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":8,
                 "x":48,
                 "y":56
                }, 
                {
                 "gid":9,
                 "height":8,
                 "id":39,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":8,
                 "x":32,
                 "y":56
                }, 
                {
                 "gid":9,
                 "height":8,
                 "id":41,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":8,
                 "x":56,
                 "y":88
                }, 
                {
                 "gid":9,
                 "height":8,
                 "id":42,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":8,
                 "x":64,
                 "y":80
                }, 
                {
                 "gid":9,
                 "height":8,
                 "id":43,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":8,
                 "x":48,
                 "y":80
                }],
         "opacity":1,
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }],
 "nextlayerid":5,
 "nextobjectid":44,
 "orientation":"orthogonal",
 "properties":[
        {
         "name":"nextScene",
         "type":"string",
         "value":"fourthYearBible"
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