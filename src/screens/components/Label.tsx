import React from 'react'
import { View, StyleSheet, ViewStyle, TextStyle } from 'react-native'
import { elementLabel } from '../../styles/design/layer/elementLabel'
import { localized, Locale } from '../util/locale'
import { SketchTextBox } from '../../styles/util/react/SketchTextBox'

const { labelJa, labelEn } = elementLabel.layers

const styles = StyleSheet.create({
  container: {
    width: elementLabel.width,
    height: elementLabel.height,
    display: 'flex'
  },
  margin: {
    flexGrow: 1,
    position: 'relative',
    marginTop: labelEn.place.top,
    marginLeft: labelEn.place.left,
    marginRight: labelEn.place.right,
    marginBottom: labelEn.place.bottom
  },
  labelBase: {
    position: 'absolute',
    width: '100%'
  },
  [Locale.ja]: labelJa.style,
  [Locale.en]: labelEn.style
})

const label = localized({ [Locale.ja]: labelJa, [Locale.en]: labelEn })
const labelStyle = localized(styles)

export const Label = ({ value, style }: { value?: string, style?: ViewStyle }): JSX.Element => {
  return <View style={StyleSheet.compose<ViewStyle>(styles.container, style)}>
    <View style={styles.margin}>
      <SketchTextBox src={label} value={value} style={StyleSheet.compose<TextStyle>(styles.labelBase, labelStyle)} />
    </View>
  </View>
}
