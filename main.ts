function gidatu_ezkerra () {
    basic.showArrow(ArrowNames.North)
    basic.showArrow(ArrowNames.NorthEast)
    basic.showArrow(ArrowNames.East)
    basic.showArrow(ArrowNames.SouthEast)
    basic.showArrow(ArrowNames.South)
    basic.showArrow(ArrowNames.SouthWest)
    basic.showArrow(ArrowNames.West)
    basic.showArrow(ArrowNames.NorthWest)
}
function gidatu_eskuina () {
    basic.showArrow(ArrowNames.NorthWest)
    basic.showArrow(ArrowNames.West)
    basic.showArrow(ArrowNames.West)
    basic.showArrow(ArrowNames.South)
    basic.showArrow(ArrowNames.SouthEast)
    basic.showArrow(ArrowNames.East)
    basic.showArrow(ArrowNames.NorthEast)
    basic.showArrow(ArrowNames.North)
}
basic.forever(function () {
    if (input.isGesture(Gesture.TiltLeft)) {
        gidatu_ezkerra()
    }
    if (input.isGesture(Gesture.TiltRight)) {
        gidatu_eskuina()
    }
})
