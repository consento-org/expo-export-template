// This file has been generated with expo-export@3.8.3, a Sketch plugin.
import { Polygon } from '../../util/Polygon'
import { Color } from '../Color'
import { TextBox } from '../../util/TextBox'
import { TextStyles } from '../TextStyles'

export const elementBox = {
  name: 'elementBox',
  width: 115,
  height: 111,
  layers: {
    bg: new Polygon({ x: 0, y: 0, w: 115, h: 111 }, Color.flatBg, null, []),
    labelEn: new TextBox('Item', {
      ...TextStyles.EnBox,
      textAlignVertical: 'center'
    }, { x: 6, y: 41.5, w: 103, h: 28 }),
    labelJa: new TextBox('アイテム', TextStyles.JaBox, { x: 0, y: 38.5, w: 115, h: 39 })
  }
}
