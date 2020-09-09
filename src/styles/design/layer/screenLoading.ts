// This file has been generated with expo-export@3.8.3, a Sketch plugin.
import { Layer } from '../../util/Layer'
import { Asset } from '../Asset'
import { ImagePlacement } from '../../util/ImagePlacement'
import { Color } from '../Color'
/* eslint-disable @typescript-eslint/lines-between-class-members */
export class ScreenLoadingClass extends Layer {
  splash = new ImagePlacement(Asset.splash, { x: 0, y: 224, w: 375, h: 364 })
  constructor () {
    super('screenLoading', 375, 812, Color.white)
  }
}

export const screenLoading = new ScreenLoadingClass()
