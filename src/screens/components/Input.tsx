import React, { Ref, useEffect } from 'react'
import { ViewStyle, View, Text, TextInput } from 'react-native'
import { elementInput } from '../../styles/design/layer/elementInput'
import { localized, Locale } from '../util/locale'
import { SketchTextBox } from '../../styles/util/react/SketchTextBox'

const styles: { container: ViewStyle, bright: ViewStyle, labelElement: ViewStyle } = {
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
    marginLeft: elementInput.layers.bright.place.left,
    marginRight: elementInput.width - elementInput.layers.bright.place.right,
    backfaceVisibility: 'visible',
    backgroundColor: elementInput.layers.bright.fill.color
  },
  labelElement: {
    top: elementInput.layers.inputEn.place.top
  }
}

const labelElement = localized({ [Locale.ja]: elementInput.layers.inputJa, [Locale.en]: elementInput.layers.inputEn })

export const Input = ({ value, onEdit, targetRef }: { value?: string, onEdit: (text: string) => void, targetRef: Ref<Text | TextInput> }): JSX.Element => {
  useEffect(() => {
    onEdit(labelElement.text)
  }, [])
  return <View style={styles.container}>
    <View style={styles.bright}>
      <SketchTextBox layer={elementInput} prototype={labelElement} targetRef={targetRef} vert='none' horz='none' value={value} onInstantEdit={onEdit} selectTextOnFocus style={styles.labelElement} />
    </View>
  </View>
}
