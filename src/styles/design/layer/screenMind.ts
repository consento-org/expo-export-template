// This file has been generated with expo-export@3.8.3, a Sketch plugin.
import { Color } from '../Color'
import { ImageAsset } from '../ImageAsset'
import { ImagePlacement } from '../../util/ImagePlacement'
import { TextBox } from '../../util/TextBox'
import { TextStyles } from '../TextStyles'
import { elementHeader } from './elementHeader'
import { LayerPlacement } from '../../util/LayerPlacement'

export const screenMind = {
  name: 'screenMind',
  width: 375,
  height: 812,
  backgroundColor: Color.blue,
  layers: {
    right: new ImagePlacement(ImageAsset.iconArrowRight, { x: 248, y: 685, w: 127, h: 127 }),
    left: new ImagePlacement(ImageAsset.iconArrowLeft, { x: 0, y: 685, w: 127, h: 127 }),
    illustration: new ImagePlacement(ImageAsset.illustrationMind, { x: 45, y: 218, w: 244, h: 278 }),
    titleEn: new TextBox('Mind', TextStyles.EnMain, { x: 35.5, y: 456, w: 304, h: 114 }),
    titleJa: new TextBox('心情', TextStyles.JaMain, { x: 44.5, y: 456, w: 295, h: 114 }),
    header: new LayerPlacement(elementHeader, { x: -1, y: 0, w: 376, h: 117 }, {})
  }
}
