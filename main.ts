let temp2 = 0
let temp = 0
let no_of_person = 0
basic.forever(function () {
    while (sonar.ping(
    DigitalPin.P10,
    DigitalPin.P11,
    PingUnit.Centimeters
    ) > 0 && sonar.ping(
    DigitalPin.P10,
    DigitalPin.P11,
    PingUnit.Centimeters
    ) < 16) {
        temp = sonar.ping(
        DigitalPin.P10,
        DigitalPin.P11,
        PingUnit.Centimeters
        )
        basic.pause(200)
        if (sonar.ping(
        DigitalPin.P10,
        DigitalPin.P11,
        PingUnit.Centimeters
        ) - temp < 2) {
            no_of_person += 1
            break;
        } else {
            if (sonar.ping(
            DigitalPin.P10,
            DigitalPin.P11,
            PingUnit.Centimeters
            ) - temp > 2) {
                no_of_person += -1
                break;
            }
        }
    }
    if (no_of_person < 0) {
        no_of_person = 0
    }
    if (no_of_person > 9) {
        no_of_person = 9
    }
    basic.showNumber(no_of_person)
})
basic.forever(function () {
    while (sonar.ping(
    DigitalPin.P9,
    DigitalPin.P8,
    PingUnit.Centimeters
    ) > 0 && sonar.ping(
    DigitalPin.P9,
    DigitalPin.P8,
    PingUnit.Centimeters
    ) < 16) {
        temp2 = sonar.ping(
        DigitalPin.P9,
        DigitalPin.P8,
        PingUnit.Centimeters
        )
        basic.pause(200)
        if (sonar.ping(
        DigitalPin.P9,
        DigitalPin.P8,
        PingUnit.Centimeters
        ) - temp2 < 2) {
            no_of_person += 1
            break;
        } else {
            if (sonar.ping(
            DigitalPin.P9,
            DigitalPin.P8,
            PingUnit.Centimeters
            ) - temp2 > 2) {
                no_of_person += -1
                break;
            }
        }
    }
    if (no_of_person < 0) {
        no_of_person = 0
    }
    if (no_of_person > 9) {
        no_of_person = 9
    }
    basic.showNumber(no_of_person)
})