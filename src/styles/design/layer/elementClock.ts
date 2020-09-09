// This file has been generated with expo-export@3.8.3, a Sketch plugin.
import { Layer } from '../../util/Layer'
import { Polygon } from '../../util/Polygon'
import { Color } from '../Color'
/* eslint-disable @typescript-eslint/lines-between-class-members */
export class ElementClockClass extends Layer {
  dial = new Polygon({ x: 0, y: 0, w: 238.87, h: 238.87 }, Color.white, null, [])
  minute = new Polygon({ x: 118.5, y: 119, w: 121, h: 1 }, null, {
    fill: '#000000ff',
    thickness: 2,
    lineEnd: 'Round'
  }, [])
  hour = new Polygon({ x: 118.93, y: 118.93, w: 64, h: 1 }, null, {
    fill: '#000000ff',
    thickness: 6,
    lineEnd: 'Round'
  }, [])
  constructor () {
    super('elementClock', 240, 239, Color.bg)
  }
}

export const elementClock = new ElementClockClass()
