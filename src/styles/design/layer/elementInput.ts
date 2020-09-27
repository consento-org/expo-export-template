// This file has been generated with expo-export@5.0.0, a Sketch plugin.
import { forSize } from '../../util/Placement'
import { Polygon } from '../../util/Polygon'
import { Color } from '../Color'
import { TextBox } from '../../util/TextBox'
import { TextStyles } from '../TextStyles'

export const elementInput = {
  name: 'elementInput',
  place: forSize(375, 62),
  layers: {
    bg: new Polygon('bg', { w: 375, h: 62 }, Color.flatBg, null, []),
    bright: new Polygon('bright', { x: 9.75, w: 355.5, h: 62, r: 9.75 }, Color.white, null, []),
    inputEn: new TextBox('inputEn', 'Message', TextStyles.EnInput, { x: 10, y: 9, w: 355, h: 53, r: 10 }),
    inputJa: new TextBox('inputJa', 'メッセージ', TextStyles.JaInput, { x: 10.25, y: 4, w: 355, h: 53, r: 9.75, b: 5 })
  }
}
