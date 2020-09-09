// This file has been generated with expo-export@3.8.3, a Sketch plugin.
import React from 'react'
import { FlexStyle, Insets, GestureResponderEvent, ViewStyle, TouchableOpacity, View } from 'react-native'
import { Placement } from '../Placement'
import { useVUnits } from '../useVUnits'
import { exists } from '../lang'
import { Layer } from '../Layer'

export type TRenderGravity = 'start' | 'end' | 'center' | 'stretch' | 'none'

export function applyRenderOptions<T extends FlexStyle> ({ horz, vert }: IRenderOptions, place: Placement, style?: T): T {
  if (style === null || style === undefined) {
    style = {} as any
  }
  style.width = horz === 'stretch' ? '100%' : place.width
  style.height = vert === 'stretch' ? '100%' : place.height
  return style
}

export interface IBaseProps<T extends React.Component, TStyle extends FlexStyle> {
  targetRef?: React.Ref<T>
  vert?: TRenderGravity
  horz?: TRenderGravity
  style?: TStyle
  debug?: boolean
  onPress?: (event: GestureResponderEvent) => any
  onLayout?: () => any
}

export interface IRenderProps<T extends React.Component, TStyle extends FlexStyle> extends IBaseProps<T, TStyle> {
  place: Placement
  layer: Layer
  debug?: boolean
  hitSlop?: Insets
  item: (opts: {
    ref?: React.Ref<T>
    style?: TStyle
  }) => JSX.Element
}

export interface IRenderOptions {
  vert?: TRenderGravity
  horz?: TRenderGravity
  debug?: boolean
  hitSlop?: Insets
  onPress?: (event: GestureResponderEvent) => any
  onLayout?: () => any
}

export function renderItem (layer: Layer, item: React.ReactNode, place: Placement, { horz, vert, onPress, onLayout, debug, hitSlop }: IRenderOptions = {}): JSX.Element {
  const { vw, vh } = useVUnits()
  const style: ViewStyle = {
    position: 'absolute',
    width: place.width,
    height: place.height
  }
  if (!exists(horz) || horz === 'start') {
    style.left = place.left
  } else if (horz !== 'none') {
    const right = (layer.width - place.right)
    if (horz === 'center') {
      style.left = vw(50) + (place.centerX - (layer.width / 2)) - (place.width / 2)
    } else if (horz === 'stretch') {
      style.left = place.left
      style.width = vw(100) - right - place.left
    } else {
      style.left = vw(100) - right - place.width
    }
  }
  if (!exists(vert) || vert === 'start') {
    style.top = place.top
  } else if (vert !== 'none') {
    const bottom = (layer.width - place.right)
    if (vert === 'center') {
      style.top = vh(50) + (place.centerY - (layer.height / 2)) - (place.height / 2)
    } else if (vert === 'stretch') {
      style.top = place.top
      style.height = vh(100) - bottom - place.top
    } else {
      style.top = vh(100) - bottom - place.height
    }
  }
  if (debug) {
    style.borderColor = '#04a'
    style.backgroundColor = '#ac8888888'
    style.borderWidth = 1
    console.log({ style, horz, vert, place, width: layer.width, height: layer.height, vw100: vw(100), vh100: vh(100) })
  }
  if (exists(onPress)) {
    return <TouchableOpacity onLayout={onLayout} onPress={onPress} style={style} hitSlop={hitSlop}>{item}</TouchableOpacity>
  }
  return <View style={style}>{item}</View>
}

export const SketchInLayer = <T extends React.Component, S extends FlexStyle> (props: IRenderProps<T, S>): JSX.Element => {
  return renderItem(props.layer, props.item({
    ref: props.targetRef,
    style: props.style
  }), props.place, {
    horz: props.horz,
    vert: props.vert,
    debug: props.debug,
    hitSlop: props.hitSlop,
    onPress: props.onPress,
    onLayout: props.onLayout
  })
}