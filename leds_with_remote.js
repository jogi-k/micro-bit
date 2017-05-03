input.onButtonPressed(Button.A, () => {
    radio.sendNumber(1)
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        # . . . #
        # . . . #
        `)
})
input.onButtonPressed(Button.B, () => {
    radio.sendNumber(0)
    basic.showLeds(`
        # # # . .
        # . . # .
        # # # . .
        # . . # .
        # # # . .
        `)
})
input.onGesture(Gesture.Shake, () => {
    radio.sendNumber(2)
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
})
radio.onDataPacketReceived(({receivedNumber}) => {
    if (receivedNumber == 1) {
        basic.showLeds(`
            # . . . #
            # . . . #
            . # # # .
            . # . # .
            . . # . .
            `)
    }
    if (receivedNumber == 0) {
        basic.showLeds(`
            . . # # #
            . # . . #
            . . # # #
            . # . . #
            . . # # #
            `)
    }
    if (receivedNumber == 2) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            # # # # #
            . # . # .
            `)
    }
})
