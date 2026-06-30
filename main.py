# Deliver packages up (A) or down (B)

def on_a_pressed():
    global package2
    package2 = sprites.create_projectile_from_sprite(img("""
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
            """),
        car,
        0,
        -50)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_up_pressed():
    car.set_image(img("""
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
        """))
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

# Change the car image based on the direction it's
# driving

def on_down_pressed():
    car.set_image(img("""
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
        """))
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def on_right_pressed():
    car.set_image(img("""
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
        """))
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_left_pressed():
    car.set_image(img("""
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
        """))
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_b_pressed():
    global package1
    package1 = sprites.create_projectile_from_sprite(img("""
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
            """),
        car,
        0,
        50)
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

package1: Sprite = None
package2: Sprite = None
car: Sprite = None
scene.set_background_color(7)
tiles.set_current_tilemap(tilemap("""
    level
    """))
car = sprites.create(img("""
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
        """),
    SpriteKind.player)
보라집 = sprites.create(img("""
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
        """),
    SpriteKind.enemy)
car.set_position(3, 55)
controller.move_sprite(car)
scene.camera_follow_sprite(car)
info.start_countdown(35)