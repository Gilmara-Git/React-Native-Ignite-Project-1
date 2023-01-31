import { StatusBar } from 'expo-status-bar';
import { Loading } from './src/components/Loading';
import { Home } from './src/screens/Home';
import { useFonts,Inter_400Regular, Inter_700Bold,}from '@expo-google-fonts/inter';


export default function App() {
  const [ fontsLoaded ]  = useFonts({
    Inter_400Regular, Inter_700Bold
})


if(!fontsLoaded){
  return <Loading/>
}


  return (      
      <> 
      <StatusBar style='light' />
      <Home/>
      </>
  );
}
