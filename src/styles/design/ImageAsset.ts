// This file has been generated with expo-export@4.1.0, a Sketch plugin.
import { ImageSourcePropType } from 'react-native'
import { createCache } from '../util/Cache'
import { IImageAsset } from '../util/types'

const lazySource = createCache<ImageSourcePropType>()

/* eslint-disable @typescript-eslint/consistent-type-assertions */
export const ImageAsset = {
  icon: {
    name: 'icon',
    width: 64,
    height: 64,
    source: lazySource('icon', () => require('../../../assets/icon.png'))
  } as IImageAsset,
  iconArrowBack: {
    name: 'iconArrowBack',
    width: 73,
    height: 56,
    source: lazySource('iconArrowBack', () => require('../../../assets/icon/arrow/back.png'))
  } as IImageAsset,
  iconArrowLeft: {
    name: 'iconArrowLeft',
    width: 127,
    height: 127,
    source: lazySource('iconArrowLeft', () => require('../../../assets/icon/arrow/left.png'))
  } as IImageAsset,
  iconArrowRight: {
    name: 'iconArrowRight',
    width: 127,
    height: 127,
    source: lazySource('iconArrowRight', () => require('../../../assets/icon/arrow/right.png'))
  } as IImageAsset,
  iconBottomGrid: {
    name: 'iconBottomGrid',
    width: 40,
    height: 40,
    source: lazySource('iconBottomGrid', () => require('../../../assets/icon/bottom/grid.png'))
  } as IImageAsset,
  iconBottomList: {
    name: 'iconBottomList',
    width: 40,
    height: 40,
    source: lazySource('iconBottomList', () => require('../../../assets/icon/bottom/list.png'))
  } as IImageAsset,
  iconBottomLongText: {
    name: 'iconBottomLongText',
    width: 40,
    height: 40,
    source: lazySource('iconBottomLongText', () => require('../../../assets/icon/bottom/long-text.png'))
  } as IImageAsset,
  iconBottomShapes: {
    name: 'iconBottomShapes',
    width: 40,
    height: 40,
    source: lazySource('iconBottomShapes', () => require('../../../assets/icon/bottom/shapes.png'))
  } as IImageAsset,
  illustrationMind: {
    name: 'illustrationMind',
    width: 244,
    height: 278,
    source: lazySource('illustrationMind', () => require('../../../assets/illustration/mind.png'))
  } as IImageAsset,
  illustrationSpace: {
    name: 'illustrationSpace',
    width: 282,
    height: 278,
    source: lazySource('illustrationSpace', () => require('../../../assets/illustration/space.png'))
  } as IImageAsset,
  illustrationTime: {
    name: 'illustrationTime',
    width: 282,
    height: 278,
    source: lazySource('illustrationTime', () => require('../../../assets/illustration/time.png'))
  } as IImageAsset,
  logo: {
    name: 'logo',
    width: 56,
    height: 56,
    source: lazySource('logo', () => require('../../../assets/logo.png'))
  } as IImageAsset,
  splash: {
    name: 'splash',
    width: 375,
    height: 364,
    source: lazySource('splash', () => require('../../../assets/splash.png'))
  } as IImageAsset
}
