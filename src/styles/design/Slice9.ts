// This file has been generated with expo-export@5.0.0, a Sketch plugin.
import { ImageSourcePropType } from 'react-native'
import { createCache } from '../util/Cache'
import { Placement, forSize } from '../util/Placement'
import { ISlice9 } from '../util/types'

const lazySlices = createCache<[
  ImageSourcePropType,
  ImageSourcePropType,
  ImageSourcePropType,
  ImageSourcePropType,
  ImageSourcePropType,
  ImageSourcePropType,
  ImageSourcePropType,
  ImageSourcePropType,
  ImageSourcePropType
]>()

/* eslint-disable @typescript-eslint/consistent-type-assertions */
export const Slice9 = {
  elementPopupBg: {
    name: 'elementPopupBg',
    place: forSize(327, 170),
    slice: new Placement({ x: 22, y: 21, w: 284, h: 126, r: 21, b: 23 }),
    slices: lazySlices('elementPopupBg', () => [
      require('../../../assets/element/popup/bg-0-0.png'),
      require('../../../assets/element/popup/bg-0-1.png'),
      require('../../../assets/element/popup/bg-0-2.png'),
      require('../../../assets/element/popup/bg-1-0.png'),
      require('../../../assets/element/popup/bg-1-1.png'),
      require('../../../assets/element/popup/bg-1-2.png'),
      require('../../../assets/element/popup/bg-2-0.png'),
      require('../../../assets/element/popup/bg-2-1.png'),
      require('../../../assets/element/popup/bg-2-2.png')
    ])
  } as ISlice9
}
