let height = 0
let cont_short = 0
let sum_height = 0
let cont_medium = 0
let cont_tall = 0
let average_higth = 0
let numbers = 0
let cont_team_green = 0
let cont_team_blue = 0
let cont_team_red = 0
let contador_even = 0
let contador_odd = 0
let angle = 0
let cont_obtuse = 0
let x = 0
let y = 0
input.onPinPressed(TouchPin.P0, function () {
    for (let index = 0; index < 30; index++) {
        height = randint(1, 170)
        if (height <= 150) {
            basic.showNumber(height)
            basic.showString("Short person")
            cont_short += 1
            sum_height += height
            sum_height = sum_height + height
        } else if (height >= 151 && height <= 170) {
            basic.showNumber(height)
            basic.showString("Medium height")
            cont_medium += 1
            sum_height += height
            sum_height = sum_height + height
        } else {
            basic.showNumber(height)
            basic.showString("Tall person")
            cont_tall += 1
            sum_height += height
            sum_height = sum_height + height
        }
    }
    basic.showString("Total short persons:")
    basic.showNumber(cont_short)
    basic.showString("Total medium persons:")
    basic.showNumber(cont_medium)
    basic.showString("Total tall persons:")
    basic.showNumber(cont_tall)
    average_higth = sum_height / 30
    basic.showNumber(sum_height)
})
input.onButtonPressed(Button.A, function () {
    numbers = randint(1, 6)
    if (numbers == 1 || numbers == 3) {
        basic.showString("Team Green")
        cont_team_green += 1
    } else if (numbers == 2 || numbers == 5) {
        basic.showString("Team Blue")
        cont_team_blue += 1
    } else {
        basic.showString("Team Red")
        cont_team_red += 1
    }
    basic.showString("Team Green")
    basic.showNumber(cont_team_green)
    basic.showString("Team Blue")
    basic.showNumber(cont_team_blue)
    basic.showString("Team Red")
    basic.showNumber(cont_team_red)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 10; index++) {
        numbers = randint(1, 100)
        basic.showNumber(numbers)
        numbers = numbers % 2
        if (numbers == 0) {
            basic.showString("even")
            contador_even += 1
        } else {
            basic.showString("odd")
            contador_odd += 1
        }
    }
    basic.showNumber(contador_even)
    basic.showString("even")
    basic.showNumber(contador_odd)
    basic.showString("odd")
})
input.onPinPressed(TouchPin.P1, function () {
    for (let index = 0; index <= 10; index++) {
        angle = randint(0, 180)
        basic.showNumber(angle)
        if (angle < 90) {
            basic.showString("Acute")
        } else if (angle == 90) {
            basic.showString("Straight")
        } else if (angle > 90) {
            basic.showString("Obtuse")
            cont_obtuse += 1
        }
    }
    basic.showNumber(cont_obtuse)
})
basic.forever(function () {
    while (input.pinIsPressed(TouchPin.P2)) {
        x = randint(0, 5)
        y = randint(0, 5)
        led.plot(x, y)
        basic.pause(300)
        if (x == y) {
            music.playMelody("C5 B A G A A G G ", 120)
        } else {
            music.playTone(494, music.beat(BeatFraction.Whole))
        }
    }
})
