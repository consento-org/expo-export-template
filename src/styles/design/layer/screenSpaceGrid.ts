// This file has been generated with expo-export@5.0.0, a Sketch plugin.
import { forSize } from '../../util/Placement'
import { Color } from '../Color'
import { LayerPlacement } from '../../util/LayerPlacement'
import { elementBox } from './elementBox'
import { elementHeader } from './elementHeader'
import { elementBottomBar } from './elementBottomBar'

export const screenSpaceGrid = {
  name: 'screenSpaceGrid',
  place: forSize(375, 812),
  backgroundColor: Color.bg,
  layers: {
    box1: new LayerPlacement('box1', elementBox, elementBox.layers, { x: 9, y: 138, w: 115, h: 111, r: 251, b: 563 }),
    box2: new LayerPlacement('box2', elementBox, elementBox.layers, { x: 130.5, y: 138, w: 115, h: 111, r: 129.5, b: 563 }),
    box3: new LayerPlacement('box3', elementBox, elementBox.layers, { x: 252, y: 138, w: 115, h: 111, r: 8, b: 563 }),
    box4: new LayerPlacement('box4', elementBox, elementBox.layers, { x: 9, y: 256, w: 115, h: 111, r: 251, b: 445 }),
    box5: new LayerPlacement('box5', elementBox, elementBox.layers, { x: 130.5, y: 256, w: 115, h: 111, r: 129.5, b: 445 }),
    box6: new LayerPlacement('box6', elementBox, elementBox.layers, { x: 252, y: 256, w: 115, h: 111, r: 8, b: 445 }),
    header: new LayerPlacement('header', elementHeader, elementHeader.layers, { y: 0.5, w: 376, h: 117, r: -1, b: 694.5 }),
    bottomBar: new LayerPlacement('bottomBar', elementBottomBar, elementBottomBar.layers, { y: 732, w: 375, h: 80 })
  }
}
