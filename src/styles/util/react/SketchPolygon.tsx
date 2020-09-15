// This file has been generated with expo-export@4.0.0, a Sketch plugin.
import { applyRenderOptions, IBaseProps, SketchInLayer } from './SketchInLayer'
import { View, ViewStyle } from 'react-native'
import { Polygon } from '../Polygon'

export interface IPolygonProps extends IBaseProps<View, ViewStyle> {
  prototype: Polygon
}

export const SketchPolygon = (props: IPolygonProps): JSX.Element => {
  return SketchInLayer({
    ...props,
    place: props.prototype.place,
    item: ({ ref, style }) => props.prototype.RenderRect({
      style: applyRenderOptions(props, props.prototype.place, style),
      ref
    })
  })
}
