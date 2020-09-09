// This file has been generated with expo-export@3.8.3, a Sketch plugin.
import { Layer } from '../../util/Layer'
import { Polygon } from '../../util/Polygon'
import { GradientType } from '../../util/Fill'
import { Color } from '../Color'
import { Text } from '../../util/Text'
import { TextStyles } from '../TextStyles'
/* eslint-disable lines-between-class-members */
export class ElementButtonClass extends Layer {
  bg: Polygon
  labelEn: Text
  labelJa: Text
  constructor () {
    super('elementButton', 170, 80)
    this.bg = new Polygon({ x: 6, y: 6, w: 158, h: 68 }, {
      gradient: {
        type: GradientType.linear,
        stops: [{
          color: Color.dark,
          position: 0
        }, {
          color: Color.text,
          position: 1
        }],
        from: {
          x: 0.5,
          y: 0
        },
        to: {
          x: 0.5,
          y: 1
        }
      }
    }, { radius: 12 }, [], this)
    this.labelEn = new Text('OK', TextStyles.EnButton, { x: 11.5, y: 20, w: 147, h: 40 }, this)
    this.labelJa = new Text('了解', TextStyles.JaButton, { x: 11.5, y: 13, w: 147, h: 40 }, this)
  }
}

export const elementButton = new ElementButtonClass()
