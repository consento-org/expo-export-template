// This file has been generated with expo-export@3.8.3, a Sketch plugin.
import { Layer } from '../../util/Layer'
import { elementClock } from './elementClock'
import { LayerPlacement } from '../../util/LayerPlacement'
import { elementHeader } from './elementHeader'
import { Color } from '../Color'
/* eslint-disable @typescript-eslint/lines-between-class-members */
export class ScreenTimeContentClass extends Layer {
  clock = new LayerPlacement(elementClock, { x: 67.5, y: 186, w: 240, h: 239 }, {})
  header = new LayerPlacement(elementHeader, { x: 0, y: 0, w: 376, h: 117 }, {})
  constructor () {
    super('screenTimeContent', 375, 812, Color.bg)
  }
}

export const screenTimeContent = new ScreenTimeContentClass()
