import React from 'react'
import { ViewStyle, View } from 'react-native'
import { elementLabel } from '../../styles/design/layer/elementLabel'
import { localized, Locale } from '../util/locale'
import { SketchTextBox } from '../../styles/util/react/SketchTextBox'

const styles: { container: ViewStyle } = {
  container: {
    width: '100%',
    height: elementLabel.height
  }
}

const label = localized({ [Locale.ja]: elementLabel.layers.labelJa, [Locale.en]: elementLabel.layers.labelEn })

export const Label = ({ value }: { value?: string }): JSX.Element => {
  return <View style={styles.container}>
    <SketchTextBox layer={elementLabel} prototype={label} value={value} />
  </View>
}
