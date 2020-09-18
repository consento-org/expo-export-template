import React, { createContext, useState, useEffect } from 'react'
import { View, StyleSheet, TouchableWithoutFeedback, BackHandler } from 'react-native'
import { Slice9 } from '../../styles/design/Slice9'
import { SketchElement } from '../../styles/util/react/SketchElement'
import { elementPopup } from '../../styles/design/layer/elementPopup'

export const popupContext = createContext<{ message?: string, showPopup: (message?: string) => void }>({
  showPopup: () => {}
})

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#00002299',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  labelEn: {
    position: 'absolute',
    zIndex: 2,
    width: elementPopup.layers.bg.place.width,
    marginTop: elementPopup.layers.outputEn.place.top,
    ...elementPopup.layers.outputEn.style
  },
  bg: {
    width: elementPopup.layers.bg.place.width,
    height: elementPopup.layers.bg.place.height
  }
})

export const Popup = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [msg, showPopup] = useState<string>()
  useEffect(() => {
    if (msg === null || msg === undefined) {
      return () => {}
    }
    const handler = (): boolean | null | undefined => {
      showPopup(undefined)
      return true
    }
    const subscription = BackHandler.addEventListener('hardwareBackPress', handler)
    return () => subscription.remove()
  }, [msg])
  return <popupContext.Provider value={{ message: msg, showPopup }}>
    <popupContext.Consumer>
      {({ message, showPopup }) => {
        if (message === null || message === undefined) {
          return null
        }
        return <View style={styles.overlay} accessibilityRole='alert'>
          <TouchableWithoutFeedback onPress={() => showPopup()}>
            <View>
              <SketchElement src={elementPopup.layers.outputEn} value={message} style={styles.labelEn} />
              <SketchElement src={Slice9.elementPopupBg} style={styles.bg} />
            </View>
          </TouchableWithoutFeedback>
        </View>
      }}
    </popupContext.Consumer>
    {children}
  </popupContext.Provider>
}
