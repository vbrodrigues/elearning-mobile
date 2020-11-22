import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppRoutes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#6548A3" />
    <View style={{ flex: 1, backgroundColor: '#6548A3' }}>
      <AppRoutes />
    </View>
  </NavigationContainer>
);

export default App;
