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
    SliceX: 7,
    SliceY: 4,
    anims: {
        idleLeft: {from: 21, to: 21},
        idleRigth: {from: 7, to: 7},
        idleUp: {from: 0, to: 0},
        idleDown: {from: 14, to: 14},

        moveLeft: {from: 22, to: 27},
        moveRigth: {from: 8, to: 13},
        moveUp: {from: 1, to: 6},
        moveDown: {from: 15, to: 20},
    }
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

    const player = add ([
        sprite('bomberman')
    ])

})

go('game');