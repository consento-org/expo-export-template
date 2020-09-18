import React from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import { SketchTextBoxView } from '../styles/util/react/SketchTextBox'
import { Locale, localized } from './util/locale'
import { screenSpaceLongText } from '../styles/design/layer/screenSpaceLongText'

const { textJa, textEn, header } = screenSpaceLongText.layers

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: screenSpaceLongText.backgroundColor,
    height: '100%',
    width: '100%'
  },
  container: {
    width: '100%'
  },
  [Locale.en]: {
    marginVertical: textEn.place.top - header.place.height,
    marginLeft: textEn.place.left,
    marginRight: textEn.place.right,
    ...textEn.style
  },
  [Locale.ja]: {
    marginVertical: textJa.place.top - header.place.height,
    marginLeft: textJa.place.left,
    marginRight: textJa.place.right,
    ...textJa.style
  }
})

export const SpaceLongText = (): JSX.Element => {
  return <ScrollView style={styles.scrollView}>
    <View style={styles.container}>
      <SketchTextBoxView src={localized({ [Locale.ja]: textJa, [Locale.en]: textEn })} style={localized(styles)} />
    </View>
  </ScrollView>
}
