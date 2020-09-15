// This file has been generated with expo-export@4.0.0, a Sketch plugin.
import { Color } from '../Color'
import { elementInput } from './elementInput'
import { LayerPlacement } from '../../util/LayerPlacement'
import { elementLabel } from './elementLabel'
import { elementButton } from './elementButton'
import { elementHeader } from './elementHeader'

export const screenMindContent = {
  name: 'screenMindContent',
  width: 375,
  height: 812,
  backgroundColor: Color.bg,
  layers: {
    input: new LayerPlacement(elementInput, { x: 0, y: 205, w: 375, h: 62, r: 0, b: 545 }, {}),
    label: new LayerPlacement(elementLabel, { x: 0, y: 140, w: 375, h: 65, r: 0, b: 607 }, {}),
    ok: new LayerPlacement(elementButton, { x: 10, y: 286.64, w: 170, h: 80, r: 195, b: 445.3518634411266 }, {}),
    header: new LayerPlacement(elementHeader, { x: 0, y: 0.85, w: 376, h: 117, r: -1, b: 694.1481365588734 }, {})
  }
}
