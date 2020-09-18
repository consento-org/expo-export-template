import React from 'react'
import { View, TouchableOpacity, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { elementButton } from '../../styles/design/layer/elementButton'
import { localized, Locale } from '../util/locale'
import { SketchPolygon } from '../../styles/util/react/SketchPolygon'
import { SketchTextBox } from '../../styles/util/react/SketchTextBox'

const { labelJa, labelEn, bg } = elementButton.layers

const styles = StyleSheet.create({
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  container: {
    display: 'flex',
    width: elementButton.width,
    height: elementButton.height
  } as ViewStyle,
  button: {
    width: '100%',
    height: '100%'
  },
  touch: {
    display: 'flex'
  },
  margin: {
    flexGrow: 1,
    position: 'relative',
    marginTop: bg.place.top,
    marginLeft: bg.place.left,
    marginRight: bg.place.right,
    marginBottom: bg.place.bottom
  },
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  labelBase: {
    position: 'absolute',
    width: '100%'
  } as TextStyle,
  [Locale.ja]: {
    ...labelJa.style,
    marginTop: labelJa.place.top
  },
  [Locale.en]: {
    ...labelEn.style,
    marginTop: labelEn.place.top
  }
})

const label = localized({ [Locale.ja]: labelJa, [Locale.en]: labelEn })
const labelStyle = localized<TextStyle>(styles)

export const Button = ({ onPress, value, style }: { value?: string, onPress?: () => any, style?: ViewStyle }): JSX.Element => {
  return <View style={style !== undefined ? StyleSheet.compose(styles.container, style) : styles.container}>
    <View style={styles.margin}>
      <TouchableOpacity onPress={onPress} style={styles.touch} accessibilityRole='button'>
        <View>
          <SketchPolygon src={elementButton.layers.bg} style={styles.button} />
          <SketchTextBox src={label} value={value} style={StyleSheet.compose(styles.labelBase, labelStyle)} />
        </View>
      </TouchableOpacity>
    </View>
  </View>
}
