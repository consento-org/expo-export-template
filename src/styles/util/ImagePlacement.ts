// This file has been generated with expo-export@4.1.0, a Sketch plugin.
import { Placement } from './Placement'
import { IImageAsset, IPlacement } from './types'

export class ImagePlacement {
  place: Placement
  image: IImageAsset

  constructor (asset: IImageAsset, frame: IPlacement) {
    this.image = asset
    this.place = new Placement(frame)
  }
}
