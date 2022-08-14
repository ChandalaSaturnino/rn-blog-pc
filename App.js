import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import IndexScreen from './src/screens/IndexScreen'
import ShowScreen from './src/screens/ShowScreen'
import CreateScreen from './src/screens/CreateScreen'
import EditScreen from './src/screens/EditScreen'

import { Provider } from './src/context/BlogContext'

import { FontAwesome } from '@expo/vector-icons'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Index" >
        <Stack.Screen 
          name="Index" 
          component={IndexScreen}
          options={ ({navigation}) => ({
            title: 'Blogs', 
            headerTitleAlign: 'center', 
            headerRight: () => (
              <FontAwesome.Button 
                name="plus-circle" 
                backgroundColor="#78a7ef" 
                onPress={() => navigation.navigate('Create')}
                style={styles.btn}
              >
              </FontAwesome.Button>
              )
            })
          }
        />
        <Stack.Screen 
          name="Show" 
          component={ShowScreen}
          options={ ({navigation}) => ({ 
            title: 'Show', 
            headerTitleAlign: 'center', 
            headerRight: () => (
              <FontAwesome.Button 
                name="edit" 
                backgroundColor="#78a7ef" 
                onPress={() => navigation.navigate('Edit')}
                style={styles.btn}
              >
              </FontAwesome.Button>
            )
          })}
          />
        <Stack.Screen 
          name="Create" 
          component={CreateScreen}
          options={{ title: 'Create', headerTitleAlign: 'center' }}
        />
        <Stack.Screen 
          name="Edit" 
          component={EditScreen}
          options={{ title: 'Edit', headerTitleAlign: 'center' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    paddingLeft: 18,
  }
});

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
}