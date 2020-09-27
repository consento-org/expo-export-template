// This file has been generated with expo-export@5.0.0, a Sketch plugin.
import { forSize } from '../../util/Placement'
import { Polygon } from '../../util/Polygon'
import { Color } from '../Color'
import { TextBox } from '../../util/TextBox'
import { TextStyles } from '../TextStyles'

export const elementBox = {
  name: 'elementBox',
  place: forSize(115, 111),
  layers: {
    bg: new Polygon('bg', { w: 115, h: 111 }, Color.flatBg, null, []),
    labelEn: new TextBox('labelEn', 'Item', {
      ...TextStyles.EnBox,
      textAlignVertical: 'center'
    }, { x: 6, y: 41.5, w: 103, h: 28, r: 6, b: 41.5 }),
    labelJa: new TextBox('labelJa', 'アイテム', TextStyles.JaBox, { y: 38.5, w: 115, h: 39, b: 33.5 })
  }
}
