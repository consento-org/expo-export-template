import React, { useState } from 'react'
import 'react-native-gesture-handler' // Imported to fix gesture error in tab navigation
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'
import { Text, StatusBar, View, StatusBarStyle, StyleSheet } from 'react-native'
import { AppLoading } from 'expo'
import { loadFonts } from './src/styles/design/Font'
import { NavigationContainer, navigationRef } from './src/screens/util/navigate'
import { elementHeader } from './src/styles/design/layer/elementHeader'
import * as ScreenOrientation from 'expo-screen-orientation'

function TopBar ({ backgroundColor, barStyle }: { backgroundColor: string, barStyle: StatusBarStyle }): JSX.Element {
  const safeArea = useSafeAreaInsets()
  return <>
    <StatusBar
      barStyle={barStyle}
      backgroundColor={backgroundColor}
      translucent /* Setting translucent to ture prevents awkward resize jumps on android */
    />
    <View
      style={{ height: safeArea.top, backgroundColor }} /* iOS needs the header to be shown, else it will draw just the default grey */
    />
  </>
}

async function loadApp (): Promise<{ MainScreen: () => JSX.Element }> {
  const [{ MainScreen }] = await Promise.all([
    import('./src/MainScreen'), // Load the app asynchronously
    ScreenOrientation.unlockAsync(),
    loadFonts() // Load the fonts
  ])
  if (typeof MainScreen !== 'function') {
    throw new Error('No "App" constructor returned by ./src/App.tsx')
  }
  return { MainScreen }
}

function ErrorScreen ({ error }: { error: Error }): JSX.Element {
  return <Text>{`Error while loading App:\n${String(error)}`}</Text>
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  }
})

/**
 * This definition runs before the app. It load the actual App and fonts.
 * In case the app has an error on import, the error will be displayed.
 */
export default function App (): JSX.Element {
  const [loaded, setLoaded] = useState<{ MainScreen: () => JSX.Element }>()
  if (loaded === undefined) {
    return <AppLoading
      startAsync={async () => setLoaded(await loadApp())}
      onFinish={() => {}}
      onError={error => setLoaded({ MainScreen: () => <ErrorScreen error={error} /> })}
    />
  }
  return <SafeAreaProvider>
    <NavigationContainer ref={navigationRef}>
      <View style={styles.root}>
        <TopBar barStyle='light-content' backgroundColor={elementHeader.layers.topBar.fill.color} />
        <View style={{ flexGrow: 1 }}>
          <loaded.MainScreen />
        </View>
      </View>
    </NavigationContainer>
  </SafeAreaProvider>
}
