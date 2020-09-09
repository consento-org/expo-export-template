// This file has been generated with expo-export@3.8.3, a Sketch plugin.
import { Component } from '../../util/Component'
import { elementClock } from './elementClock'
import { Link } from '../../util/Link'
import { elementHeader } from './elementHeader'
import { Color } from '../Color'
/* eslint-disable lines-between-class-members */
export class ScreenTimeContentClass extends Component {
  clock = new Link(elementClock, { x: 67.5, y: 186, w: 240, h: 239 }, {})
  header = new Link(elementHeader, { x: 0, y: 0, w: 376, h: 117 }, {})
  constructor () {
    super('screenTimeContent', 375, 812, Color.bg)
  }
}

export const screenTimeContent = new ScreenTimeContentClass()
