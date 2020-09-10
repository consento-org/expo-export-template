import React from 'react'
import { View, Image } from 'react-native'
import { createBottomTabNavigator, BottomTabBarOptions } from '@react-navigation/bottom-tabs'
import { elementBottomBar } from '../styles/design/layer/elementBottomBar'
import { screenSpaceList } from '../styles/design/layer/screenSpaceList'
import { screenSpaceGrid } from '../styles/design/layer/screenSpaceGrid'
import { ScrollView } from 'react-native-gesture-handler'
import { ListItem } from './components/ListItem'
import { GridBox } from './components/GridBox'
import { screenSpaceLongText } from '../styles/design/layer/screenSpaceLongText'
import { localized, Locale } from './util/locale'

const Tab = createBottomTabNavigator()

const tabBarOptions: BottomTabBarOptions = {
  inactiveBackgroundColor: elementBottomBar.backgroundColor,
  activeBackgroundColor: elementBottomBar.layers.active.fill.color,
  style: {
    shadowOpacity: 0,
    height: elementBottomBar.height,
    borderTopColor: elementBottomBar.layers.line.fill.color,
    borderTopWidth: elementBottomBar.layers.line.border.thickness
  },
  showLabel: false
}

const List = (): JSX.Element =>
  <ScrollView style={{ backgroundColor: screenSpaceList.backgroundColor, height: '100%' }}>
    {
      ['hi', '今日！', 'di', 'ho', 'fix', 'me', 'up', 'break', 'you', 'down'].map((name, index) => <ListItem key={`list-${index}`} label={name} />)
    }
  </ScrollView>

const Grid = (): JSX.Element =>
  <ScrollView style={{ backgroundColor: screenSpaceGrid.backgroundColor, height: '100%' }}>
    <View style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      marginTop: 10,
      marginBottom: 20
    }}>
      {
        ['hi', '今日！', 'di', 'ho', 'fix', 'me', 'up', 'break', 'you', 'down'].map((name, index) => <GridBox key={`list-${index}`} label={name} />)
      }
    </View>
  </ScrollView>

const longText = localized({ [Locale.ja]: screenSpaceLongText.layers.textJa, [Locale.en]: screenSpaceLongText.layers.textEn })

const LongText = (): JSX.Element =>
  <ScrollView style={{ backgroundColor: screenSpaceGrid.backgroundColor, height: '100%', width: '100%' }}>
    <View style={{ width: '100%', padding: 25 }}>
      <longText.render />
    </View>
  </ScrollView>

const barLayers = elementBottomBar.layers
export const SpaceContent = (): JSX.Element => {
  return <Tab.Navigator tabBarOptions={tabBarOptions}>
    <Tab.Screen name='list' component={List} options={{ tabBarIcon: () => <Image source={barLayers.list.image.source()} /> }} />
    <Tab.Screen name='grid' component={Grid} options={{ tabBarIcon: () => <Image source={barLayers.grid.image.source()} /> }} />
    <Tab.Screen name='longText' component={LongText} options={{ tabBarIcon: () => <Image source={barLayers.longText.image.source()} /> }} />
  </Tab.Navigator>
}
