kaboom({
    global: true,
    fullscreen: true,
    scale: 2,
    debug: true,
    clearcolor: [0,0,0,1]
})

scene('game', () => {
    layers(['bg', 'obj', 'ul'], 'obj');

    loadRoot('https://i.imgur.com/')

    loadSprite('wall-steel', 'EkleLlt')
    loadSprite('brick-red', 'EkleLlt')
    loadSprite('door', 'EkleLlt')
    loadSprite('kaboom', 'EkleLlt')
    loadSprite('bg', 'EkleLlt')
    loadSprite('wall-gold', 'EkleLlt')
    loadSprite('wall-wood', 'EkleLlt')

})

go('game');