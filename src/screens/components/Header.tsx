import React from 'react'
import { useNavigationState } from '@react-navigation/native'
import { ViewStyle, View, StyleSheet } from 'react-native'
import { IMainScreen } from '../Screens'
import { elementHeader } from '../../styles/design/layer/elementHeader'
import { navigate } from '../util/navigate'
import { SketchElement } from '../../styles/util/react/SketchElement'

export interface IHeaderOptions {
  design: IMainScreen
  screenName: string
}

const { topBar, back, logo, line } = elementHeader.layers

const topBase: ViewStyle = {
  position: 'relative',
  height: elementHeader.height - topBar.place.height,
  width: '100%',
  borderBottomWidth: line.border.thickness,
  borderBottomColor: '#00000000'
}

const styles = StyleSheet.create({
  topRegular: topBase,
  topBack: {
    ...topBase,
    borderBottomColor: line.fill.color
  },
  logoContainer: {
    position: 'absolute',
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  backButton: {
    zIndex: 1,
    position: 'absolute',
    marginLeft: back.place.left,
    marginTop: back.place.top - topBar.place.height
  }
})

export const Header = ({ design, screenName }: IHeaderOptions): JSX.Element => {
  const showBackButton = useNavigationState((state) => {
    // The navigator of the header a sibling of the wanted navigator, so we first need to look into the
    // state object to see if we find the right navigator (which might be undefined) and then pick th
    // state of that sub-navigator.
    return state.routes.find(route => route.name === screenName)?.state?.index === 1
  })
  return <View style={StyleSheet.compose<ViewStyle>(showBackButton ? styles.topBack : styles.topRegular, { backgroundColor: design.backgroundColor })}>
    <View style={styles.logoContainer}>
      <SketchElement src={logo} />
    </View>
    {
      showBackButton
        ? <SketchElement
          src={back}
          style={styles.backButton}
          onPress={() => navigate([screenName, 'main'])}
          accessible
          accessibilityRole='button'
          accessibilityHint='Go back' /* TODO: translate */
        />
        : null
    }
  </View>
}
