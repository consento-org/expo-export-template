// This file has been generated with expo-export@3.8.3, a Sketch plugin.
import { Layer } from '../../util/Layer'
import { elementBox } from './elementBox'
import { LayerPlacement } from '../../util/LayerPlacement'
import { elementHeader } from './elementHeader'
import { elementBottomBar } from './elementBottomBar'
import { Color } from '../Color'
/* eslint-disable lines-between-class-members */
export class ScreenSpaceGridClass extends Layer {
  box1 = new LayerPlacement(elementBox, { x: 9, y: 138, w: 115, h: 111 }, {})
  box2 = new LayerPlacement(elementBox, { x: 130.5, y: 138, w: 115, h: 111 }, {})
  box3 = new LayerPlacement(elementBox, { x: 252, y: 138, w: 115, h: 111 }, {})
  box4 = new LayerPlacement(elementBox, { x: 9, y: 256, w: 115, h: 111 }, {})
  box5 = new LayerPlacement(elementBox, { x: 130.5, y: 256, w: 115, h: 111 }, {})
  box6 = new LayerPlacement(elementBox, { x: 252, y: 256, w: 115, h: 111 }, {})
  header = new LayerPlacement(elementHeader, { x: 0, y: 0.5, w: 376, h: 117 }, {})
  bottomBar = new LayerPlacement(elementBottomBar, { x: 0, y: 732, w: 375, h: 80 }, {})
  constructor () {
    super('screenSpaceGrid', 375, 812, Color.bg)
  }
}

export const screenSpaceGrid = new ScreenSpaceGridClass()
