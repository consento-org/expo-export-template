import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Locale, localeContent } from '../util/locale'
import { elementBox } from '../../styles/design/layer/elementBox'
import { SketchTextBox } from '../../styles/util/react/SketchTextBox'

const { labelJa, labelEn, bg } = elementBox.layers

const labelBase = {
  flexGrow: 1
}

const styles = StyleSheet.create({
  container: {
    width: elementBox.place.width,
    height: elementBox.place.height,
    backfaceVisibility: 'visible',
    backgroundColor: bg.fill.color,
    margin: 5,
    display: 'flex',
    alignContent: 'stretch'
  },
  [Locale.en]: {
    ...labelBase,
    ...labelEn.style
  },
  [Locale.ja]: {
    ...labelBase,
    ...labelJa.style
  }
})

const labels = {
  [Locale.ja]: { label: labelJa, style: styles[Locale.ja] },
  [Locale.en]: { label: labelEn, style: styles[Locale.en] }
}

export const GridBox = ({ label }: { label: string }): JSX.Element => {
  const labelType = localeContent(labels, label)
  return <View style={styles.container}>
    <SketchTextBox src={labelType.label} value={label} style={labelType.style} />
  </View>
}
