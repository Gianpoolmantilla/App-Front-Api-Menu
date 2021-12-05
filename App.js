import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import {Card} from './Card';
import ViewError from './ViewError';
import ComingSoon from './ComingSoon';
import Category from './Category';
import {navigationRef} from './RootNavigation';




const Drawer = createDrawerNavigator();

const App =()=> {
  return (
   
    <NavigationContainer ref={navigationRef}>
      <Drawer.Navigator>
      <Drawer.Screen name="Juegos de PC" component={ComingSoon} />       
        <Drawer.Screen name="Card" component={Card} />  
        <Drawer.Screen name="Categoria" component={Category} />
        {/* <Drawer.Screen name="ViewError" component={ViewError} /> */}
      </Drawer.Navigator>
    </NavigationContainer>   
  );
}

export default App;


