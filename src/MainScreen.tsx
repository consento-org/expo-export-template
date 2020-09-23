import React from 'react'
import { View, Animated, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import { screenMind } from './styles/design/layer/screenMind'
import { screenSpace } from './styles/design/layer/screenSpace'
import { screenTime } from './styles/design/layer/screenTime'
import { navigate } from './screens/util/navigate'
import { localized, Locale } from './screens/util/locale'
import { Header } from './screens/components/Header'
import { SpaceContent } from './screens/SpaceContent'
import { TimeContent } from './screens/TimeContent'
import { MindContent } from './screens/MindContent'
import { ImagePlacement } from './styles/util/ImagePlacement'
import { LayerPlacement } from './styles/util/LayerPlacement'
import { TextBox } from './styles/util/TextBox'
import { ILayer } from './styles/util/types'
import { useOrientation, isLandscape } from './screens/util/useOrientation'
import { useIsFocused } from '@react-navigation/native'
import { SketchElement } from './styles/util/react/SketchElement'
import { Popup } from './screens/components/Popup'

const root = createStackNavigator()

const mainScreenData: Array<{ name: string, design: IMainScreen, Content: () => JSX.Element }> = [
  { name: 'space', design: screenSpace, Content: () => <SpaceContent /> },
  { name: 'mind', design: screenMind, Content: () => <MindContent /> },
  { name: 'time', design: screenTime, Content: () => <TimeContent /> }
]

/**
 * We have multiple screens on the main screen which are all structured
 * the same way. To make sure that the designer doesns't mistake them,
 * we can define an interface that needs to be implemented.
 */
export interface IMainScreen extends ILayer {
  layers: {
    illustration: ImagePlacement
    left: ImagePlacement
    right: ImagePlacement
    header: LayerPlacement<any, any>
    titleEn: TextBox
    titleJa: TextBox
  }
}

const commonStyles = StyleSheet.create({
  rootContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1
  },
  container: {
    backfaceVisibility: 'visible',
    display: 'flex',
    flexGrow: 1
  },
  horzContainer: {
    backfaceVisibility: 'visible',
    display: 'flex',
    flexGrow: 1
  }
})

const mainScreens = mainScreenData.map(({ name, design, Content }) => {
  const index = mainScreenData.findIndex(screen => screen.name === name)
  const next = mainScreenData[(index + 1) % mainScreenData.length]
  const prev = mainScreenData[(index === 0 ? mainScreenData.length : index) - 1]
  const sub = createStackNavigator()
  const { illustration, right, left, titleEn, titleJa } = design.layers
  const title = localized({ [Locale.ja]: titleJa, [Locale.en]: titleEn })
  const styles = StyleSheet.create({
    rootContainer: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1
    },
    illustration: {
      position: 'relative',
      width: '100%',
      height: title.place.top + title.place.height - illustration.place.top
    },
    mainImage: {
      alignSelf: 'center'
    },
    mainText: {
      ...title.style,
      marginRight: screenMind.layers.titleEn.place.right,
      marginLeft: screenMind.layers.titleEn.place.left,
      marginTop: screenMind.layers.titleEn.place.spaceY(screenMind.layers.illustration.place)
    },
    vertContainer: {
      ...commonStyles.container,
      backgroundColor: design.backgroundColor
    },
    vertTop: {
      flexGrow: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      width: '100%'
    },
    vertBottom: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    vertNext: {
      width: right.place.width,
      height: right.place.height
    },
    vertPrev: {
      width: left.place.width,
      height: left.place.height
    },
    horzContainer: {
      ...commonStyles.container,
      backgroundColor: design.backgroundColor,
      flexDirection: 'row'
    },
    horzLeft: {
      justifyContent: 'center'
    },
    horzCenter: {
      flexGrow: 1
    },
    horzRight: {
      justifyContent: 'center'
    },
    horzNext: {
      width: right.place.width,
      height: right.place.height
    },
    horzPrev: {
      width: left.place.width,
      height: left.place.height
    }
  })

  const Illustration = (): JSX.Element => {
    return <TouchableOpacity onPress={() => navigate([name, 'content'])}>
      <View style={styles.illustration}>
        <SketchElement src={illustration} style={styles.mainImage} />
        <SketchElement src={title} style={styles.mainText} value={title.text} />
      </View>
    </TouchableOpacity>
  }

  const Next = (): JSX.Element => {
    return <SketchElement
      src={right}
      style={styles.horzNext}
      onPress={() => navigate([next.name, 'main'])}
      accessible
      accessibilityRole='button'
      accessibilityHint='next' /* TODO: translate */
    />
  }

  const Prev = (): JSX.Element => {
    return <SketchElement
      src={left}
      style={styles.horzPrev}
      onPress={() => navigate([prev.name, 'main'])}
      accessible
      accessibilityRole='button'
      accessibilityHint='previous' /* TODO: translate */
    />
  }

  const Top = (): JSX.Element => {
    const orientation = useOrientation()
    if (isLandscape(orientation)) {
      return <View style={styles.horzContainer}>
        <View style={styles.horzLeft}><Prev /></View>
        <View style={styles.horzCenter}><Illustration /></View>
        <View style={styles.horzRight}><Next /></View>
      </View>
    }
    return <View style={styles.vertContainer}>
      <View style={styles.vertTop}><Illustration /></View>
      <View style={styles.vertBottom}>
        <Prev />
        <Next />
      </View>
    </View>
  }

  return () => {
    return <root.Screen key={name} name={name} options={{ headerShown: false }}>{
      () => <View style={styles.rootContainer}>
        {/*
          The "header" property of "Screen" is not used due to a bug on iOS where the
          animation only affects the content
          */}
        <Header design={design} screenName={name} />
        <sub.Navigator>
          <sub.Screen name='main' options={{ headerShown: false }} component={Top} />
          <sub.Screen name='content' options={{ headerShown: false }}>{() => {
            if (useIsFocused()) {
              // Only render the heavy content if it is focused, to make the animation
              // go smooth.
              return <Content />
            }
            return null
          }}</sub.Screen>
        </sub.Navigator>
      </View>
    }</root.Screen>
  }
})

function multiply (progress: Animated.AnimatedInterpolation, outputRange: [number, number]): any {
  return {
    translateX: progress.interpolate({
      inputRange: [0, 1],
      outputRange,
      extrapolate: 'clamp'
    })
  }
}

const screenOptions: StackNavigationOptions = {
  cardStyleInterpolator: ({ current, next, layouts: { screen } }) => {
    // Moving from left -> right first and last card
    return {
      cardStyle: {
        transform: [
          multiply(current.progress, [screen.width, 0]),
          next?.progress !== undefined ? multiply(next.progress, [0, -screen.width]) : { translateX: 0 }
        ]
      }
    }
  }
}

export const MainScreen = (): JSX.Element => {
  return <View style={commonStyles.rootContainer}>
    <Popup>
      <root.Navigator
        initialRouteName={mainScreenData[0].name}
        screenOptions={screenOptions}
      >{mainScreens.map(renderer => renderer())}</root.Navigator>
    </Popup>
  </View>
}
