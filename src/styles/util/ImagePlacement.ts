// This file has been generated with expo-export@4.0.0, a Sketch plugin.
import { Placement, IFrameData } from './Placement'
import { IImageAsset } from './types'

export class ImagePlacement {
  place: Placement
  image: IImageAsset

  constructor (asset: IImageAsset, frame: IFrameData) {
    this.image = asset
    this.place = new Placement(frame)
  }
}
