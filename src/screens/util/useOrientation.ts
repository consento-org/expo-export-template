import { useState, useEffect } from 'react'
import * as ScreenOrientation from 'expo-screen-orientation'

let mem = ScreenOrientation.Orientation.UNKNOWN

ScreenOrientation.getOrientationAsync().then(
  orientation => { mem = orientation },
  _ => {}
)

export function isLandscape (orientation: ScreenOrientation.Orientation): boolean {
  return orientation === ScreenOrientation.Orientation.LANDSCAPE_LEFT ||
    orientation === ScreenOrientation.Orientation.LANDSCAPE_RIGHT
}

export const useOrientation = (): ScreenOrientation.Orientation => {
  const [orientation, setOrientation] = useState(mem)

  useEffect(() => {
    let removed = false
    function handleChange ({ orientationLock, orientationInfo: { orientation } }: ScreenOrientation.OrientationChangeEvent): void {
      if (removed) return
      mem = orientation
      setOrientation(orientation)
    }

    const subscription = ScreenOrientation.addOrientationChangeListener(handleChange)
    // We might have missed an update between calling `get` in render and
    // `addEventListener` in this handler, so we set it here. If there was
    // no change, React will filter out this update as a no-op.
    ScreenOrientation.getOrientationAsync().then(
      orientation => {
        if (!removed) {
          setOrientation(orientation)
        }
      },
      _ => {}
    )
    return () => {
      removed = true
      subscription.remove()
    }
  }, [])
  return orientation
}
