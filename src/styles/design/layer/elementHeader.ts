// This file has been generated with expo-export@5.0.0, a Sketch plugin.
import { forSize } from '../../util/Placement'
import { ImageAsset } from '../ImageAsset'
import { ImagePlacement } from '../../util/ImagePlacement'
import { Polygon } from '../../util/Polygon'
import { Color } from '../Color'

export const elementHeader = {
  name: 'elementHeader',
  place: forSize(376, 117),
  layers: {
    logo: new ImagePlacement('logo', ImageAsset.logo, { x: 161.5, y: 49, w: 54, h: 53, r: 160.5, b: 15 }),
    topBar: new Polygon('topBar', { w: 376, h: 33, b: 84 }, Color.dark, null, []),
    back: new ImagePlacement('back', ImageAsset.iconArrowBack, { x: 14, y: 47.5, w: 73, h: 56, r: 289, b: 13.5 }),
    line: new Polygon('line', { x: 1, y: 116, w: 375, h: 1 }, null, {
      fill: Color.white,
      thickness: 4
    }, [])
  }
}
