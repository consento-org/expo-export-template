import React from 'react'
import { View, StyleSheet, FlatList, useWindowDimensions } from 'react-native'
import { createBottomTabNavigator, BottomTabBarOptions } from '@react-navigation/bottom-tabs'
import { elementBottomBar } from '../styles/design/layer/elementBottomBar'
import { ListItem } from './components/ListItem'
import { GridBox } from './components/GridBox'
import { SpaceLongText } from './SpaceLongText'
import { SketchElement } from '../styles/util/react/SketchElement'
import { elementBox } from '../styles/design/layer/elementBox'

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

const styles = StyleSheet.create({
  gridView: {
    alignSelf: 'center'
  }
})

const data = ['hi', '今日！', 'di', 'ho', 'fix', 'me', 'up', 'break', 'you', 'down']

const List = (): JSX.Element =>
  <FlatList
    data={data}
    renderItem={({ item, index }) => <ListItem key={`list-${index}`} label={item} />}
    keyExtractor={(_, index) => `list-${index}`}
  />

const Grid = (): JSX.Element => {
  const window = useWindowDimensions()
  const numColumns = (window.width / elementBox.width) | 0
  return <FlatList
    key={`list-${numColumns}`}
    contentContainerStyle={styles.gridView}
    data={data}
    renderItem={({ item, index }) => <GridBox key={`list-${index}`} label={item} />}
    numColumns={numColumns}
    keyExtractor={(_, index) => `list-${index}`}
  />
}

const Shapes = (): JSX.Element => <View />

const barLayers = elementBottomBar.layers
export const SpaceContent = (): JSX.Element => {
  return <Tab.Navigator tabBarOptions={tabBarOptions}>
    <Tab.Screen name='list' component={List} options={{ tabBarIcon: () => <SketchElement src={barLayers.list} /> }} />
    <Tab.Screen name='grid' component={Grid} options={{ tabBarIcon: () => <SketchElement src={barLayers.grid} /> }} />
    <Tab.Screen name='longText' component={SpaceLongText} options={{ tabBarIcon: () => <SketchElement src={barLayers.longText} /> }} />
    <Tab.Screen name='shapes' component={Shapes} options={{ tabBarIcon: () => <SketchElement src={barLayers.shapes} /> }} />
  </Tab.Navigator>
}
