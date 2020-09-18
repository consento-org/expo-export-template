import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Label } from './components/Label'
import { Input } from './components/Input'
import { Button } from './components/Button'
import { screenMindContent } from '../styles/design/layer/screenMindContent'
import { ScrollView } from 'react-native-gesture-handler'
import { popupContext } from './components/Popup'

const { ok, input, label, header } = screenMindContent.layers

const styles = StyleSheet.create({
  container: {
    display: 'flex'
  },
  label: {
    width: '100%',
    height: label.place.height,
    marginTop: label.place.spaceY(header.place)
  },
  button: {
    width: ok.place.width,
    marginLeft: ok.place.left,
    marginTop: ok.place.spaceY(input.place)
  }
})

export const MindContent = (): JSX.Element => {
  const [input, setInput] = useState('')
  return <ScrollView style={styles.container}>
    <popupContext.Consumer>
      {({ showPopup }) => {
        return <>
          <Label style={styles.label} />
          <Input onEdit={setInput} />
          <Button onPress={() => showPopup(input)} style={styles.button} />
        </>
      }}
    </popupContext.Consumer>
  </ScrollView>
}
