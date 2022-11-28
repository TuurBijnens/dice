input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        `)
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("goed gedaan")
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # . # .
        . # # # .
        `)
    basic.showString("nu knop a")
})
input.onSound(DetectedSound.Loud, function () {
    basic.showString("" + (input.temperature()))
})
input.setSoundThreshold(SoundThreshold.Loud, 128)
basic.showLeds(`
    # # . # #
    . # # # .
    # # # # #
    . # # # .
    # # # # #
    `)
basic.showString("schud")
