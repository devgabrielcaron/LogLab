import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RegistrationScreen, LoginScreen, Institucional , Categorias , Cidade , galeriaFotos , galeriaVideos , pontosTuristicos , regioes , rotasTuristicas , Segmentos , Eventos , QRcode, SplashScreen , HomeScreen , OndeComer , PertoDeVoce , OqueFazer , OndeDormir , RotasTuristicas } from '../screens/';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
const Stack = createStackNavigator();
export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{header: () => null}}
      />
      <Stack.Screen name="Cadastrar" component={RegistrationScreen} />
      <Stack.Screen name="QRcode" component={QRcode} />
      <Stack.Screen name="Institucional" component={Institucional} />
      <Stack.Screen name="Categorias" component={Categorias} />
      <Stack.Screen name="Cidade" component={Cidade} />
      <Stack.Screen name="galeriaFotos" component={galeriaFotos} />
      <Stack.Screen name="galeriaVideos" component={galeriaVideos} />
      <Stack.Screen name="pontosTuristicos" component={pontosTuristicos} />
      <Stack.Screen name="regioes" component={regioes} />
      <Stack.Screen name="rotasTuristicas" component={rotasTuristicas} />
      <Stack.Screen name="Segmentos" component={Segmentos} />
      <Stack.Screen name="Eventos" component={Eventos} />
      <Stack.Screen 
      name="SplashScreen" 
      component={SplashScreen} 
      options={{header: () => null}} 
      />
      <Stack.Screen 
      name="HomeScreen" 
      component={HomeScreen} 
      options={{header: () => null}} 
      />
      <Stack.Screen 
      name="OndeComer" 
      component={OndeComer} 
      options={{header: () => null}} 
      />

<Stack.Screen 
      name="PertoDeVoce" 
      component={PertoDeVoce} 
      //options={{header: () => null}} 
      />

<Stack.Screen 
      name="OqueFazer" 
      component={OqueFazer} 
      //options={{header: () => null}} 
      />
      <Stack.Screen 
      name="OndeDormir" 
      component={OndeDormir} 
      //options={{header: () => null}} 
      />
      <Stack.Screen 
      name="RotasTuristicas" 
      component={RotasTuristicas} 
      options={{header: () => null}} 
      />
      
    </Stack.Navigator>
  );
}

