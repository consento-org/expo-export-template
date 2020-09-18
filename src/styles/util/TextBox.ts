// This file has been generated with expo-export@4.0.0, a Sketch plugin.
import { TextStyle, StyleSheet } from 'react-native'
import { Placement } from './Placement'
import { IPlacement } from './types'

export class TextBox {
  text: string
  style: TextStyle
  place: Placement

  constructor (text: string, style: TextStyle, place: IPlacement) {
    this.text = text
    this.style = StyleSheet.create({ input: style }).input
    this.place = new Placement(place)
  }
}
