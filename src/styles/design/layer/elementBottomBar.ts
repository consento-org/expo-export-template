// This file has been generated with expo-export@4.0.0, a Sketch plugin.
import { Color } from '../Color'
import { Polygon } from '../../util/Polygon'
import { ImageAsset } from '../ImageAsset'
import { ImagePlacement } from '../../util/ImagePlacement'

export const elementBottomBar = {
  name: 'elementBottomBar',
  width: 375,
  height: 80,
  backgroundColor: Color.dark,
  layers: {
    active: new Polygon({ x: 0, y: 1, w: 139, h: 79, r: 236, b: 0 }, Color.middle, null, []),
    longText: new ImagePlacement(ImageAsset.iconBottomList, { x: 55.5, y: 27, w: 32, h: 32, r: 287.5, b: 21 }),
    grid: new ImagePlacement(ImageAsset.iconBottomLongText, { x: 171.79, y: 27, w: 32, h: 32, r: 171.205078125, b: 21 }),
    list: new ImagePlacement(ImageAsset.iconBottomGrid, { x: 291, y: 27, w: 32, h: 32, r: 52, b: 21 }),
    line: new Polygon({ x: 0, y: 0, w: 376, h: 1, r: -1, b: 79 }, null, {
      fill: Color.white,
      thickness: 4
    }, [])
  }
}
