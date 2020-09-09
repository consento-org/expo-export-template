// This file has been generated with expo-export@3.8.3, a Sketch plugin.
import { Polygon } from '../../util/Polygon'
import { Color } from '../Color'

export const elementClock = {
  name: 'elementClock',
  width: 240,
  height: 239,
  backgroundColor: Color.bg,
  dial: new Polygon({ x: 0, y: 0, w: 238.87, h: 238.87 }, Color.white, null, []),
  minute: new Polygon({ x: 118.5, y: 119, w: 121, h: 1 }, null, {
    fill: '#000000ff',
    thickness: 2,
    lineEnd: 'Round'
  }, []),
  hour: new Polygon({ x: 118.93, y: 118.93, w: 64, h: 1 }, null, {
    fill: '#000000ff',
    thickness: 6,
    lineEnd: 'Round'
  }, [])
}
