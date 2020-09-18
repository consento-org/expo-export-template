import React, { useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { elementInput } from '../../styles/design/layer/elementInput'
import { localized, Locale } from '../util/locale'
import { SketchTextBoxInput } from '../../styles/util/react/SketchTextBox'

const { bright, inputEn, inputJa } = elementInput.layers

const styles = StyleSheet.create({
  container: {
    height: elementInput.height - elementInput.layers.bg.place.top,
    width: '100%',
    marginTop: elementInput.layers.bg.place.top,
    backfaceVisibility: 'visible',
    backgroundColor: elementInput.layers.bg.fill.color,
    display: 'flex',
    alignItems: 'stretch'
  },
  bright: {
    height: '100%',
    marginLeft: bright.place.left,
    marginRight: bright.place.right,
    backfaceVisibility: 'visible',
    backgroundColor: bright.fill.color
  },
  [Locale.en]: {
    top: inputEn.place.top - bright.place.top,
    ...inputEn.style
  },
  [Locale.ja]: {
    top: inputJa.place.top - bright.place.top,
    ...inputJa.style
  }
})

const labelElement = localized({ [Locale.ja]: inputJa, [Locale.en]: inputEn })
const labelStyle = localized(styles)

export const Input = ({ value, onEdit }: { value?: string, onEdit: (text: string) => void }): JSX.Element => {
  useEffect(() => {
    onEdit('')
  }, [])
  return <View style={styles.container}>
    <View style={styles.bright}>
      <SketchTextBoxInput src={labelElement} onChangeText={onEdit} placeholder={labelElement.text} selectTextOnFocus style={labelStyle} value={value} />
    </View>
  </View>
}
