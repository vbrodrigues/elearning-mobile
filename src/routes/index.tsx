import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import Home from '../pages/Home';
import Saved from '../pages/Saved';

const Tab = createBottomTabNavigator();

const AppRoutes: React.FC = () => (
  <Tab.Navigator tabBarOptions={{
    tabStyle: { justifyContent: 'center', flexDirection: 'row' },
    labelStyle: { fontSize: 15, fontFamily: 'Roboto-Medium' },
    activeTintColor: '#FF6680',
    inactiveTintColor: '#C4C4D1',
    labelPosition: 'beside-icon',
  }}
  >
    <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: ({ focused, color, size }) => <Icon name="home" color={color} size={20} /> }} />
    <Tab.Screen name="Saved" component={Saved} options={{ tabBarIcon: ({ focused, color, size }) => <Icon name="heart" color={color} size={20} /> }} />
  </Tab.Navigator>
);

export default AppRoutes;
