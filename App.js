import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Chao from './Chao';
import Gioithieu1 from './Gioithieu1'; // Import màn hình Gioithieu1
import Gioithieu2 from './Gioithieu2';
import Gioithieu3 from './Gioithieu3';
import Dangnhap from './Dangnhap';
import Dangky from './Dangky';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={Chao}
          options={{ headerShown: false }}  // Ẩn tiêu đề nếu muốn
        />
        <Stack.Screen name="Gioithieu1" component={Gioithieu1} />
        <Stack.Screen name="Gioithieu2" component={Gioithieu2} />
        <Stack.Screen name="Gioithieu3" component={Gioithieu3} />
        <Stack.Screen name="Dangnhap" component={Dangnhap} />
        <Stack.Screen name="Dangky" component={Dangky} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}