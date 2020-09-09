// This file has been generated with expo-export@3.8.3, a Sketch plugin.
import { Layer } from '../../util/Layer'
import { elementItem } from './elementItem'
import { LayerPlacement } from '../../util/LayerPlacement'
import { elementHeader } from './elementHeader'
import { elementBottomBar } from './elementBottomBar'
import { Color } from '../Color'
/* eslint-disable lines-between-class-members */
export class ScreenSpaceListClass extends Layer {
  item1 = new LayerPlacement(elementItem, { x: 0, y: 131, w: 375, h: 67 }, {})
  item2 = new LayerPlacement(elementItem, { x: 0, y: 198, w: 375, h: 67 }, {})
  header = new LayerPlacement(elementHeader, { x: 0, y: 0.5, w: 376, h: 117 }, {})
  bottomBar = new LayerPlacement(elementBottomBar, { x: 0, y: 732, w: 375, h: 80 }, {})
  constructor () {
    super('screenSpaceList', 375, 812, Color.bg)
  }
}

export const screenSpaceList = new ScreenSpaceListClass()