// This file has been generated with expo-export@4.0.0, a Sketch plugin.
import { Color } from '../Color'
import { LayerPlacement } from '../../util/LayerPlacement'
import { elementInput } from './elementInput'
import { elementLabel } from './elementLabel'
import { elementButton } from './elementButton'
import { elementHeader } from './elementHeader'
import { elementPopup } from './elementPopup'
import { TextBox } from '../../util/TextBox'

export const screenMindContent = {
  name: 'screenMindContent',
  width: 375,
  height: 812,
  backgroundColor: Color.bg,
  layers: {
    input: new LayerPlacement(elementInput, elementInput.layers, { x: 0, y: 205, w: 375, h: 62, r: 0, b: 545 }),
    label: new LayerPlacement(elementLabel, elementLabel.layers, { x: 0, y: 140, w: 375, h: 65, r: 0, b: 607 }),
    ok: new LayerPlacement(elementButton, elementButton.layers, { x: 10.5, y: 283, w: 265, h: 80, r: 99.5, b: 449 }),
    header: new LayerPlacement(elementHeader, elementHeader.layers, { x: 0, y: 0.85, w: 376, h: 117, r: -1, b: 694.1481365588734 }),
    popup: new LayerPlacement(elementPopup, elementPopup.layers, { x: 63.75, y: 340, w: 248.5, h: 132, r: 62.75, b: 340 }, ({ outputJa, outputEn }) => ({
      outputJa: new TextBox('こんにちは！', outputJa.style, outputJa.place),
      outputEn: new TextBox('Hello World!', outputEn.style, outputEn.place)
    }))
  }
}
