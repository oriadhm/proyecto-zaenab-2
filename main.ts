input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.showLeds(`
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            . # # . .
            `)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(500)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (pins.analogReadPin(AnalogPin.P2)))
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        pins.servoWritePin(AnalogPin.P4, 0)
        basic.pause(2000)
        pins.servoWritePin(AnalogPin.P4, 90)
        basic.pause(2000)
    }
    basic.showString("" + input.temperature() + "ºC")
})
led.enable(false)
basic.pause(100)
led.enable(true)
basic.showIcon(IconNames.Heart)
basic.pause(2000)
pins.servoWritePin(AnalogPin.P4, 90)
pins.servoWritePin(AnalogPin.P3, 0)
for (let index = 0; index < 4; index++) {
    pins.servoWritePin(AnalogPin.P4, 0)
    pins.servoWritePin(AnalogPin.P3, 90)
    basic.pause(2000)
    pins.servoWritePin(AnalogPin.P4, 90)
    pins.servoWritePin(AnalogPin.P3, 0)
    basic.pause(2000)
}
basic.showString("" + input.temperature() + "ºC")
basic.forever(function () {
    if (input.temperature() > 25) {
        pins.servoWritePin(AnalogPin.P4, 90)
        basic.showString("" + input.temperature() + "ºC")
    } else if (input.temperature() <= 25) {
        pins.servoWritePin(AnalogPin.P4, 0)
    }
    if (pins.analogReadPin(AnalogPin.P2) < 100) {
        for (let index = 0; index < 4; index++) {
            pins.digitalWritePin(DigitalPin.P1, 1)
            basic.showLeds(`
                . # # # .
                # # # # #
                . . # . .
                . . # . .
                . # # . .
                `)
            basic.pause(1000)
            pins.digitalWritePin(DigitalPin.P1, 0)
            basic.pause(3000)
        }
    }
    if (pins.analogReadPin(AnalogPin.P2) < 500) {
        for (let index = 0; index < 4; index++) {
            pins.digitalWritePin(DigitalPin.P1, 1)
            basic.showIcon(IconNames.No)
            basic.pause(500)
            pins.digitalWritePin(DigitalPin.P1, 0)
            basic.pause(3000)
        }
    }
    if (pins.analogReadPin(AnalogPin.P2) >= 500) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.showIcon(IconNames.Happy)
        basic.pause(12000)
    }
})
