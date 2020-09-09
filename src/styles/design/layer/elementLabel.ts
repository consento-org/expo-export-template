// This file has been generated with expo-export@3.8.3, a Sketch plugin.
import { Layer } from '../../util/Layer'
import { Text } from '../../util/Text'
import { TextStyles } from '../TextStyles'
/* eslint-disable lines-between-class-members */
export class ElementLabelClass extends Layer {
  labelEn: Text
  labelJa: Text
  constructor () {
    super('elementLabel', 375, 65)
    this.labelEn = new Text('Label', TextStyles.EnLabel, { x: 9.5, y: 17.25, w: 324, h: 30.5 }, this)
    this.labelJa = new Text('ラベル', TextStyles.JaLabel, { x: 9.5, y: 18.25, w: 324, h: 30.5 }, this)
  }
}

export const elementLabel = new ElementLabelClass()
