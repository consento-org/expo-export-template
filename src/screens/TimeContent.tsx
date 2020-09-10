import React from 'react'
import { View, ViewStyle } from 'react-native'
import { screenTimeContent } from '../styles/design/layer/screenTimeContent'
import { useSeconds } from './util/useSeconds'
import { Clock } from './components/Clock'

const styles: { container: ViewStyle, svg: ViewStyle} = {
  container: {
    flexGrow: 1,
    backgroundColor: screenTimeContent.backgroundColor,
    display: 'flex',
    alignItems: 'center'
  },
  svg: {
    marginTop: screenTimeContent.layers.clock.place.top - screenTimeContent.layers.header.place.height
  }
}

const width = screenTimeContent.layers.clock.place.width
const height = screenTimeContent.layers.clock.place.height

export const TimeContent = (): JSX.Element => {
  const time = useSeconds()
  return <View style={styles.container}>
    <Clock width={width} height={height} time={time} style={styles.svg} />
  </View>
}
