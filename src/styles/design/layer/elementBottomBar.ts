// This file has been generated with expo-export@3.8.3, a Sketch plugin.
import { Polygon } from '../../util/Polygon'
import { Color } from '../Color'
import { Asset } from '../Asset'
import { ImagePlacement } from '../../util/ImagePlacement'

export const elementBottomBar = {
  name: 'elementBottomBar',
  width: 375,
  height: 80,
  backgroundColor: Color.dark,
  active: new Polygon({ x: 0, y: 1, w: 139, h: 79 }, Color.middle, null, []),
  longText: new ImagePlacement(Asset.iconBottomList, { x: 55.5, y: 27, w: 32, h: 32 }),
  grid: new ImagePlacement(Asset.iconBottomLongText, { x: 171.79, y: 27, w: 32, h: 32 }),
  list: new ImagePlacement(Asset.iconBottomGrid, { x: 291, y: 27, w: 32, h: 32 }),
  line: new Polygon({ x: 0, y: 0, w: 376, h: 1 }, null, {
    fill: Color.white,
    thickness: 4
  }, [])
}
