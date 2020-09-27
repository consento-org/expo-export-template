// This file has been generated with expo-export@5.0.0, a Sketch plugin.
import { forSize } from '../../util/Placement'
import { Color } from '../Color'
import { Polygon } from '../../util/Polygon'
import { ImageAsset } from '../ImageAsset'
import { ImagePlacement } from '../../util/ImagePlacement'

export const elementBottomBar = {
  name: 'elementBottomBar',
  place: forSize(375, 80),
  backgroundColor: Color.dark,
  layers: {
    active: new Polygon('active', { y: 1, w: 95, h: 79, r: 280 }, Color.middle, null, []),
    longText: new ImagePlacement('longText', ImageAsset.iconBottomList, { x: 35.5, y: 27, w: 32, h: 32, r: 307.5, b: 21 }),
    grid: new ImagePlacement('grid', ImageAsset.iconBottomLongText, { x: 133, y: 27, w: 32, h: 32, r: 210, b: 21 }),
    list: new ImagePlacement('list', ImageAsset.iconBottomGrid, { x: 221, y: 27, w: 32, h: 32, r: 122, b: 21 }),
    shapes: new ImagePlacement('shapes', ImageAsset.iconBottomShapes, { x: 301, y: 27, w: 32, h: 32, r: 42, b: 21 }),
    line: new Polygon('line', { w: 376, h: 1, r: -1, b: 79 }, null, {
      fill: Color.white,
      thickness: 4
    }, [])
  }
}
