// This file has been generated with expo-export@3.8.3, a Sketch plugin.
import { Placement, IFrameData } from './Placement'
import { ILayer } from './types'

export class LayerPlacement <TTexts, TLayer extends ILayer = ILayer> {
  place: Placement
  layer: TLayer
  text: TTexts

  constructor (layer: TLayer, frame: IFrameData, text: TTexts) {
    this.layer = layer
    this.place = new Placement(frame)
    this.text = text
  }
}
