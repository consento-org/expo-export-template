// This file has been generated with expo-export@3.8.3, a Sketch plugin.
import { ImageSourcePropType } from 'react-native'
import { Cache } from '../util/Cache'
import { ImageAsset } from '../util/ImageAsset'

const images = new Cache<ImageAsset, ImageSourcePropType>(ImageAsset)

export const Asset = {
  icon () {
    return images.fetch('icon', () => require('../../../assets/icon.png'))
  },
  iconArrowBack () {
    return images.fetch('iconArrowBack', () => require('../../../assets/icon/arrow/back.png'))
  },
  iconArrowLeft () {
    return images.fetch('iconArrowLeft', () => require('../../../assets/icon/arrow/left.png'))
  },
  iconArrowRight () {
    return images.fetch('iconArrowRight', () => require('../../../assets/icon/arrow/right.png'))
  },
  iconBottomGrid () {
    return images.fetch('iconBottomGrid', () => require('../../../assets/icon/bottom/grid.png'))
  },
  iconBottomList () {
    return images.fetch('iconBottomList', () => require('../../../assets/icon/bottom/list.png'))
  },
  iconBottomLongText () {
    return images.fetch('iconBottomLongText', () => require('../../../assets/icon/bottom/long-text.png'))
  },
  illustrationMind () {
    return images.fetch('illustrationMind', () => require('../../../assets/illustration/mind.png'))
  },
  illustrationSpace () {
    return images.fetch('illustrationSpace', () => require('../../../assets/illustration/space.png'))
  },
  illustrationTime () {
    return images.fetch('illustrationTime', () => require('../../../assets/illustration/time.png'))
  },
  logo () {
    return images.fetch('logo', () => require('../../../assets/logo.png'))
  },
  splash () {
    return images.fetch('splash', () => require('../../../assets/splash.png'))
  }
}
