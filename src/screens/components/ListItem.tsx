import React from 'react'
import { View, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { elementItem } from '../../styles/design/layer/elementItem'
import { Locale, localeContent } from '../util/locale'
import { SketchPolygon } from '../../styles/util/react/SketchPolygon'
import { SketchTextBox } from '../../styles/util/react/SketchTextBox'

const { bg, labelJa, labelEn } = elementItem.layers

const labelBase: ViewStyle = {
  position: 'absolute',
  height: bg.place.height,
  top: 0,
  width: '100%',
  display: 'flex'
}

const styles = StyleSheet.create({
  container: {
    height: bg.place.height,
    marginTop: bg.place.top
  },
  bg: {
    backgroundColor: bg.fill.color,
    height: '100%',
    width: '100%'
  },
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  labelEn: {
    ...labelEn.style
  } as TextStyle,
  containerEn: {
    ...labelBase,
    paddingTop: labelEn.place.top,
    paddingLeft: labelEn.place.left,
    paddingRight: labelEn.place.right
  },
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  labelJa: {
    ...labelJa.style,
    lineHeight: labelJa.place.height
  } as TextStyle,
  containerJa: {
    ...labelBase,
    paddingTop: labelJa.place.top,
    paddingLeft: labelJa.place.left,
    paddingRight: labelJa.place.right
  }
})

const labels = {
  [Locale.ja]: { label: labelJa, style: styles.labelJa, container: styles.containerJa },
  [Locale.en]: { label: labelEn, style: styles.labelEn, container: styles.containerEn }
}

export const ListItem = ({ label }: { label: string }): JSX.Element => {
  const labelType = localeContent(labels, label)
  return <View style={styles.container} accessible accessibilityLabel={`List item ${label}`}>
    <SketchPolygon src={elementItem.layers.bg} style={styles.bg} />
    <View style={labelType.container}>
      <SketchTextBox src={labelType.label} value={label} style={labelType.style} />
    </View>
  </View>
}
