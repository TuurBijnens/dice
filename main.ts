input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        # . . . #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # . . . #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # .
        # . . # .
        # # # # .
        # . # . .
        # . . # .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("goed gedaan")
    basic.showString("nu knop a")
})
basic.showLeds(`
    # # . # #
    . # # # .
    # # # # #
    . # # # .
    # # # # #
    `)
basic.showString("schud")
