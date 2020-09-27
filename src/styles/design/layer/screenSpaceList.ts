// This file has been generated with expo-export@5.0.0, a Sketch plugin.
import { forSize } from '../../util/Placement'
import { Color } from '../Color'
import { LayerPlacement } from '../../util/LayerPlacement'
import { elementItem } from './elementItem'
import { elementHeader } from './elementHeader'
import { elementBottomBar } from './elementBottomBar'

export const screenSpaceList = {
  name: 'screenSpaceList',
  place: forSize(375, 812),
  backgroundColor: Color.bg,
  layers: {
    item1: new LayerPlacement('item1', elementItem, elementItem.layers, { y: 117.5, w: 375, h: 67, b: 627.5 }),
    item2: new LayerPlacement('item2', elementItem, elementItem.layers, { y: 184.5, w: 375, h: 67, b: 560.5 }),
    header: new LayerPlacement('header', elementHeader, elementHeader.layers, { y: 0.5, w: 376, h: 117, r: -1, b: 694.5 }),
    bottomBar: new LayerPlacement('bottomBar', elementBottomBar, elementBottomBar.layers, { y: 732, w: 375, h: 80 })
  }
}
