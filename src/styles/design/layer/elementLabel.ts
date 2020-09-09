// This file has been generated with expo-export@3.8.3, a Sketch plugin.
import { Layer } from '../../util/Layer'
import { TextBox } from '../../util/TextBox'
import { TextStyles } from '../TextStyles'
/* eslint-disable @typescript-eslint/lines-between-class-members */
export class ElementLabelClass extends Layer {
  labelEn = new TextBox('Label', TextStyles.EnLabel, { x: 9.5, y: 17.25, w: 324, h: 30.5 })
  labelJa = new TextBox('ラベル', TextStyles.JaLabel, { x: 9.5, y: 18.25, w: 324, h: 30.5 })
  constructor () {
    super('elementLabel', 375, 65)
  }
}

export const elementLabel = new ElementLabelClass()
