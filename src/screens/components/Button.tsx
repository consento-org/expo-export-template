import React from 'react'
import { View, ViewStyle, TouchableOpacity } from 'react-native'
import { elementButton } from '../../styles/design/layer/elementButton'
import { localized, Locale } from '../util/locale'
import { SketchPolygon } from '../../styles/util/react/SketchPolygon'
import { SketchTextBox } from '../../styles/util/react/SketchTextBox'

const label = localized({ [Locale.ja]: elementButton.layers.labelJa, [Locale.en]: elementButton.layers.labelEn })

const styles: { container: ViewStyle, touch: ViewStyle } = {
  container: {
    width: elementButton.width,
    height: elementButton.height
  },
  touch: {
    top: 0,
    left: 0,
    width: elementButton.width,
    height: elementButton.height
  }
}

export const Button = ({ onPress, value }: { value?: string, onPress?: () => any }): JSX.Element => {
  return <View style={styles.container}>
    <TouchableOpacity onPress={onPress}>
      <View style={styles.touch}>
        <SketchPolygon prototype={elementButton.layers.bg} horz='start' vert='start' />
        <SketchTextBox prototype={label} value={value} horz='start' vert='start' />
      </View>
    </TouchableOpacity>
  </View>
}
