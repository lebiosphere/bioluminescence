enum RadioMessage {
    message1 = 49434,
    alerte = 62947,
    alerte_t = 34605
}
radio.setGroup(42)
basic.forever(function () {
    if (grove.measureInCentimetersV2(DigitalPin.P0) > 5) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
    if (input.temperature() < 18 || input.temperature() > 25) {
        basic.showIcon(IconNames.Skull)
        radio.sendMessage(RadioMessage.alerte_t)
        soundExpression.giggle.playUntilDone()
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
