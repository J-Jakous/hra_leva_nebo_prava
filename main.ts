input.onButtonPressed(Button.A, function () {
    if (nahoda && !(kliknul)) {
        body += 1
    }
    kliknul = true
})
input.onButtonPressed(Button.B, function () {
    if (!(nahoda) && !(kliknul)) {
        body += 1
    }
    kliknul = true
})
let nahoda = false
let kliknul = false
let body = 0
let odpocet = 3
for (let index = 0; index < 3; index++) {
    basic.showNumber(odpocet)
    basic.pause(1000)
    odpocet += -1
}
basic.clearScreen()
for (let index = 0; index < 10; index++) {
    kliknul = false
    nahoda = Math.randomBoolean()
    if (nahoda) {
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
