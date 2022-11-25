import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FondoProvider } from './Contexts/FondoImagenContext';


// views import 
import Home from './Views/Home';
import HoraYTemperatura from './Views/horaYTemperatura';
import Contactos from './Views/contactos';
import NroEmergencia from './Views/nroEmergencia';
import VideoFav from './Views/VideoFav';
import Identificacion from './Views/Identificacion'
import imagenFondo from './Views/imagenFondo'
import Vibrator from './Views/Vibrator'
import videopicker from'./Views/videopicker'
import camara from './Views/camara'




export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <FondoProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home}
            options={{
              headerShown: false,
            }} />
          <Stack.Screen name="HoraTemp" component={HoraYTemperatura}
            options={{
              headerTitle: "Hora y temperatura actuales",
            }} />

          <Stack.Screen name="Contactos" component={Contactos}
            options={{
              headerTitle: "Contactos",
            }} />

          <Stack.Screen name="NroEmergencia" component={NroEmergencia}
            options={{

              headerTitle: "Nro de emergencia",
            }} />

          <Stack.Screen name="VideoFavorito" component={VideoFav}
            options={{
              headerTitle: "¿Cuál es tu video favorito?",
            }} />

          <Stack.Screen name="Identificacion" component={Identificacion}
            options={{
              headerTitle: "QR",
            }} />

          <Stack.Screen name="ImagenFondo" component={imagenFondo}
            options={{
              headerTitle: "Imágen fondo",
            }} />

          <Stack.Screen name="Vibrator" component={Vibrator}
            options={{
              headerTitle: "Vibrator",
            }} />

          <Stack.Screen name="videopicker" component={videopicker}
            options={{
              headerTitle: "videopicker",
            }} />

          <Stack.Screen name="camara" component={camara}
            options={{
              headerTitle: "camara",
            }} />

        </Stack.Navigator>
      </NavigationContainer>
    </FondoProvider>


  );
}
