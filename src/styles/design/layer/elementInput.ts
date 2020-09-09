// This file has been generated with expo-export@3.8.3, a Sketch plugin.
import { Polygon } from '../../util/Polygon'
import { Color } from '../Color'
import { TextBox } from '../../util/TextBox'
import { TextStyles } from '../TextStyles'

export const elementInput = {
  name: 'elementInput',
  width: 375,
  height: 62,
  bg: new Polygon({ x: 0, y: 0, w: 375, h: 62 }, Color.flatBg, null, []),
  bright: new Polygon({ x: 9.75, y: 0, w: 355.5, h: 62 }, Color.white, null, []),
  inputEn: new TextBox('Input here', TextStyles.EnInput, { x: 10, y: 9, w: 355, h: 53 }),
  inputJa: new TextBox('入力して下さい', TextStyles.JaInput, { x: 10.25, y: 4, w: 355, h: 53 })
}
