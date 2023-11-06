kaboom({
    global: true,
    fullscreen: true,
    scale: 2,
    debug: true,
    clearcolor: [0,0,0,1]
})

loadRoot('https://i.imgur.com/');

loadSprite('wall-steel', 'EkleLlt.png');
loadSprite('brick-red', 'C46n8aY.png');
loadSprite('door', 'Ou9w4gH.png');
loadSprite('kaboom', 'etY46bP.png');
loadSprite('bg', 'qIXIczt.png');
loadSprite('wall-gold', 'VtTXsgH.png');
loadSprite('wall-wood', 'U751RRV.png');

loadSprite('bomberman', 'T0xbHb8.png', {
    anims:
});

scene('game', () => {
    layers(['bg', 'obj', 'ui'], 'obj');


    const maps = [
    [
        'aaaaaaaaaaaaaa',
        'a            a',
        'a            a',
        'a            a',
        'a            a',
        'a            a',
        'a            a',
        'a            a',
        'a            a',
        'a            a',
        'a            a',
        'a            a',
        'a            a',
        'a            a',
        'a            a',
        'a            a',
        'aaaaaaaaaaaaaa'
    ]
    ]

    const levelCfg = {
        width: 26,
        height: 26,
        a: [sprite('wall-steel'), 'wall-steel', solid(), 'wall'],
        z: [sprite('brick-red'), 'brick-red', solid(), 'wall'],
        d: [sprite('brick-red'), 'wall-brick-dool', solid(), 'wall'],
        b: [sprite('wall-gold'), 'wall-gold', solid(), 'wall'],
        w: [sprite('brick-wood'), 'wall-brick', solid(), 'wall'],
        p: [sprite('brick-wood'), 'wall-brick-dool', solid(), 'wall'],
        t: [sprite('door'), 'door', 'wall'],
    }

    const gamelevel = addLevel(maps[a], levelCfg);
})

go('game');