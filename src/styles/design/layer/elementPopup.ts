// This file has been generated with expo-export@4.0.0, a Sketch plugin.
import { Slice9 } from '../Slice9'
import { Slice9Placement } from '../../util/Slice9Placement'
import { TextBox } from '../../util/TextBox'
import { TextStyles } from '../TextStyles'

export const elementPopup = {
  name: 'elementPopup',
  width: 327,
  height: 170,
  layers: {
    bg: new Slice9Placement(Slice9.elementPopupBg, { x: 0, y: 0, w: 327, h: 170, r: 0, b: 0 }),
    outputEn: new TextBox('output', TextStyles.EnPopup, { x: 0, y: 60, w: 327, h: 39, r: 0, b: 71 }),
    outputJa: new TextBox('脱出', TextStyles.JaPopup, { x: 0, y: 67.5, w: 327, h: 49, r: 0, b: 53.5 })
  }
}
