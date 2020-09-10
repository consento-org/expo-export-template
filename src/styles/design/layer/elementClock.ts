// This file has been generated with expo-export@4.0.0, a Sketch plugin.
import { Color } from '../Color'
import { Polygon } from '../../util/Polygon'

export const elementClock = {
  name: 'elementClock',
  width: 240,
  height: 239,
  backgroundColor: Color.bg,
  layers: {
    dial: new Polygon({ x: 0, y: 0, w: 238.87, h: 238.87 }, Color.white, null, []),
    minute: new Polygon({ x: 118.5, y: 119, w: 121, h: 1 }, null, {
      fill: '#000000ff',
      thickness: 2,
      strokeLinecap: 'round'
    }, []),
    hour: new Polygon({ x: 118.93, y: 118.93, w: 64, h: 1 }, null, {
      fill: '#000000ff',
      thickness: 6,
      strokeLinecap: 'round'
    }, [])
  }
}
