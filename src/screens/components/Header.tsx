import React from 'react'
import { useNavigationState } from '@react-navigation/native'
import { ViewStyle, View, Image, ImageStyle } from 'react-native'
import { IMainScreen } from '../Screens'
import { elementHeader } from '../../styles/design/layer/elementHeader'
import { navigate } from '../util/navigate'
import { SketchImage } from '../../styles/util/react/SketchImage'

export interface IHeaderOptions {
  design: IMainScreen
  screenName: string
}

const styles: { topBase: ViewStyle, logoContainer: ViewStyle, backButton: ImageStyle } = {
  topBase: {
    height: elementHeader.height - elementHeader.topBar.place.height,
    position: 'relative',
    width: '100%'
  },
  logoContainer: {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  backButton: {
    position: 'absolute',
    top: elementHeader.back.place.top - elementHeader.topBar.place.height
  }
}

export const Header = ({ design, screenName }: IHeaderOptions): JSX.Element => {
  const showBackButton = useNavigationState((state) => {
    // The navigator of the header a sibling of the wanted navigator, so we first need to look into the
    // state object to see if we find the right navigator (which might be undefined) and then pick th
    // state of that sub-navigator.
    return state.routes.find(route => route.name === screenName)?.state?.index === 1
  })
  const topStyle: ViewStyle = {
    ...styles.topBase,
    backgroundColor: design.backgroundColor
  }
  if (showBackButton) {
    topStyle.borderBottomWidth = elementHeader.line.border.thickness
    topStyle.borderColor = elementHeader.line.fill.color
  }
  return <View style={topStyle}>
    <View style={styles.logoContainer}>
      <Image source={elementHeader.logo.image.source()} />
    </View>
    {
      showBackButton
        ? <SketchImage
          layer={elementHeader}
          prototype={elementHeader.back}
          vert='none'
          horz='start'
          style={styles.backButton}
          onPress={() => navigate([screenName, 'main'])}
        />
        : null
    }
  </View>
}
