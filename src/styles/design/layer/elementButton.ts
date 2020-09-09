// This file has been generated with expo-export@3.8.3, a Sketch plugin.
import { Layer } from '../../util/Layer'
import { Polygon } from '../../util/Polygon'
import { GradientType } from '../../util/Fill'
import { Color } from '../Color'
import { TextBox } from '../../util/TextBox'
import { TextStyles } from '../TextStyles'
/* eslint-disable @typescript-eslint/lines-between-class-members */
export class ElementButtonClass extends Layer {
  bg = new Polygon({ x: 6, y: 6, w: 158, h: 68 }, {
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
  }, { radius: 12 }, [])
  labelEn = new TextBox('OK', TextStyles.EnButton, { x: 11.5, y: 20, w: 147, h: 40 })
  labelJa = new TextBox('了解', TextStyles.JaButton, { x: 11.5, y: 13, w: 147, h: 40 })
  constructor () {
    super('elementButton', 170, 80)
  }
}

export const elementButton = new ElementButtonClass()
