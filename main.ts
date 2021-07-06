radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showArrow(ArrowNames.South)
    }
    if (receivedNumber == 2) {
        basic.showArrow(ArrowNames.North)
    }
    if (receivedNumber == 3) {
        basic.showArrow(ArrowNames.East)
    }
    if (receivedNumber == 4) {
        basic.showArrow(ArrowNames.West)
    }
})
radio.setGroup(96)
basic.forever(function () {
	
})
