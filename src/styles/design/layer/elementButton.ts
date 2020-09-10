// This file has been generated with expo-export@4.0.0, a Sketch plugin.
import { Polygon } from '../../util/Polygon'
import { Color } from '../Color'
import { TextBox } from '../../util/TextBox'
import { TextStyles } from '../TextStyles'

export const elementButton = {
  name: 'elementButton',
  width: 170,
  height: 80,
  layers: {
    bg: new Polygon({ x: 6, y: 6, w: 158, h: 68 }, {
      gradient: {
        type: 'linear',
        stops: [
          { color: Color.dark, position: 0 },
          { color: Color.text, position: 1 }
        ],
        from: { x: 0.5, y: 0 },
        to: { x: 0.5, y: 1 }
      }
    }, { radius: 12 }, []),
    labelEn: new TextBox('OK', TextStyles.EnButton, { x: 11.5, y: 20, w: 147, h: 40 }),
    labelJa: new TextBox('了解', TextStyles.JaButton, { x: 11.5, y: 13, w: 147, h: 40 })
  }
}
