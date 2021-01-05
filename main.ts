let temp2 = 0
let temp = 0
let no_of_person = 0
pins.digitalWritePin(DigitalPin.P0, 0)
basic.forever(function () {
    while (sonar.ping(
    DigitalPin.P10,
    DigitalPin.P11,
    PingUnit.Centimeters
    ) < 7) {
        temp = sonar.ping(
        DigitalPin.P10,
        DigitalPin.P11,
        PingUnit.Centimeters
        )
        basic.pause(400)
        temp2 = sonar.ping(
        DigitalPin.P10,
        DigitalPin.P11,
        PingUnit.Centimeters
        )
        if (temp2 - temp < 0) {
            no_of_person += 1
            break;
        } else {
            if (temp2 - temp > 0) {
                no_of_person += -1
                break;
            }
        }
    }
    if (no_of_person < 0) {
        no_of_person = 0
    }
    if (no_of_person > 0) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
    basic.showNumber(no_of_person)
})
basic.forever(function () {
    while (sonar.ping(
    DigitalPin.P9,
    DigitalPin.P8,
    PingUnit.Centimeters
    ) < 7) {
        temp = sonar.ping(
        DigitalPin.P9,
        DigitalPin.P8,
        PingUnit.Centimeters
        )
        basic.pause(400)
        temp2 = sonar.ping(
        DigitalPin.P9,
        DigitalPin.P8,
        PingUnit.Centimeters
        )
        if (temp2 - temp < 0) {
            no_of_person += 1
            break;
        } else {
            if (temp2 - temp > 0) {
                no_of_person += -1
                break;
            }
        }
    }
    if (no_of_person < 0) {
        no_of_person = 0
    }
    if (no_of_person > 0) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
    basic.showNumber(no_of_person)
})
