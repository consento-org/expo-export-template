// This file has been generated with expo-export@4.1.0, a Sketch plugin.
import { Polygon } from '../../util/Polygon'
import { Color } from '../Color'
import { TextBox } from '../../util/TextBox'
import { TextStyles } from '../TextStyles'

export const elementInput = {
  name: 'elementInput',
  width: 375,
  height: 62,
  layers: {
    bg: new Polygon({ x: 0, y: 0, w: 375, h: 62, r: 0, b: 0 }, Color.flatBg, null, []),
    bright: new Polygon({ x: 9.75, y: 0, w: 355.5, h: 62, r: 9.75, b: 0 }, Color.white, null, []),
    inputEn: new TextBox('Message', TextStyles.EnInput, { x: 10, y: 9, w: 355, h: 53, r: 10, b: 0 }),
    inputJa: new TextBox('メッセージ', TextStyles.JaInput, { x: 10.25, y: 4, w: 355, h: 53, r: 9.75, b: 5 })
  }
}
