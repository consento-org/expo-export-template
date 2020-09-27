// This file has been generated with expo-export@5.0.0, a Sketch plugin.
import { forSize } from '../../util/Placement'
import { Color } from '../Color'
import { LayerPlacement } from '../../util/LayerPlacement'
import { elementClock } from './elementClock'
import { elementHeader } from './elementHeader'

export const screenTimeContent = {
  name: 'screenTimeContent',
  place: forSize(375, 812),
  backgroundColor: Color.bg,
  layers: {
    clock: new LayerPlacement('clock', elementClock, elementClock.layers, { x: 67.5, y: 186, w: 240, h: 239, r: 67.5, b: 387 }),
    header: new LayerPlacement('header', elementHeader, elementHeader.layers, { w: 376, h: 117, r: -1, b: 695 })
  }
}
