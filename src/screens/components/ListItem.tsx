import React from 'react'
import { View, ViewStyle } from 'react-native'
import { elementItem } from '../../styles/design/layer/elementItem'
import { Locale, localeContent } from '../util/locale'

const style: ViewStyle = {
  height: elementItem.height
}

const labels = { [Locale.ja]: elementItem.labelJa, [Locale.en]: elementItem.labelEn }

export const ListItem = ({ label }: { label: string }): JSX.Element => {
  const labelItem = localeContent(labels, label)
  return <View style={style}>
    <elementItem.Polygon prototype={elementItem.bg} horz='stretch' />
    <elementItem.Text prototype={labelItem} value={label} horz='stretch' />
  </View>
}
