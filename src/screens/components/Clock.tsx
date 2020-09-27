import React from 'react'
import { ITimeInSeconds } from '../util/useSeconds'
import Svg, { Circle, Line } from 'react-native-svg'
import { elementClock } from '../../styles/design/layer/elementClock'
import { ViewStyle } from 'react-native'
import { Polygon } from '../../styles/util/Polygon'

const viewBox = `0 0 ${elementClock.place.width.toString()} ${elementClock.place.height.toString()}`
const radius = elementClock.place.width / 2
const center = {
  x: Number(elementClock.layers.dial.place.x) + radius,
  y: Number(elementClock.layers.dial.place.y) + radius
}
const hourLength = elementClock.layers.hour.place.width
const minuteLength = elementClock.layers.minute.place.width

interface IPoint {
  x: number
  y: number
}

const DesignLine = ({ line, start, end }: { line: Polygon, start: IPoint, end: IPoint }): JSX.Element => {
  return React.createElement(Line, {
    x1: start.x,
    y1: start.y,
    x2: end.x,
    y2: end.y,
    ...line.svg
  })
}

const pos = (perc: number, start: IPoint, length: number): IPoint => {
  const rad = (-perc + 0.5) * 2 * Math.PI
  return {
    x: start.x + Math.sin(rad) * length,
    y: start.y + Math.cos(rad) * length
  }
}

export const Clock = ({ width, height, time, style }: { width: number, height: number, time: ITimeInSeconds, style?: ViewStyle }): JSX.Element => {
  const { minutes, hours, seconds } = time
  const secondPerc = seconds / 60
  const minutePerc = (minutes + secondPerc) / 60
  const minuteEnd = pos(minutePerc, center, minuteLength)
  const hourEnd = pos(
    (hours + minutePerc) / 12,
    center,
    hourLength
  )
  return <Svg width={width} height={height} viewBox={viewBox} style={style}>
    <Circle r={radius} cx={center.x} cy={center.y} fill={elementClock.layers.dial.fill.color} />
    <DesignLine line={elementClock.layers.hour} start={center} end={hourEnd} />
    <DesignLine line={elementClock.layers.minute} start={center} end={minuteEnd} />
  </Svg>
}
