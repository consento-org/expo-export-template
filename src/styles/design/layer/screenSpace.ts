// This file has been generated with expo-export@3.8.3, a Sketch plugin.
import { Layer } from '../../util/Layer'
import { Asset } from '../Asset'
import { ImagePlacement } from '../../util/ImagePlacement'
import { TextBox } from '../../util/TextBox'
import { TextStyles } from '../TextStyles'
import { elementHeader } from './elementHeader'
import { LayerPlacement } from '../../util/LayerPlacement'
import { Color } from '../Color'
/* eslint-disable @typescript-eslint/lines-between-class-members */
export class ScreenSpaceClass extends Layer {
  right = new ImagePlacement(Asset.iconArrowRight, { x: 248, y: 685, w: 127, h: 127 })
  left = new ImagePlacement(Asset.iconArrowLeft, { x: 0, y: 685, w: 127, h: 127 })
  illustration = new ImagePlacement(Asset.illustrationSpace, { x: 46.5, y: 218, w: 282, h: 278 })
  titleEn = new TextBox('Space', TextStyles.EnMain, { x: 35.5, y: 456, w: 304, h: 114 })
  titleJa = new TextBox('宇宙', TextStyles.JaMain, { x: 35.5, y: 456, w: 304, h: 114 })
  header = new LayerPlacement(elementHeader, { x: -1, y: 0, w: 376, h: 117 }, {})
  constructor () {
    super('screenSpace', 375, 812, Color.green)
  }
}

export const screenSpace = new ScreenSpaceClass()
