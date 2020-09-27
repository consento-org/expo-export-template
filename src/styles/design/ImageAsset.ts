// This file has been generated with expo-export@5.0.0, a Sketch plugin.
import { ImageSourcePropType } from 'react-native'
import { createCache } from '../util/Cache'
import { IImageAsset } from '../util/types'
import { forSize } from '../util/Placement'

const lazySource = createCache<ImageSourcePropType>()

/* eslint-disable @typescript-eslint/consistent-type-assertions */
export const ImageAsset = {
  icon: {
    name: 'icon',
    place: forSize(64, 64),
    source: lazySource('icon', () => require('../../../assets/icon.png'))
  } as IImageAsset,
  iconArrowBack: {
    name: 'iconArrowBack',
    place: forSize(73, 56),
    source: lazySource('iconArrowBack', () => require('../../../assets/icon/arrow/back.png'))
  } as IImageAsset,
  iconArrowLeft: {
    name: 'iconArrowLeft',
    place: forSize(127, 127),
    source: lazySource('iconArrowLeft', () => require('../../../assets/icon/arrow/left.png'))
  } as IImageAsset,
  iconArrowRight: {
    name: 'iconArrowRight',
    place: forSize(127, 127),
    source: lazySource('iconArrowRight', () => require('../../../assets/icon/arrow/right.png'))
  } as IImageAsset,
  iconBottomGrid: {
    name: 'iconBottomGrid',
    place: forSize(40, 40),
    source: lazySource('iconBottomGrid', () => require('../../../assets/icon/bottom/grid.png'))
  } as IImageAsset,
  iconBottomList: {
    name: 'iconBottomList',
    place: forSize(40, 40),
    source: lazySource('iconBottomList', () => require('../../../assets/icon/bottom/list.png'))
  } as IImageAsset,
  iconBottomLongText: {
    name: 'iconBottomLongText',
    place: forSize(40, 40),
    source: lazySource('iconBottomLongText', () => require('../../../assets/icon/bottom/long-text.png'))
  } as IImageAsset,
  iconBottomShapes: {
    name: 'iconBottomShapes',
    place: forSize(40, 40),
    source: lazySource('iconBottomShapes', () => require('../../../assets/icon/bottom/shapes.png'))
  } as IImageAsset,
  illustrationMind: {
    name: 'illustrationMind',
    place: forSize(244, 278),
    source: lazySource('illustrationMind', () => require('../../../assets/illustration/mind.png'))
  } as IImageAsset,
  illustrationSpace: {
    name: 'illustrationSpace',
    place: forSize(282, 278),
    source: lazySource('illustrationSpace', () => require('../../../assets/illustration/space.png'))
  } as IImageAsset,
  illustrationTime: {
    name: 'illustrationTime',
    place: forSize(282, 278),
    source: lazySource('illustrationTime', () => require('../../../assets/illustration/time.png'))
  } as IImageAsset,
  logo: {
    name: 'logo',
    place: forSize(56, 56),
    source: lazySource('logo', () => require('../../../assets/logo.png'))
  } as IImageAsset,
  splash: {
    name: 'splash',
    place: forSize(375, 364),
    source: lazySource('splash', () => require('../../../assets/splash.png'))
  } as IImageAsset
}
