controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy += -225
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.coral5, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.splatter)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.bubbles)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (mySprite.y < otherSprite.top + 2) {
        info.changeScoreBy(1)
        sprites.destroy(otherSprite, effects.bubbles, 500)
        mySprite.vy = -70
    } else {
        info.changeLifeBy(-1)
        sprites.destroy(otherSprite, effects.bubbles, 500)
        mySprite.sayText("Yeowch!!")
        scene.cameraShake(4, 500)
    }
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(9)
mySprite = sprites.create(img`
    ..............fffcc.............
    ..............fcbddcc...........
    ...............fbbddcc..........
    ...............fcbbccf..........
    ..ccc.........ffccccccfffff.....
    ..cbbcc....fffcbbbbcbbbbbbbff...
    ...cbbdc.ffcccbbbbcbcbbbbbbbbf..
    ...fbbdcfcccccbbbcbcbbffbbbbbbff
    ....fbbffcccccbbbbbcb1ff11bbbcbf
    ....fcbbcccccccbbbbb11111111bbbf
    ....fcccccccccccbbbb11cc33111bf.
    ...fcbbffbdbcccccbbb111c13cccf..
    ...fbbf..ccddddcfbbbc111c31cf...
    ..fbbf.....ccdccbbdbf111cccf....
    ..fff........ccbbdcfcccc........
    ..............fffff.............
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite.ay = 450
mySprite.setPosition(15, 40)
animation.runImageAnimation(
mySprite,
[img`
    ..............fffcc.............
    ..............fcbddcc...........
    ...............fbbddcc..........
    ...............fcbbccf..........
    ..ccc.........ffccccccfffff.....
    ..cbbcc....fffcbbbbcbbbbbbbff...
    ...cbbdc.ffcccbbbbcbcbbbbbbbbf..
    ...fbbdcfcccccbbbcbcbbffbbbbbbff
    ....fbbffcccccbbbbbcb1ff11bbbcbf
    ....fcbbcccccccbbbbb11111111bbbf
    ....fcccccccccccbbbb11cc33111bf.
    ...fcbbffbdbcccccbbb111c13cccf..
    ...fbbf..ccddddcfbbbc111c31cf...
    ..fbbf.....ccdccbbdbf111cccf....
    ..fff........ccbbdcfcccc........
    ..............fffff.............
    `,img`
    ..............fffcc.............
    ..............fbbddc............
    ...............fbbddc...........
    ccc............fcbbccf..........
    cbbcc.........ffccccccffffff....
    .cbbdc.....fffcbbbbbbbbbbbbbff..
    .fbbddc..ffcccbbbbcbcbbbbbbbbbff
    ..fbbdfffcccccbbbcbcbbffbbbbbcbf
    ..fcbbbcccccccbbbcbcb1ff1111bbbf
    ..fccbcccccccccbbbbbb11111111bf.
    .fcbbfffccccccccbbbb11cc33cccf..
    .fbbf...cbdbcccccbbb111c131cf...
    fbbf.....ccdddddfbbbc111c33f....
    fff........ccddfbbdbf1111ff.....
    .............cfbbdbfccccc.......
    ..............fffff.............
    `,img`
    ..............fffc..............
    ..............fbddcc............
    ..ccc.........ffbddbc...........
    ..cbbc.........fcbbccf..........
    ...cbdc.......ffccccccfffffff...
    ...fbdc....fffcbbbbbbbbbbbbbcff.
    ....fbdc.ffcccbbbbbbcbbbbbbbbbcf
    ....fcdffcccccbbbcbcbbbffbbbbcbf
    ....fcbbccccccbbbcbcbbbff1111bbf
    ...fcbbccccccccbbbcbb11111111bf.
    ...fbbfffcccccccbbbb11bc33cccf..
    ..fbbf..cbdbcccccbbb111c131cf...
    ..fff....cbdddddccbbc111c33f....
    ..........ccbddccbbdf1111ff.....
    ............ccfbbbdfccccc.......
    ..............fffff.............
    `,img`
    ..............fffcc.............
    ..............fbbddc............
    ...............fbbddc...........
    ccc............fcbbccf..........
    cbbcc.........ffccccccffffff....
    .cbbdc.....fffcbbbbbbbbbbbbbff..
    .fbbddc..ffcccbbbbcbcbbbbbbbbbff
    ..fbbdfffcccccbbbcbcbbffbbbbbcbf
    ..fcbbbcccccccbbbcbcb1ff1111bbbf
    ..fccbcccccccccbbbbbb11111111bf.
    .fcbbfffccccccccbbbb11cc33cccf..
    .fbbf...cbdbcccccbbb111c131cf...
    fbbf.....ccdddddfbbbc111c33f....
    fff........ccddfbbdbf1111ff.....
    .............cfbbdbfccccc.......
    ..............fffff.............
    `],
200,
true
)
game.onUpdate(function () {
    for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . c c . . . . . . . . . . . . 
            . c 3 6 c c c c c . . . . . . . 
            . c 6 6 3 3 3 6 6 c . . . . . . 
            c 3 3 3 3 3 3 6 6 6 c . . . . . 
            c 3 3 3 3 3 3 6 6 6 6 c . . . . 
            c 3 3 3 3 3 6 6 6 6 6 c c c . . 
            c 3 3 3 3 6 6 6 6 6 c 3 3 3 c . 
            c c 3 3 6 6 6 6 6 c 3 c c c 3 c 
            c c 6 6 6 6 6 6 c 3 c c c c 6 c 
            c 3 3 3 3 6 6 c 6 6 c c c c 6 c 
            c 6 3 3 3 3 6 c 6 c c c c 6 c . 
            . c 6 3 3 3 6 c c c c c 6 c . . 
            . . c c c c c c c c c c c . . . 
            `, SpriteKind.Enemy)
        animation.runImageAnimation(
        mySprite2,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . c c . . . . . . . . . . . . 
            . c 3 6 c c c c c . . . . . . . 
            . c 6 6 3 3 3 6 6 c . . . . . . 
            c 3 3 3 3 3 3 6 6 6 c . . . . . 
            c 3 3 3 3 3 3 6 6 6 6 c . . . . 
            c 3 3 3 3 3 6 6 6 6 6 c c c . . 
            c 3 3 3 3 6 6 6 6 6 c 3 3 3 c . 
            c c 3 3 6 6 6 6 6 c 3 c c c 3 c 
            c c 6 6 6 6 6 6 c 3 c c c c 6 c 
            c 3 3 3 3 6 6 c 6 6 c c c c 6 c 
            c 6 3 3 3 3 6 c 6 c c c c 6 c . 
            . c 6 3 3 3 6 c c c c c 6 c . . 
            . . c c c c c c c c c c c . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . c c . . . . . . . . . . . 
            . . c 3 6 c c c c c . . . . . . 
            . c c 6 3 3 3 3 6 6 c . . . . . 
            c 6 3 3 3 3 3 6 6 6 6 c . . . . 
            c 3 3 3 3 3 6 6 6 6 6 c . . . . 
            c 3 3 3 3 6 6 6 6 6 6 c c c . . 
            c c 6 6 6 6 6 6 6 6 c 3 3 3 c . 
            c 6 3 3 3 6 6 6 c c 3 c c c 6 c 
            c 3 3 3 3 3 6 c c c c c c c c c 
            . c c c 6 6 c 4 5 5 c c 4 5 5 c 
            . . . c 6 6 6 c 5 5 5 c 5 5 4 c 
            . . . . c c c c c c c c c c c . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . c c . . . . . . . . . . . 
            . . c 3 6 c c c c . . . . . . . 
            . . c 6 3 3 3 3 6 c . . . . . . 
            . c 3 3 3 3 3 3 6 6 c . . . . . 
            c 3 3 3 3 3 3 6 6 6 6 c . . . . 
            c 3 3 3 3 3 c c 6 6 c c c c c . 
            c c 3 3 3 c 5 5 c c 3 3 c 5 5 b 
            c c 6 6 6 f f 5 c 3 c c c 5 f f 
            c 3 3 3 3 f f 5 c c c c c 5 f f 
            c 3 3 3 3 3 c 5 5 3 c 3 5 5 b . 
            . c 3 3 3 c c 4 5 5 5 5 4 4 c . 
            . . b b c 4 5 5 4 4 4 4 5 5 4 c 
            . c 5 c 4 c 5 5 5 c 4 c 5 5 5 c 
            . c 5 c 4 c 5 5 5 5 c 5 5 5 5 c 
            . c c c . . c c c c c c c c c . 
            `,img`
            . . . c c . . . . . . . . . . . 
            . . c 3 6 c 3 c c c c . c c . . 
            . . c 6 3 3 f f 5 c 6 c 5 f f . 
            . c 3 3 3 3 f f 5 c 6 c 5 f f . 
            c 3 3 3 3 3 c 5 5 5 c 5 5 5 b . 
            c 3 3 3 3 6 c 5 5 5 c 5 5 5 b . 
            c c 3 3 3 6 3 c 5 5 3 5 5 b b . 
            c c 6 6 3 3 3 c 5 5 3 5 5 b b . 
            c 3 3 3 3 c c b 5 5 5 5 5 c c . 
            c 3 3 3 c 5 5 b 4 5 5 5 4 5 5 c 
            . c 3 3 c 5 b b 4 4 4 4 b 4 5 b 
            . . b b c 4 5 5 5 b 4 b 5 5 4 c 
            . b 5 4 4 c 5 5 5 c 4 c 5 5 5 c 
            . c 5 c 4 c 5 5 5 c 4 c 5 5 5 c 
            . c 5 c 4 c 5 5 5 5 c 5 5 5 5 c 
            . c c c . . c c c c c c c c c . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . c c . . . . . . . . . . . 
            . . c 3 6 c c c c . . . . . . . 
            . . c 6 3 3 3 3 6 c . . . . . . 
            . c 3 3 3 3 3 c c 6 c . c c . . 
            c 3 3 3 3 3 c 5 5 c 6 c 5 5 c . 
            c c 3 3 3 6 f f 5 c 6 c 5 f f . 
            c c 6 6 6 6 f f 5 3 c 3 5 f f . 
            c 3 3 3 3 3 3 c 5 5 3 5 5 b . . 
            c 3 3 3 3 c c b 5 5 5 5 5 c c . 
            . c 3 3 c 5 5 b 4 5 5 5 4 5 5 c 
            . . b b c 5 b b 4 4 4 4 b 4 5 b 
            . c 5 c 4 c 5 5 5 c 4 c 5 5 5 c 
            . c 5 c 4 c 5 5 5 5 c 5 5 5 5 c 
            . c c c . . c c c c c c c c c . 
            `,img`
            . . . c c . . . . . . . . . . . 
            . . c 3 6 c c c c . . . . . . . 
            . . c 6 3 3 3 3 6 c . . . . . . 
            . c 3 3 3 3 3 c c 6 c . c c . . 
            c 3 3 3 3 3 c 5 5 c 6 c 5 5 b . 
            c 3 3 3 3 3 f f 5 c 6 c 5 f f . 
            c c 3 3 3 6 f f 5 c 6 c 5 f f . 
            c c 6 6 6 6 c 5 5 3 c 3 5 5 b . 
            c 3 3 3 3 3 3 c 5 5 3 5 5 b . . 
            c 3 3 3 3 c c b 5 5 5 5 5 c c . 
            . c 3 3 c 5 5 b 4 5 5 5 4 5 5 c 
            . . b b c 5 b b 4 4 4 4 b 4 5 b 
            . b 5 4 c 4 5 5 5 b 4 b 5 5 4 c 
            . c 5 c 4 c 5 5 5 c 4 c 5 5 5 c 
            . c 5 c 4 c 5 5 5 5 c 5 5 5 5 c 
            . c c c . . c c c c c c c c c . 
            `],
        500,
        false
        )
        tiles.setTileAt(value, assets.tile`transparency16`)
        mySprite2.ay = 450
        tiles.placeOnTile(mySprite2, value)
    }
})
