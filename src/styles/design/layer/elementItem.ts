// This file has been generated with expo-export@4.0.0, a Sketch plugin.
import { Polygon } from '../../util/Polygon'
import { Color } from '../Color'
import { TextBox } from '../../util/TextBox'
import { TextStyles } from '../TextStyles'

export const elementItem = {
  name: 'elementItem',
  width: 375,
  height: 73,
  layers: {
    bg: new Polygon({ x: 0, y: 6, w: 375, h: 67, r: 0, b: 0 }, Color.flatBg, null, []),
    labelEn: new TextBox('Item', TextStyles.EnItem, { x: 10, y: 6, w: 355, h: 67, r: 10, b: 0 }),
    labelJa: new TextBox('アイテム', TextStyles.JaItem, { x: 10, y: 8.5, w: 355, h: 56, r: 10, b: 8.5 })
  }
}
