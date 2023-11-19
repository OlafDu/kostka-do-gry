input.onGesture(Gesture.Shake, function () {
    music.play(music.createSoundExpression(WaveShape.Noise, 54, 54, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    basic.showNumber(randint(1, 6))
})
basic.showString("kostka")
