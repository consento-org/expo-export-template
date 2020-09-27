// This file has been generated with expo-export@5.0.0, a Sketch plugin.
import { forSize } from '../../util/Placement'
import { Polygon } from '../../util/Polygon'
import { Color } from '../Color'
import { TextBox } from '../../util/TextBox'
import { TextStyles } from '../TextStyles'

export const elementItem = {
  name: 'elementItem',
  place: forSize(375, 73),
  layers: {
    bg: new Polygon('bg', { y: 6, w: 375, h: 67 }, Color.flatBg, null, []),
    labelEn: new TextBox('labelEn', 'Item', TextStyles.EnItem, { x: 10, y: 6, w: 355, h: 67, r: 10 }),
    labelJa: new TextBox('labelJa', 'アイテム', TextStyles.JaItem, { x: 10, y: 8.5, w: 355, h: 56, r: 10, b: 8.5 })
  }
}
