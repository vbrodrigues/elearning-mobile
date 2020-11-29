import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather';

import Home from '../pages/Home';
import Saved from '../pages/Saved';
import CoursePage from '../pages/CoursePage';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SavedStack = createStackNavigator();

const HomeStackScreen: React.FC = () => (
  <HomeStack.Navigator screenOptions={{
    headerShown: false,
    cardStyle: { backgroundColor: '#6548A3' },
  }}
  >
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen name="CoursePage" component={CoursePage} />
  </HomeStack.Navigator>
);

const SavedStackScreen: React.FC = () => (
  <SavedStack.Navigator screenOptions={{
    headerShown: false,
    cardStyle: { backgroundColor: '#6548A3' },
  }}
  >
    <SavedStack.Screen name="Saved" component={Saved} />
  </SavedStack.Navigator>
);

const AppRoutes: React.FC = () => (
  <Tab.Navigator tabBarOptions={{
    tabStyle: { justifyContent: 'center', flexDirection: 'row' },
    labelStyle: { fontSize: 15, fontFamily: 'Roboto-Medium' },
    activeTintColor: '#FF6680',
    inactiveTintColor: '#C4C4D1',
    labelPosition: 'beside-icon',
  }}
  >
    <Tab.Screen name="Home" component={HomeStackScreen} options={{ tabBarIcon: ({ focused, color, size }) => <Icon name="home" color={color} size={20} /> }} />
    <Tab.Screen name="Saved" component={SavedStackScreen} options={{ tabBarIcon: ({ focused, color, size }) => <Icon name="heart" color={color} size={20} /> }} />
  </Tab.Navigator>
);

export default AppRoutes;
