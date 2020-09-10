// This file has been generated with expo-export@3.8.3, a Sketch plugin.
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
    input: new LayerPlacement(elementInput, { x: 0, y: 205, w: 375, h: 62 }, {}),
    label: new LayerPlacement(elementLabel, { x: 0, y: 140, w: 375, h: 65 }, {}),
    ok: new LayerPlacement(elementButton, { x: 10, y: 286.64, w: 170, h: 80 }, {}),
    header: new LayerPlacement(elementHeader, { x: 0, y: 0.85, w: 376, h: 117 }, {})
  }
}
