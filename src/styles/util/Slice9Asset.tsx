// This file has been generated with expo-export@3.8.3, a Sketch plugin.
import React from 'react'
import { Image, ImageStyle, View, ViewStyle, ImageSourcePropType } from 'react-native'

export interface Slice9Args {
  w: number
  h: number
  slice: {
    x: number
    y: number
    w: number
    h: number
  }
  slices: ImageSourcePropType[]
}

const rowsStyle: ViewStyle = {
  display: 'flex',
  flexDirection: 'row'
}

export class Slice9Asset {
  width: number
  height: number
  _rows: ViewStyle[]
  _columsStyle: ViewStyle
  _styles: ImageStyle[]
  _slices: ImageSourcePropType[]

  constructor ({ w, h, slice, slices }: Slice9Args) {
    this.width = w
    this.height = h
    const x = (slice.x + 0.5) | 0
    const y = (slice.y + 0.5) | 0
    const right = (w - x - slice.w + 0.5) | 0
    const bottom = (h - y - slice.h + 0.5) | 0
    this._columsStyle = {
      display: 'flex',
      width: w,
      height: h,
      flexDirection: 'column'
    }
    this._rows = [{
      ...rowsStyle,
      height: y
    }, {
      ...rowsStyle,
      flexGrow: 1,
      marginTop: -0.05 // Fixing accidental appearing empty lines
    }, {
      ...rowsStyle,
      height: bottom
    }]
    this._styles = [
      { width: x, height: '100%' },
      { flexGrow: 1, height: '100%' },
      { width: right, height: '100%' },
      { width: x, height: '100%' },
      { flexGrow: 1, height: '100%' },
      { width: right, height: '100%' },
      { width: x, height: bottom },
      { flexGrow: 1, height: bottom },
      { width: right, height: bottom }
    ].map((style: ImageStyle) => {
      // Causes images to flicker on first render
      // It looks weird if only the streched images flicker.
      style.resizeMode = 'stretch'
      return style
    })
    if (slices.length !== 9) {
      throw new Error('For a slice-9 we need 9 resources!')
    }
    this._slices = slices
    this.render = this.render.bind(this)
  }

  render (style?: ViewStyle, ref?: React.Ref<View>, onLayout?: () => any): JSX.Element {
    if (style === null || style === undefined) {
      style = this._columsStyle
    } else {
      style = {
        ...this._columsStyle,
        ...style
      }
    }
    return <View style={style} ref={ref} onLayout={onLayout}>
      <View style={this._rows[0]}>
        <Image source={this._slices[0]} style={this._styles[0]} fadeDuration={0} />
        <Image source={this._slices[1]} style={this._styles[1]} fadeDuration={0} />
        <Image source={this._slices[2]} style={this._styles[2]} fadeDuration={0} />
      </View>
      <View style={this._rows[1]}>
        <Image source={this._slices[3]} style={this._styles[3]} fadeDuration={0} />
        <Image source={this._slices[4]} style={this._styles[4]} fadeDuration={0} />
        <Image source={this._slices[5]} style={this._styles[5]} fadeDuration={0} />
      </View>
      <View style={this._rows[2]}>
        <Image source={this._slices[6]} style={this._styles[6]} fadeDuration={0} />
        <Image source={this._slices[7]} style={this._styles[7]} fadeDuration={0} />
        <Image source={this._slices[8]} style={this._styles[8]} fadeDuration={0} />
      </View>
    </View>
  }
}