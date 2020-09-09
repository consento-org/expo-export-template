// This file has been generated with expo-export@3.8.3, a Sketch plugin.
import { Layer } from '../../util/Layer'
import { Asset } from '../Asset'
import { ImagePlacement } from '../../util/ImagePlacement'
import { Polygon } from '../../util/Polygon'
import { Color } from '../Color'
/* eslint-disable @typescript-eslint/lines-between-class-members */
export class ElementHeaderClass extends Layer {
  logo = new ImagePlacement(Asset.logo, { x: 161.5, y: 49, w: 54, h: 53 })
  topBar = new Polygon({ x: 1, y: 0, w: 375, h: 33 }, Color.dark, null, [])
  back = new ImagePlacement(Asset.iconArrowBack, { x: 14, y: 47.5, w: 73, h: 56 })
  line = new Polygon({ x: 0.5, y: 116, w: 376, h: 1 }, null, {
    fill: Color.white,
    thickness: 4
  }, [])
  constructor () {
    super('elementHeader', 376, 117)
  }
}

export const elementHeader = new ElementHeaderClass()
