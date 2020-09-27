// This file has been generated with expo-export@5.0.0, a Sketch plugin.
import { forSize } from '../../util/Placement'
import { Color } from '../Color'
import { ImageAsset } from '../ImageAsset'
import { ImagePlacement } from '../../util/ImagePlacement'
import { TextBox } from '../../util/TextBox'
import { TextStyles } from '../TextStyles'
import { LayerPlacement } from '../../util/LayerPlacement'
import { elementHeader } from './elementHeader'

export const screenMind = {
  name: 'screenMind',
  place: forSize(375, 812),
  backgroundColor: Color.blue,
  layers: {
    right: new ImagePlacement('right', ImageAsset.iconArrowRight, { x: 248, y: 685, w: 127, h: 127 }),
    left: new ImagePlacement('left', ImageAsset.iconArrowLeft, { y: 685, w: 127, h: 127, r: 248 }),
    illustration: new ImagePlacement('illustration', ImageAsset.illustrationMind, { x: 45, y: 218, w: 244, h: 278, r: 86, b: 316 }),
    titleEn: new TextBox('titleEn', 'Mind', {
      ...TextStyles.EnMain,
      textAlignVertical: 'top'
    }, { x: 35.5, y: 456, w: 304, h: 140, r: 35.5, b: 216 }),
    titleJa: new TextBox('titleJa', '心情', TextStyles.JaMain, { x: 44.5, y: 456, w: 295, h: 114, r: 35.5, b: 242 }),
    header: new LayerPlacement('header', elementHeader, elementHeader.layers, { x: -1, w: 376, h: 117, b: 695 })
  }
}
