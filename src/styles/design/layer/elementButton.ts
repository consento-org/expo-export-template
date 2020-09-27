// This file has been generated with expo-export@5.0.0, a Sketch plugin.
import { forSize } from '../../util/Placement'
import { Polygon } from '../../util/Polygon'
import { Color } from '../Color'
import { TextBox } from '../../util/TextBox'
import { TextStyles } from '../TextStyles'

export const elementButton = {
  name: 'elementButton',
  place: forSize(170, 80),
  layers: {
    bg: new Polygon('bg', { x: 6, y: 6, w: 158, h: 68, r: 6, b: 6 }, {
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
    labelEn: new TextBox('labelEn', 'Show', TextStyles.EnButton, { x: 11.5, y: 20, w: 147, h: 40, r: 11.5, b: 20 }),
    labelJa: new TextBox('labelJa', '表示', TextStyles.JaButton, { x: 11.5, y: 13, w: 147, h: 40, r: 11.5, b: 27 })
  }
}
