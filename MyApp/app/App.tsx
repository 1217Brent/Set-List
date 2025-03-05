import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MatchPage from './components/Matching/MatchPage';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MatchPage"
          component={MatchPage}
        />
    
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;