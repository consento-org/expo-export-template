// This file has been generated with expo-export@4.0.0, a Sketch plugin.
import { Color } from '../Color'
import { ImageAsset } from '../ImageAsset'
import { ImagePlacement } from '../../util/ImagePlacement'
import { TextBox } from '../../util/TextBox'
import { TextStyles } from '../TextStyles'
import { elementHeader } from './elementHeader'
import { LayerPlacement } from '../../util/LayerPlacement'

export const screenTime = {
  name: 'screenTime',
  width: 375,
  height: 812,
  backgroundColor: Color.pink,
  layers: {
    right: new ImagePlacement(ImageAsset.iconArrowRight, { x: 248, y: 685, w: 127, h: 127, r: 0, b: 0 }),
    left: new ImagePlacement(ImageAsset.iconArrowLeft, { x: 0, y: 685, w: 127, h: 127, r: 248, b: 0 }),
    illustration: new ImagePlacement(ImageAsset.illustrationTime, { x: 46.5, y: 218, w: 282, h: 278, r: 46.5, b: 316 }),
    titleEn: new TextBox('Time', TextStyles.EnMain, { x: 35.5, y: 456, w: 304, h: 114, r: 35.5, b: 242 }),
    titleJa: new TextBox('時間', TextStyles.JaMain, { x: 35.5, y: 456, w: 304, h: 114, r: 35.5, b: 242 }),
    header: new LayerPlacement(elementHeader, { x: -1, y: 0, w: 376, h: 117, r: 0, b: 695 }, {})
  }
}
