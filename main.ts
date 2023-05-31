input.onButtonPressed(Button.A, function () {
    if (nahoda == true) {
        body += 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (nahoda == false) {
        body += 1
    }
})
let nahoda = false
let body = 0
let odpocet = 3
for (let index = 0; index < 3; index++) {
    basic.showNumber(odpocet)
    basic.pause(1000)
    odpocet += -1
}
basic.clearScreen()
for (let index = 0; index < 10; index++) {
    nahoda = Math.randomBoolean()
    if (nahoda == true) {
        basic.showArrow(ArrowNames.West)
    } else {
        basic.showArrow(ArrowNames.East)
    }
    basic.pause(randint(10, 200))
    basic.clearScreen()
    basic.pause(200)
}
while (true) {
    basic.showNumber(body)
}
