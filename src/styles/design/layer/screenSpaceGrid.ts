// This file has been generated with expo-export@4.0.0, a Sketch plugin.
import { Color } from '../Color'
import { LayerPlacement } from '../../util/LayerPlacement'
import { elementBox } from './elementBox'
import { elementHeader } from './elementHeader'
import { elementBottomBar } from './elementBottomBar'

export const screenSpaceGrid = {
  name: 'screenSpaceGrid',
  width: 375,
  height: 812,
  backgroundColor: Color.bg,
  layers: {
    box1: new LayerPlacement(elementBox, elementBox.layers, { x: 9, y: 138, w: 115, h: 111, r: 251, b: 563 }),
    box2: new LayerPlacement(elementBox, elementBox.layers, { x: 130.5, y: 138, w: 115, h: 111, r: 129.5, b: 563 }),
    box3: new LayerPlacement(elementBox, elementBox.layers, { x: 252, y: 138, w: 115, h: 111, r: 8, b: 563 }),
    box4: new LayerPlacement(elementBox, elementBox.layers, { x: 9, y: 256, w: 115, h: 111, r: 251, b: 445 }),
    box5: new LayerPlacement(elementBox, elementBox.layers, { x: 130.5, y: 256, w: 115, h: 111, r: 129.5, b: 445 }),
    box6: new LayerPlacement(elementBox, elementBox.layers, { x: 252, y: 256, w: 115, h: 111, r: 8, b: 445 }),
    header: new LayerPlacement(elementHeader, elementHeader.layers, { x: 0, y: 0.5, w: 376, h: 117, r: -1, b: 694.5 }),
    bottomBar: new LayerPlacement(elementBottomBar, elementBottomBar.layers, { x: 0, y: 732, w: 375, h: 80, r: 0, b: 0 })
  }
}
