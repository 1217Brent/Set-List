import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Test from './components/test';
import Login from './components/Users/Login';
import SignUp from './components/Users/SignUp';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TestPage"
          component={Test}
          options={{ title: 'Test' }}
        />
               <Stack.Screen
          name="LoginPage"
          component={Login}
          options={{ title: 'Login' }}
        />
                       <Stack.Screen
          name="SignPage"
          component={SignUp}
          options={{ title: 'SignUp' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;