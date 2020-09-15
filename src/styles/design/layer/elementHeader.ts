// This file has been generated with expo-export@4.0.0, a Sketch plugin.
import { ImageAsset } from '../ImageAsset'
import { ImagePlacement } from '../../util/ImagePlacement'
import { Polygon } from '../../util/Polygon'
import { Color } from '../Color'

export const elementHeader = {
  name: 'elementHeader',
  width: 376,
  height: 117,
  layers: {
    logo: new ImagePlacement(ImageAsset.logo, { x: 161.5, y: 49, w: 54, h: 53, r: 160.5, b: 15 }),
    topBar: new Polygon({ x: 1, y: 0, w: 375, h: 33, r: 0, b: 84 }, Color.dark, null, []),
    back: new ImagePlacement(ImageAsset.iconArrowBack, { x: 14, y: 47.5, w: 73, h: 56, r: 289, b: 13.5 }),
    line: new Polygon({ x: 0.5, y: 116, w: 376, h: 1, r: -0.5, b: 0 }, null, {
      fill: Color.white,
      thickness: 4
    }, [])
  }
}
