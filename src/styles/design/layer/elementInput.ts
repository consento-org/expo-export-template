// This file has been generated with expo-export@3.8.3, a Sketch plugin.
import { Layer } from '../../util/Layer'
import { Polygon } from '../../util/Polygon'
import { Color } from '../Color'
import { TextBox } from '../../util/TextBox'
import { TextStyles } from '../TextStyles'
/* eslint-disable @typescript-eslint/lines-between-class-members */
export class ElementInputClass extends Layer {
  bg = new Polygon({ x: 0, y: 0, w: 375, h: 62 }, Color.flatBg, null, [])
  bright = new Polygon({ x: 9.75, y: 0, w: 355.5, h: 62 }, Color.white, null, [])
  inputEn = new TextBox('Input here', TextStyles.EnInput, { x: 10, y: 9, w: 355, h: 53 })
  inputJa = new TextBox('入力して下さい', TextStyles.JaInput, { x: 10.25, y: 4, w: 355, h: 53 })
  constructor () {
    super('elementInput', 375, 62)
  }
}

export const elementInput = new ElementInputClass()
