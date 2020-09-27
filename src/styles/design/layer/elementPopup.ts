// This file has been generated with expo-export@5.0.0, a Sketch plugin.
import { forSize } from '../../util/Placement'
import { Slice9 } from '../Slice9'
import { Slice9Placement } from '../../util/Slice9Placement'
import { TextBox } from '../../util/TextBox'
import { TextStyles } from '../TextStyles'

export const elementPopup = {
  name: 'elementPopup',
  place: forSize(327, 170),
  layers: {
    bg: new Slice9Placement('bg', Slice9.elementPopupBg, { w: 327, h: 170 }),
    outputEn: new TextBox('outputEn', 'output', TextStyles.EnPopup, { y: 60, w: 327, h: 39, b: 71 }),
    outputJa: new TextBox('outputJa', '脱出', TextStyles.JaPopup, { y: 67.5, w: 327, h: 49, b: 53.5 })
  }
}
