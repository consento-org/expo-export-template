// This file has been generated with expo-export@4.1.0, a Sketch plugin.
import { Color } from '../Color'
import { LayerPlacement } from '../../util/LayerPlacement'
import { elementClock } from './elementClock'
import { elementHeader } from './elementHeader'

export const screenTimeContent = {
  name: 'screenTimeContent',
  width: 375,
  height: 812,
  backgroundColor: Color.bg,
  layers: {
    clock: new LayerPlacement(elementClock, elementClock.layers, { x: 67.5, y: 186, w: 240, h: 239, r: 67.5, b: 387 }),
    header: new LayerPlacement(elementHeader, elementHeader.layers, { x: 0, y: 0, w: 376, h: 117, r: -1, b: 695 })
  }
}
