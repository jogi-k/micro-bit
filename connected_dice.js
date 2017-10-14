let Zahl = 0
let HalteKlappe = 0
let BitteWuerfeln = 0
basic.forever(() => {
    if (BitteWuerfeln == 1) {
        HalteKlappe = 1
        basic.showLeds(`
            . # . . #
            . . # # .
            # . . . .
            . # . # #
            # . # . .
            `)
        basic.showLeds(`
            . . . . .
            # # . # .
            . # # # #
            # . . . .
            . # # . #
            `)
        basic.showLeds(`
            # . . # #
            . # # . .
            # . # # .
            . # . . #
            # . # . #
            `)
        Zahl = Math.random(6)
        Zahl += 1
        HalteKlappe = 0
        BitteWuerfeln = 0
    }
    if (HalteKlappe == 0) {
        if (Zahl == 1) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
        }
        if (Zahl == 2) {
            basic.showLeds(`
                . . . . #
                . . . . .
                . . . . .
                . . . . .
                # . . . .
                `)
        }
        if (Zahl == 3) {
            basic.showLeds(`
                . . . . #
                . . . . .
                . . # . .
                . . . . .
                # . . . .
                `)
        }
        if (Zahl == 4) {
            basic.showLeds(`
                # . . . #
                . . . . .
                . . . . .
                . . . . .
                # . . . #
                `)
        }
        if (Zahl == 5) {
            basic.showLeds(`
                # . . . #
                . . . . .
                . . # . .
                . . . . .
                # . . . #
                `)
        }
        if (Zahl == 6) {
            basic.showLeds(`
                # . . . #
                . . . . .
                # . . . #
                . . . . .
                # . . . #
                `)
        }
    }
})
input.onGesture(Gesture.Shake, () => {
    BitteWuerfeln = 1
    radio.sendNumber(8)
})
radio.onDataPacketReceived(({ receivedNumber: empfangeneZahl }) => {
    if (empfangeneZahl == 8) {
        BitteWuerfeln = 1
    }
})
BitteWuerfeln = 1

