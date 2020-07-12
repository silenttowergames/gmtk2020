import { canvas } from "./canvas";
import { world } from "./ecs/world";
import { SpriteSheet } from "./rendering/SpriteSheet";
import { v2d } from "./v2d";
import { body } from "./ecs/components/body";
import { sprite } from "./ecs/components/sprite";
import { DrawSystem } from "./ecs/systems/DrawSystem";
import { AnimationSystem } from "./ecs/systems/AnimationSystem";
import { input } from "./input";
import { MoveSystem } from "./ecs/systems/MoveSystem";
import { AIPlayer } from "./ecs/components/AIPlayer";
import { AIPlayerSystem } from "./ecs/systems/AIPlayerSystem";
import { TileMap } from "./ecs/components/TileMap";
import { TextC } from "./ecs/components/TextC";
import { TextRead } from "./ecs/components/TextRead";
import { TextReadSystem } from "./ecs/systems/TextReadSystem";
import { Fader } from "./ecs/components/Fader";
import { FaderSystem } from "./ecs/systems/FaderSystem";
import { Weed } from "./ecs/components/Weed";
import { WeedSystem } from "./ecs/systems/WeedSystem";
import { FireSystem } from "./ecs/systems/FireSystem";

function init() : void
{
    const c : canvas = canvas.create('c', 320, 180);
    
    let w : world;
    
    const spriteSheets : Array<SpriteSheet> = [
        SpriteSheet.create("8x8", v2d.create(8, 8), {
            protagLeft: [
                [ 0, 0, 0, ],
            ],
            
            protagRight: [
                [ 1, 0, 0, ],
            ],
            
            weed: [
                [ 2, 1, 15, ],
                [ 3, 1, 15, ],
                [ 0, 2, 15, ],
                [ 1, 2, 15, ],
            ],
            
            corn: [
                [ 2, 2, 0, ],
            ],
            
            fire: [
                [ 0, 3, 5, ],
                [ 1, 3, 5, ],
                [ 2, 3, 5, ],
                [ 3, 3, 5, ],
            ],
        }),
        
        SpriteSheet.create("endcard", v2d.create(320, 180), {
            only: [
                [ 0, 0, 0, ],
            ],
        }),
        
        SpriteSheet.create("store", v2d.create(320, 180), {
            only: [
                [ 0, 0, 0, ],
            ],
        }),
        
        SpriteSheet.create("store2", v2d.create(320, 180), {
            only: [
                [ 0, 0, 0, ],
            ],
        }),
    ];
    
    const scenes = {
        farm1: () => {
            let entity : number;
            
            entity = w.new();
            w.add(entity, TileMap.create('farm1'));
            w.add(entity, body.create(0, 12));
            
            entity = w.new();
            w.add(entity, new AIPlayer());
            w.add(entity, body.create(24 * 8, (14 * 8) + 12));
            w.add(entity, sprite.create(spriteSheets[0], 'protagLeft'));
            
            entity = w.new();
            w.add(entity, body.create(2, 2));
            w.add(entity, TextC.create(`Plant & Water`));
            
            entity = w.new();
            w.add(entity, body.create(320 - 128, 2));
            w.add(entity, TextC.create(`Seed [X] Dig [C]`));
        },
        
        farm2: () => {
            let entity : number;
            
            entity = w.new();
            w.add(entity, TileMap.create('farm2'));
            w.add(entity, body.create(0, 12));
            
            entity = w.new();
            w.add(entity, new AIPlayer());
            w.add(entity, body.create(33 * 8, (13 * 8) + 12));
            w.add(entity, sprite.create(spriteSheets[0], 'protagLeft'));
            
            entity = w.new();
            w.add(entity, body.create(2, 2));
            w.add(entity, TextC.create(`Rows of Corn`));
            
            entity = w.new();
            w.add(entity, body.create(320 - 128, 2));
            w.add(entity, TextC.create(`Seed [X] Dig [C]`));
        },
        
        farm3: () => {
            let entity : number;
            
            entity = w.new();
            w.add(entity, TileMap.create('farm3'));
            w.add(entity, body.create(0, 12));
            
            entity = w.new();
            w.add(entity, new AIPlayer());
            w.add(entity, body.create(14 * 8, (5 * 8) + 12));
            w.add(entity, sprite.create(spriteSheets[0], 'protagLeft'));
            
            entity = w.new();
            w.add(entity, body.create(2, 2));
            w.add(entity, TextC.create(`Bridge the Gap`));
            
            entity = w.new();
            w.add(entity, body.create(320 - 128, 2));
            w.add(entity, TextC.create(`Seed [X] Dig [C]`));
        },
        
        farm4: () => {
            let entity : number;
            
            entity = w.new();
            w.add(entity, TileMap.create('farm4'));
            w.add(entity, body.create(0, 12));
            
            entity = w.new();
            w.add(entity, new AIPlayer());
            w.add(entity, body.create(30 * 8, (3 * 8) + 12));
            w.add(entity, sprite.create(spriteSheets[0], 'protagLeft'));
            
            entity = w.new();
            w.add(entity, body.create(2, 2));
            w.add(entity, TextC.create(`Hedge Maze`));
            
            entity = w.new();
            w.add(entity, body.create(320 - 128, 2));
            w.add(entity, TextC.create(`Seed [X] Dig [C]`));
        },
        
        farm5: () => {
            let entity : number;
            
            entity = w.new();
            w.add(entity, TileMap.create('farm5'));
            w.add(entity, body.create(0, 12));
            
            entity = w.new();
            w.add(entity, new AIPlayer());
            w.add(entity, body.create(1 * 8, (12 * 8) + 12));
            w.add(entity, sprite.create(spriteSheets[0], 'protagLeft'));
            
            entity = w.new();
            w.add(entity, body.create(320 - 128, 2));
            w.add(entity, TextC.create(`Seed [X] Dig [C]`, false));
            
            entity = w.new();
            w.add(entity, body.create(2, 2));
            w.add(entity, TextC.create(`Hedgier and Mazier`, false));
        },
        
        farm6: () => {
            let entity : number;
            
            entity = w.new();
            w.add(entity, TileMap.create('farm6'));
            w.add(entity, body.create(0, 12));
            
            entity = w.new();
            w.add(entity, new AIPlayer());
            w.add(entity, body.create(30 * 8, (14 * 8) + 12));
            w.add(entity, sprite.create(spriteSheets[0], 'protagLeft'));
            
            entity = w.new();
            w.add(entity, body.create(320 - 232, 2));
            w.add(entity, TextC.create(`Kerosene [V] Seed [X] Dig [C]`, false));
            
            entity = w.new();
            w.add(entity, body.create(2, 2));
            w.add(entity, TextC.create(`Weeds`, false));
            
            for(const o of window['maps'].farm6.layers[2].objects)
            {
                entity = w.new();
                w.add(entity, body.create(o.x, (o.y) + 12 - 8));
                w.add(entity, sprite.create(spriteSheets[0], 'weed'));
                w.add(entity, new Weed());
            }
        },
        
        farm7: () => {
            let entity : number;
            
            entity = w.new();
            w.add(entity, TileMap.create('farm7'));
            w.add(entity, body.create(0, 12));
            
            entity = w.new();
            w.add(entity, new AIPlayer());
            w.add(entity, body.create(30 * 8, (14 * 8) + 12));
            w.add(entity, sprite.create(spriteSheets[0], 'protagLeft'));
            
            entity = w.new();
            w.add(entity, body.create(320 - 232, 2));
            w.add(entity, TextC.create(`Kerosene [V] Seed [X] Dig [C]`, false));
            
            entity = w.new();
            w.add(entity, body.create(2, 2));
            w.add(entity, TextC.create(`Careful!`, false));
            
            for(const o of window['maps'].farm7.layers[2].objects)
            {
                entity = w.new();
                w.add(entity, body.create(o.x, (o.y) + 12 - 8));
                w.add(entity, sprite.create(spriteSheets[0], 'weed'));
                w.add(entity, new Weed());
            }
        },
        
        farm8: () => {
            let entity : number;
            
            entity = w.new();
            w.add(entity, TileMap.create('farm8'));
            w.add(entity, body.create(0, 12));
            
            entity = w.new();
            w.add(entity, new AIPlayer());
            w.add(entity, body.create(21 * 8, (1 * 8) + 12));
            w.add(entity, sprite.create(spriteSheets[0], 'protagLeft'));
            
            entity = w.new();
            w.add(entity, body.create(320 - 232, 2));
            w.add(entity, TextC.create(`Kerosene [V] Seed [X] Dig [C]`, false));
            
            entity = w.new();
            w.add(entity, body.create(2, 2));
            w.add(entity, TextC.create(`Carefuler!`, false));
            
            for(const o of window['maps'].farm8.layers[2].objects)
            {
                entity = w.new();
                w.add(entity, body.create(o.x, (o.y) + 12 - 8));
                w.add(entity, sprite.create(spriteSheets[0], 'weed'));
                w.add(entity, new Weed());
            }
        },
        
        farm9: () => {
            let entity : number;
            
            entity = w.new();
            w.add(entity, TileMap.create('farm9'));
            w.add(entity, body.create(0, 12));
            
            entity = w.new();
            w.add(entity, new AIPlayer());
            w.add(entity, body.create(2 * 8, (8 * 8) + 12));
            w.add(entity, sprite.create(spriteSheets[0], 'protagLeft'));
            
            entity = w.new();
            w.add(entity, body.create(320 - 232, 2));
            w.add(entity, TextC.create(`Kerosene [V] Seed [X] Dig [C]`, false));
            
            entity = w.new();
            w.add(entity, body.create(2, 2));
            w.add(entity, TextC.create(`Carefuler!`, false));
            
            for(const o of window['maps'].farm9.layers[2].objects)
            {
                entity = w.new();
                w.add(entity, body.create(o.x, (o.y) + 12 - 8));
                w.add(entity, sprite.create(spriteSheets[0], 'weed'));
                w.add(entity, new Weed());
            }
        },
        
        firstYearStore: () => {
            let entity : number;
            
            entity = w.new();
            w.add(entity, body.create(0, 0));
            w.add(entity, sprite.create(spriteSheets[2], 'only'));
            
            entity = w.new();
            w.add(entity, body.create(8, 128));
            w.add(entity, TextC.create(""));
            w.add(entity, TextRead.create([
                `Welcome in, Saul!\n\nWhat is it you need?`,
                `pHey there, Ed. I need some manure,\nand a new plow.`,
                `Alrighty, here you go. No seed?`,
                `pYou know I use my own seed every year.`,
                `Just checking! You never know.\n\nHave a good one.`,
                `pYou too!`,
            ], 'farm1'));
            
            entity = w.new();
            w.add(entity, new Fader());
        },
        
        secondYearStore: () => {
            let entity : number;
            
            entity = w.new();
            w.add(entity, body.create(0, 0));
            w.add(entity, sprite.create(spriteSheets[2], 'only'));
            
            entity = w.new();
            w.add(entity, body.create(8, 128));
            w.add(entity, TextC.create(""));
            w.add(entity, TextRead.create([
                `Hey there Saul.\n\nHow'd the year go?`,
                `pAbout as good as any other.\n\nNeed some more manure.`,
                `Well, I got some bad news.\nLooks like your usual brand got put\nout of business. All we've got is\nthis new kind.`,
                `pOut of business? How's that?`,
                `This new kind's cheap...\n\nSo cheap it seems wrong, in fact.\nNobody else can't compete.`,
                `pWell... I guess I'll take it, if\nit's all you got.`,
                `pIf it's cheaper, maybe I'll end\nup with more money in the end.`,
                `That's the idea I guess.\n\nMaybe it's a good thing.`,
                `pWhat's this on the back of the bag?`,
                `I'm telling you Saul, I looked all\nover it. That's the correct price.`,
                `pNo, this here. It says it might\nkill my seeds if I don't use their\nbrand?`,
                `What?! Show me...`,
                `The hell? Looks like this manure\nmight kill your seeds!`,
                `pYou don't say, Ed?`,
                `pWhat am I supposed to do about that?!`,
                `Well, I've got some new seeds here.\nSame brand, in fact.\n\nJust arrived this week.`,
                `pConvenient.\n\nThere goes all the money I saved, I\nguess.`,
                `You'll get 'em next year.`,
            ], 'farm4'));
            
            entity = w.new();
            w.add(entity, new Fader());
        },
        
        thirdYearStore: () => {
            let entity : number;
            
            entity = w.new();
            w.add(entity, body.create(0, 0));
            w.add(entity, sprite.create(spriteSheets[2], 'only'));
            
            entity = w.new();
            w.add(entity, body.create(8, 128));
            w.add(entity, TextC.create(""));
            w.add(entity, TextRead.create([
                `Another year, another dollar.\n\nWhat'll it be this time?`,
                `pMy farm is all grown up with some\nkind of weed I ain't never seen\nbefore!`,
                `Oh yeah, getting a lot of reports\nof that.`,
                `Rumor has it...\n\nIt's the manure!`,
                `pSounds about right. Can you order me\nin some other kind?`,
                `Sorry... it's the only kind they make\nanymore. Everyone else got run out.`,
                `pWhat?!`,
                `pWhat am I supposed to do about the\nweeds?`,
                `I hear they catch fire faster than\nanything else.\n\nDo with that what you may.`,
                `Unrelated: we have a special going \non kerosene.`,
            ], 'farm6'));
            
            entity = w.new();
            w.add(entity, new Fader());
        },
        
        fourthYearStore: () => {
            let entity : number;
            
            entity = w.new();
            w.add(entity, body.create(0, 0));
            w.add(entity, sprite.create(spriteSheets[2], 'only'));
            
            entity = w.new();
            w.add(entity, body.create(8, 128));
            w.add(entity, TextC.create(""));
            w.add(entity, TextRead.create([
                `Howdy, Saul. Any luck this last year?`,
                `pHardly.\n\nNothing's grown back from the fires.`,
                `Yeah... Those weeds are known to suck\nthe nutrients clean out of the land.`,
                `pWhat do you do for the dead soil?\n\nAny rumors?`,
                `Decorative tombstones?`,
                `pReal funny.`,
                `Well...`,
                `They sell this extra-strength\nfertilizer.`,
                `Says it'll make a seaweed grow\nin the desert.`,
                `pI guess I'll take it...\n\nHow much?`,
                `How expensive do you reckon it is to\nmake a seaweed grow in the desert?`,
                `That's how much.`,
                `pWell, spare no expense.\n\nFarmers are made of money, after all.`,
                `Yeah, I think all these new\nconcoctions...`,
                `I think they've got something to do\nwith the mark of the beast.`,
                `pI hate 'em as much as the next guy,\nbut that's what you said about the\ncredit card machine, too, Ed.`,
                `Well I'm right one way or the other,\nain't I?`,
                `pCan't argue with that, I guess.`,
            ], 'farm8'));
            
            entity = w.new();
            w.add(entity, new Fader());
        },
        
        fifthYearStore: () => {
            let entity : number;
            
            entity = w.new();
            w.add(entity, body.create(0, 0));
            w.add(entity, sprite.create(spriteSheets[2], 'only'));
            
            entity = w.new();
            w.add(entity, body.create(8, 128));
            w.add(entity, TextC.create(""));
            w.add(entity, TextRead.create([
                `Hey there Saul, doing okay?`,
                `pI'm flat broke.`,
                `Sorry to hear it.\n\nI get that a lot these days, it seems.`,
                `pUsed to be, a man could make a living\noff the land. But anymore...\n\nI don't know.`,
                `Well, I've got a bit of good news.`,
                `The bank is generously offering loans\nto my distinguished clientele\nduring their time of need!`,
                `pWhat?`,
                `Low-interest business loans! They're\navailable for anyone that creates\njobs in our local agriculture sector!`,
                `pWhy are you talking like that?`,
                `Like what?`,
                `pLike you're trying to sell me\nsomething.`,
                `Aren't I always trying to sell you\nsomething?`,
                `p...`,
                `...`,
                `I had to refinance the store... they\noffered me a good deal, if I do\nexactly as they say.`,
                `Well, are you interested?`,
                `pI don't have much of a choice, I\nsuppose...`,
                `Great!\n\nJust sign here...`,
                `pHere you go.`,
                `Thank you. And,\n\nI'm sorry.`,
            ], 'farm10'));
            
            entity = w.new();
            w.add(entity, new Fader());
        },
        
        sixthYearStore: () => {
            let entity : number;
            
            entity = w.new();
            w.add(entity, body.create(0, 0));
            w.add(entity, sprite.create(spriteSheets[3], 'only'));
            
            entity = w.new();
            w.add(entity, body.create(8, 128));
            w.add(entity, TextC.create(""));
            w.add(entity, TextRead.create([
               `rHello, fine patron!\n\nHow are you all?`,
               `pWho the hell are you?!`,
               `rI am the proprieter of this\nestablishment.\n\nHow may I help you?`,
               `pWhere's Ed? What happened?\n\nDid he die?!`,
               `rOh no, he's very much alive!`,
               `rThis job didn't seem to work very\nwell for him, so he's been relocated\nto one of our workhouses.`,
               `pWorkhou- what?`,
               `rHow may I help you?`,
               `p...`,
               `pWell, I need manure & seeds.`,
               `pAnd some of that severely overpriced\nstuff.`,
               `pAnd some kerosene, I guess.`,
               `rSeverely over- ah!\n\nYou mean...`,
               `pThe super-fertilizing... whatever.`,
               `rYes!\n\nIt'll make seaweed grow in the desert!`,
               `pAnd it made mushrooms grow on my\nshoes.`,
               `pAnd weeds grow right back where I got\nrid of 'em.\n\nBut I can't do without it anymore.`,
               `rIt's that good!\n\nWell, here you go!`,
               `rOh, and remember...`,
               `rRemember to keep on time with your\npayments.`,
               `pPayments?`,
               `rThe loan I gave you.`,
               `pYou?\n\nI've never seen you before in my life!`,
               `rAnd yet...\n\t\nYou knew exactly who I was,\nthe moment you saw me.`,
               `rDidn't you?`,
               `rHave a nice day.`,
            ], 'farm12'));
            
            entity = w.new();
            w.add(entity, new Fader());
        },
        
        firstYearBible: () => {
            let entity : number;
            
            entity = w.new();
            w.add(entity, body.create(0, 0));
            w.add(entity, sprite.create(spriteSheets[1], 'only'));
            
            entity = w.new();
            w.add(entity, body.create(8, 128 - 24));
            w.add(entity, TextC.create(""));
            w.add(entity, TextRead.create([
                `18. ... it is good and comely for\none to eat and to drink, and to enjoy\nthe good of all his labour that he\ntaketh under the sun all the days\nof his life ...\n    Ecclesiastes 5:18`,
            ], 'firstYearStore'));
            
            entity = w.new();
            w.add(entity, new Fader());
        },
        
        secondYearBible: () => {
            let entity : number;
            
            entity = w.new();
            w.add(entity, body.create(0, 0));
            w.add(entity, sprite.create(spriteSheets[1], 'only'));
            
            entity = w.new();
            w.add(entity, body.create(8, 128 - 24));
            w.add(entity, TextC.create(""));
            w.add(entity, TextRead.create([
                `12. The wicked plotteth against the\njust, and gnasheth upon him with his\nteeth.\n    Psalm 37:12`,
            ], 'secondYearStore'));
            
            entity = w.new();
            w.add(entity, new Fader());
        },
        
        thirdYearBible: () => {
            let entity : number;
            
            entity = w.new();
            w.add(entity, body.create(0, 0));
            w.add(entity, sprite.create(spriteSheets[1], 'only'));
            
            entity = w.new();
            w.add(entity, body.create(8, 128 - 24));
            w.add(entity, TextC.create(""));
            w.add(entity, TextRead.create([
                `25. But while men slept, his enemy\ncame and sowed tares among the wheat,\nand went his way.\n    Matthew 13:25`,
            ], 'thirdYearStore'));
            
            entity = w.new();
            w.add(entity, new Fader());
        },
        
        fourthYearBible: () => {
            let entity : number;
            
            entity = w.new();
            w.add(entity, body.create(0, 0));
            w.add(entity, sprite.create(spriteSheets[1], 'only'));
            
            entity = w.new();
            w.add(entity, body.create(8, 128 - 24));
            w.add(entity, TextC.create(""));
            w.add(entity, TextRead.create([
                `2. And the angel of the Lord appeared\nunto him in a flame of fire out of\nthe midst of a bush: and he looked,\nand, behold, the bush burned with\nfire, and the bush was not consumed.\n    Exodus 3:2`,
            ], 'fourthYearStore'));
            
            entity = w.new();
            w.add(entity, new Fader());
        },
        
        fifthYearBible: () => {
            let entity : number;
            
            entity = w.new();
            w.add(entity, body.create(0, 0));
            w.add(entity, sprite.create(spriteSheets[1], 'only'));
            
            entity = w.new();
            w.add(entity, body.create(8, 128 - 24));
            w.add(entity, TextC.create(""));
            w.add(entity, TextRead.create([
                `20. I cry unto thee, and thou dost not\nhear me: I stand up, and thou\nregardest me not.\n    Job 30:20`,
            ], 'fifthYearStore'));
            
            entity = w.new();
            w.add(entity, new Fader());
        },
        
        sixthYearBible: () => {
            let entity : number;
            
            entity = w.new();
            w.add(entity, body.create(0, 0));
            w.add(entity, sprite.create(spriteSheets[1], 'only'));
            
            entity = w.new();
            w.add(entity, body.create(8, 128 - 24));
            w.add(entity, TextC.create(""));
            w.add(entity, TextRead.create([
                `15. And he had power to give life unto\nthe image of the beast, that the image\nof the beast should both speak, and\ncause that as many as would not\nworship the image of the beast\nshould be killed.`,
                `16. And he causeth all, both small and\ngreat, rich and poor, free and bond,\nto receive a mark in their right\nhand, or in their foreheads.`,
                `17. That no man might buy or sell,\nsave he that had the mark, or the name\nof the beast, or the number of his\nname.\n    Revelation 13:15-17`,
            ], 'sixthYearStore'));
            
            entity = w.new();
            w.add(entity, new Fader());
        },
        
        ending: () => {
            let entity : number;
            
            entity = w.new();
            w.add(entity, body.create(0, 0));
            w.add(entity, sprite.create(spriteSheets[1], 'only'));
            
            entity = w.new();
            w.add(entity, body.create(8, 128 - 24));
            w.add(entity, TextC.create(""));
            w.add(entity, TextRead.create([
                `3. And the battle went sore against\nSaul, and the archers hit him; and\nhe was sore wounded of the archers.\n    1 Samuel 31:3`,
            ], 'credits'));
            
            entity = w.new();
            w.add(entity, new Fader());
        },
        
        credits: () => {
            let entity : number;
            
            entity = w.new();
            w.add(entity, body.create(8, 8));
            w.add(entity, TextC.create(""));
            w.add(entity, TextRead.create([
                `THE END\n\nUntitled\n\nSilent Tower Games LLC\n\nMade for GMTK Jam 2020\n"Out Of Control"\n\nProgramming, Design, Art, Audio by\nRetro Swan\n\nPlaytested By\nJakabob247, TwoWholeWorms`,
                `Thanks For Playing! :)\n\nTwitter: @SilentTowerGame\n\nhttps://silent-tower-games.itch.io/\nhttps://silenttowergames.com/\nhttps://discord.silenttowergames.com/`
            ], null));
            
            entity = w.new();
            w.add(entity, new Fader());
        },
    };
    
    let nextScene = null;
    
    const loop = setInterval(() => {
        if((w == null && (nextScene = 'farm9')) || (w.nextScene != null && (nextScene = w.nextScene)))
        {
            w = newWorld(c);
            
            w.spriteSheets = spriteSheets;
            
            window['tiles'].index = [];
            
            scenes[nextScene]();
            
            nextScene = null;
        }
        else if(w.focused)
        {
            w.progress();
            
            input.update();
        }
    }, 1000 / 60);
    
    document.addEventListener('focus', () => w.focused = true);
    document.addEventListener('blur', () => w.focused = false);
    
    input.init();
}

function newWorld(c : canvas) : world
{
    const w : world = world.create();
    
    w.canvas = c;
    w.systems.push(new AIPlayerSystem());
    w.systems.push(new FireSystem());
    w.systems.push(new WeedSystem());
    w.systems.push(new MoveSystem());
    w.systems.push(new AnimationSystem());
    w.systems.push(new TextReadSystem());
    w.systems.push(new FaderSystem());
    w.systems.push(new DrawSystem());
    
    return w;
}

window.addEventListener('load', init);
