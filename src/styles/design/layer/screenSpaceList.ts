// This file has been generated with expo-export@4.1.0, a Sketch plugin.
import { Color } from '../Color'
import { LayerPlacement } from '../../util/LayerPlacement'
import { elementItem } from './elementItem'
import { elementHeader } from './elementHeader'
import { elementBottomBar } from './elementBottomBar'

export const screenSpaceList = {
  name: 'screenSpaceList',
  width: 375,
  height: 812,
  backgroundColor: Color.bg,
  layers: {
    item1: new LayerPlacement(elementItem, elementItem.layers, { x: 0, y: 117.5, w: 375, h: 67, r: 0, b: 627.5 }),
    item2: new LayerPlacement(elementItem, elementItem.layers, { x: 0, y: 184.5, w: 375, h: 67, r: 0, b: 560.5 }),
    header: new LayerPlacement(elementHeader, elementHeader.layers, { x: 0, y: 0.5, w: 376, h: 117, r: -1, b: 694.5 }),
    bottomBar: new LayerPlacement(elementBottomBar, elementBottomBar.layers, { x: 0, y: 732, w: 375, h: 80, r: 0, b: 0 })
  }
}
