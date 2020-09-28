// Script Instructions 
// F= fire; R = right; L = Left
let projectile: Sprite = null
let hero = sprites.create(img`
    . . . . . . 5 . 5 . . . . . . . 
    . . . . . f 5 5 5 f f . . . . . 
    . . . . f 1 5 2 5 1 6 f . . . . 
    . . . f 1 6 6 6 6 6 1 6 f . . . 
    . . . f 6 6 f f f f 6 1 f . . . 
    . . . f 6 f f d d f f 6 f . . . 
    . . f 6 f d f d d f d f 6 f . . 
    . . f 6 f d 3 d d 3 d f 6 f . . 
    . . f 6 6 f d d d d f 6 6 f . . 
    . f 6 6 f 3 f f f f 3 f 6 6 f . 
    . . f f d 3 5 3 3 5 3 3 f f . . 
    . . f d f f 3 5 5 3 f d f . . . 
    . . . f f 3 3 3 3 3 f d f . . . 
    . . . f 3 3 5 3 3 5 3 f f . . . 
    . . . f f f f f f f f f . . . . 
    . . . . . f f . . . . . . . . . 
    `, SpriteKind.Player)
hero.setPosition(78, 103)
let enemyy = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .....fffc1111111f.......
    ...fc111cd1111111f......
    ...f1b1b1b1111dddf......
    ...fbfbffcf11fcddf......
    ...666fcf111111bbf......
    .....66ccbdb1b16cf......
    .....66666b6b6d66.......
    ........66666666........
    ........66666666666.....
    .........66666c111c6....
    .........666661b1b16....
    ..........6666bfbfb6....
    ...........6666.........
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
enemyy.setPosition(78, 9)
for (let action of "FFF") {
    enemyy.setFlag(SpriteFlag.StayInScreen, true)
    hero.say(action)
    if (action == "R") {
        enemyy.x += 24
    } else {
        if (action == "L") {
            enemyy.x += -24
        } else {
            if (action == "D") {
                enemyy.y += 24
            } else {
                if (action == "U") {
                    enemyy.y += -24
                } else {
                    for (let index = 0; index < 4; index++) {
                        if (action == "F") {
                            projectile = sprites.createProjectileFromSprite(img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . d . . . . . . . . d . . . 
                                . . d . d . . . . . . d . d . . 
                                . . . d . d . . . . d . d . . . 
                                . . . . d . d d d d . d . . . . 
                                . . . . . d . d d . d . . . . . 
                                . . . . . . b 6 6 b . . . . . . 
                                . . . . . . b 6 6 b . . . . . . 
                                . . . . . . b 6 6 b . . . . . . 
                                . . . . . . b 6 6 b . . . . . . 
                                . . . . . . b 6 6 b . . . . . . 
                                . . . . . . b 6 6 b . . . . . . 
                                . . . . . . 2 2 2 2 . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                `, enemyy, 0, 50)
                            pause(1000)
                        } else {
                        	
                        }
                    }
                }
            }
        }
    }
    pause(500)
}
