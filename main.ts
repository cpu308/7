// Deliver packages up (A) or down (B)
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    package2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . e e e e e e e . . 
        . . . . . . e d d d d d e e . . 
        . . . . . e d d d d d d e e . . 
        . . . . e d d d d d d e d e . . 
        . . . . e e e e e e e d d e . . 
        . . . . e d d d d d e d d e . . 
        . . . . e d d d d d e d d e . . 
        . . . . e d d d d d e d d e . . 
        . . . . e d d d d d e d e e . . 
        . . . . e d d d d d e e e . . . 
        . . . . e e e e e e e e . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, car, 0, -50)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    car.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 3 3 3 3 3 3 . . . . 
        . . . . . 3 3 d d 3 3 3 3 . . . 
        . . . . . c d 3 3 3 3 3 c . . . 
        . . . . 3 c d 3 3 3 3 3 c 3 . . 
        . . . a 3 c d 3 3 3 3 3 c 3 a . 
        . . . f 3 c d 3 3 3 3 3 c 3 f . 
        . . . f a c 3 3 3 3 3 3 c a f . 
        . . . f 3 c 3 b b b b 3 c 3 f . 
        . . . a 3 3 b c c c c b 3 3 a . 
        . . . a a b c c c c c c b a a . 
        . . . f a d d d d d d d d a f . 
        . . . f a d 3 3 3 3 3 3 d a f . 
        . . . . 3 d d 3 3 3 3 d d 3 f . 
        . . . . f 3 d 3 3 3 3 d 3 f . . 
        . . . . . a 3 3 3 3 3 3 a . . . 
        `)
})
// Change the car image based on the direction it's
// driving
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    car.setImage(img`
        . . . . . . a a c c a a . . . . 
        . . . . . a 3 3 3 3 3 3 a . . . 
        . . . . 3 c 3 3 3 3 3 3 c 3 . . 
        . . . a 3 c d 3 3 3 3 3 c 3 a . 
        . . . f 3 3 d 3 3 3 3 3 c 3 f . 
        . . . f 3 3 d 3 3 3 3 3 3 3 f . 
        . . . f 3 3 d 3 3 3 3 3 3 3 f . 
        . . . f 3 c 3 d d 3 3 3 c 3 f . 
        . . . a 3 c a c c c c a c 3 a . 
        . . . a 3 a c b b b b c a 3 a . 
        . . . a 3 a b b b b b b a 3 a . 
        . . . a a a a a a a a a a a a . 
        . . . f a d a a a a a a d a f . 
        . . . f a 3 d a a a a d 3 a f . 
        . . . f f a a a a a a a a f f . 
        . . . . f f . . . . . . f f . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    car.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . 3 d 3 3 3 3 3 3 c 3 . . . 
        . . 3 c d 3 3 3 3 3 3 c c 3 . . 
        . 3 c c d d d d d d 3 c c d 3 d 
        . 3 c 3 a a a a a a a b c d 3 3 
        . 3 3 a b b a b b b a a b d 3 3 
        . 3 a b b b a b b b b a 3 3 3 3 
        . a a 3 3 3 a 3 3 3 3 3 a 3 3 3 
        . a a a a a a f a a a f a 3 d d 
        . a a a a a a f a a f a a a 3 d 
        . a a a a a a f f f a a a a a a 
        . a f f f f a a a a f f f a a a 
        . . f f f f f a a f f f f f a . 
        . . . f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    car.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 3 3 3 3 3 3 3 3 . . 
        . . . . . 3 c 3 3 3 3 3 3 d 3 . 
        . . . . 3 c c 3 3 3 3 3 3 d c 3 
        . . d 3 d c c 3 d d d d d d c c 
        . d 3 3 d c b a a a a a a a 3 c 
        . 3 3 3 d b a a b b b a b b a 3 
        . 3 3 3 3 3 a b b b b a b b b a 
        . 3 3 3 3 a 3 3 3 3 3 a 3 3 3 a 
        . 3 d d 3 a f a a a f a a a a a 
        . d d 3 a a a f a a f a a a a a 
        . a a a a a a a f f f a a a a a 
        . a a a a f f f a a a a f f f f 
        . . . a f f f f f a a f f f f f 
        . . . . f f f f . . . . f f f . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    package1 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . e e e e e e e . . 
        . . . . . . e d d d d d e e . . 
        . . . . . e d d d d d d e e . . 
        . . . . e d d d d d d e d e . . 
        . . . . e e e e e e e d d e . . 
        . . . . e d d d d d e d d e . . 
        . . . . e d d d d d e d d e . . 
        . . . . e d d d d d e d d e . . 
        . . . . e d d d d d e d e e . . 
        . . . . e d d d d d e e e . . . 
        . . . . e e e e e e e e . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, car, 0, 50)
})
let package1: Sprite = null
let package2: Sprite = null
let car: Sprite = null
scene.setBackgroundColor(7)
tiles.setCurrentTilemap(tilemap`level`)
car = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 3 3 3 3 3 3 3 3 . . . . 
    . . . 3 d 3 3 3 3 3 3 c 3 . . . 
    . . 3 c d 3 3 3 3 3 3 c c 3 . . 
    . 3 c c d d d d d d 3 c c d 3 d 
    . 3 c 3 a a a a a a a b c d 3 3 
    . 3 3 a b b a b b b a a b d 3 3 
    . 3 a b b b a b b b b a 3 3 3 3 
    . a a 3 3 3 a 3 3 3 3 3 a 3 3 3 
    . a a a a a a f a a a f a 3 d d 
    . a a a a a a f a a f a a a 3 d 
    . a a a a a a f f f a a a a a a 
    . a f f f f a a a a f f f a a a 
    . . f f f f f a a f f f f f a . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let 보라집 = sprites.create(img`
    ....................8a8aa8a8....................
    .................aaa888aa8a8aaa.................
    ..............aaa8aa8a8aa888aa8aaa..............
    ...........8aa8aa8888a8aa8a8888aa8aa8...........
    ........8888aa8aa8aa8a8aa8a8aa8aa8aa8888........
    .....aaa8aa8aa8888aa8a8aa8a8aa8888aa8aa8aaa.....
    ...aa8888aa8aa8aa8aa888aa888aa8aa8aa8aa8888aa...
    dccaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aaccd
    bcb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bcb
    dbbaa8aa8888aa8aa8888a8aa8a8888aa8aa8888aa8aabbd
    dbbaa8aa8aa8aa8888aa8a8aa8a8aa8888aa8aa8aa8aabbd
    dccaa8888aa8aa8aa8aa888aa888aa8aa8aa8aa8888aaccd
    bcbaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aabcb
    dbb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bbd
    dbbaa8aa8888aa8aa8aa8a8aa8a8aa8aa8aa8888aa8aabbd
    dccaa8aa8aa8aa8aa8888a8aa8a8888aa8aa8aa8aa8aaccd
    bcbaa8888aa8aa8888aa888aa888aa8888aa8aa8888aabcb
    dbbaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aabbd
    dbb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bbd
    dccaa8aa8888aa8aa8aa8a8aa8a8aa8aa8aa8888aa8aaccd
    bcbaa8aa8aa8aa8aa8aa888aa888aa8aa8aa8aa8aa8aabcb
    dbbaa8888aa8aa8aa888ccbbbbcc888aa8aa8aa8888aabbd
    dbbaa8aa8aa8aa888ccbbbbbbbbbbcc888aa8aa8aa8aabbd
    dcc888aa8aa888ccbbbbbccccccbbbbbcc888aa8aa888ccd
    bcbaa8aa888ccbbbbbccbddddddbccbbbbbcc888aa8aabcb
    dbbaa8aaccbbbbbccbddddddddddddbccbbbbbccaa8aabbd
    dbbaaccbbbbcccbddddddddddddddddddbcccbbbbccaabbd
    dcccbbbbcccbdddbccbbbbbbbbbbbbccbdddbcccbbbbcccd
    ccccccccbbbbbbbcbddddddddddddddbcbbbbbbbcccccccc
    bddddddddddddbcddddddddddddddddddcbddddddddddddb
    bbcbdddddddddcbd1111111111111111dbcdddddddddbcbb
    bbbcccccccccccd1bbbbbbbbbbbbbbbb1dcccccccccccbbb
    bbbbdddddddddc11beeeeeeeeeeeeeeb11cdddddddddbbbb
    bbb8aaaaaaa8dc1be3b33b33b33b33beb1cd8aaaaaaa8bbb
    bbb888888888dc1be3b33b33b33b33beb1cd888888888bbb
    bbb833333338dcbbf3b3effffffe33bebbcd833333338bbb
    bbb83ff3ff38dcbbf3bffffffffff3bebbcd83ff3ff38bbb
    bbb83cc3cc38dcbbf3effffffffffebebbcd83cc3cc38bbb
    bbb833333338dcbbf3eeeeeeeeeeeebebbcd833333338bbb
    cbb83ff3ff38dcbbe3b33b33b33b33bebbcd83ff3ff38bbc
    cbb83cc3cc38dcbbe3b33b33b33b33bebbcd83cc3cc38bbc
    ccbbbbbbbbbbdcbbe3b33b33b33feeeebbcdbbbbbbbbbbcc
    .cbbdddddddddcbbe3b33b33b33ffffebbcdddddddddbbc.
    ..cbdbbbdbbbdcbbf3b33b33b33f33febbcdbbbdbbbdbc..
    ...cdbbbdbbbdcbbf3b33b33b33bffeebbcdbbbdbbbdc...
    ....bddddddddcbbf3b33b33b33b33bebbcddddddddb....
    .....bdbbbdddcbbf3b33b33b33b33bebbcdddbbbdb.....
    ......bcccbbbcbbe3b33b33b33b33bebbcbbbcccb......
    `, SpriteKind.Enemy)
let mySprite = sprites.create(img`
    ............3333bb..bb33333.....
    ........3bb31111d3b311d111d33...
    .......3bdd11111dbd11d11111113..
    .......bdddd1111bd11d111dd11113.
    ......3d111dd111b11d111dd33d11d3
    ......3d11111dd1d11d111d11d33113
    ....bb3d111111dd13dd111d1dd3b31b
    ...b3d3dd111111dd13dd11d1dddbbdb
    ...3ddd31d111111dd133dddddddb.b.
    ..311111d1ddd1111dd11dddddd33...
    ..3111111d111dd111dd1111dd3313..
    ..bddd1111ddd11dd111d111111113..
    ..311ddd111dddd11dd11ddd1111ddb.
    ..31111dd111dddd11dd111dddddddb.
    ...bd1111d1113ddd11dd1111111d3b.
    ...4dd1111d1113ddd11ddd111d333b.
    ..4dbdddd11d11133ddddddddddddb..
    .4ddbddddd11d111d33ddddddddd3b..
    .4dddb11ddd11dd111d333dddd3bb...
    .4dd55b111d11dd11111d3333bbb....
    .445555b111d11dddd111111ddb.....
    .4455555bd1d311ddddddddddd3.....
    .45455555bb1d3111ddddddd113.....
    .4554555555b333d1111111113......
    455554555555bbb33d11111d33......
    4d555545555555dbbb3d11d33.......
    4dd5555455555ddddd43333.........
    45dd555544ddddddd4..............
    .45dd5555d44dddd4...............
    ..45dd55dddd4444................
    ...45dd55444....................
    ....44444.......................
    `, SpriteKind.Player)
car.setPosition(3, 55)
controller.moveSprite(car)
scene.cameraFollowSprite(car)
info.startCountdown(35)
