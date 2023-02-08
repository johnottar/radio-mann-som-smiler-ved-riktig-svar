radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 42) {
        basic.showLeds(`
            . . . . .
            # . . . #
            . # # # .
            . . . . .
            . . . . .
            `)
        music.playMelody("C C E G C5 C5 - - ", 120)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            # . . . #
            . . . . .
            `)
        music.playTone(185, music.beat(BeatFraction.Whole))
        music.playTone(175, music.beat(BeatFraction.Double))
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(5)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(42)
})
basic.showLeds(`
    . . . . .
    . . . . .
    # # # # #
    . . . . .
    . . . . .
    `)
radio.setGroup(1)
