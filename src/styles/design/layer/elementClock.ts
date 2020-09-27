// This file has been generated with expo-export@5.0.0, a Sketch plugin.
import { forSize } from '../../util/Placement'
import { Color } from '../Color'
import { Polygon } from '../../util/Polygon'

export const elementClock = {
  name: 'elementClock',
  place: forSize(240, 239),
  backgroundColor: Color.bg,
  layers: {
    dial: new Polygon('dial', { w: 238.87, h: 238.87, r: 1.12, b: 0.12 }, Color.white, null, []),
    minute: new Polygon('minute', { x: 118.5, y: 119, w: 121, h: 1, r: 0.5, b: 119 }, null, {
      fill: '#000000ff',
      thickness: 2,
      strokeLinecap: 'round'
    }, []),
    hour: new Polygon('hour', { x: 118.93, y: 118.93, w: 64, h: 1, r: 57.06, b: 119.06 }, null, {
      fill: '#000000ff',
      thickness: 6,
      strokeLinecap: 'round'
    }, [])
  }
}
