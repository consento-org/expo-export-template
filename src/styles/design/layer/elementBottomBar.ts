// This file has been generated with expo-export@3.8.3, a Sketch plugin.
import { Layer } from '../../util/Layer'
import { Polygon } from '../../util/Polygon'
import { Color } from '../Color'
import { Asset } from '../Asset'
import { ImagePlacement } from '../../util/ImagePlacement'
/* eslint-disable @typescript-eslint/lines-between-class-members */
export class ElementBottomBarClass extends Layer {
  active = new Polygon({ x: 0, y: 1, w: 139, h: 79 }, Color.middle, null, [])
  longText = new ImagePlacement(Asset.iconBottomList, { x: 55.5, y: 27, w: 32, h: 32 })
  grid = new ImagePlacement(Asset.iconBottomLongText, { x: 171.79, y: 27, w: 32, h: 32 })
  list = new ImagePlacement(Asset.iconBottomGrid, { x: 291, y: 27, w: 32, h: 32 })
  line = new Polygon({ x: 0, y: 0, w: 376, h: 1 }, null, {
    fill: Color.white,
    thickness: 4
  }, [])
  constructor () {
    super('elementBottomBar', 375, 80, Color.dark)
  }
}

export const elementBottomBar = new ElementBottomBarClass()
