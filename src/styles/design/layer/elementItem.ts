// This file has been generated with expo-export@3.8.3, a Sketch plugin.
import { Layer } from '../../util/Layer'
import { Polygon } from '../../util/Polygon'
import { Color } from '../Color'
import { TextBox } from '../../util/TextBox'
import { TextStyles } from '../TextStyles'
/* eslint-disable @typescript-eslint/lines-between-class-members */
export class ElementItemClass extends Layer {
  bg = new Polygon({ x: 0, y: 6, w: 375, h: 67 }, Color.flatBg, null, [])
  labelEn = new TextBox('Item', TextStyles.EnItem, { x: 10, y: 6, w: 355, h: 67 })
  labelJa = new TextBox('アイテム', TextStyles.JaItem, { x: 10, y: 8.5, w: 355, h: 56 })
  constructor () {
    super('elementItem', 375, 73)
  }
}

export const elementItem = new ElementItemClass()
