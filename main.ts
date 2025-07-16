let step = 0
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) >= 150) {
        step += 1
        basic.showNumber(step)
    }
})
