import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Loading } from './src/components/Loading';

import themes from './src/themes/themes';
import { useFonts,Inter_400Regular, Inter_700Bold,}from '@expo-google-fonts/inter';


export default function App() {
  const [ fontsLoaded ]  = useFonts({
    Inter_400Regular, Inter_700Bold
})


if(!fontsLoaded){
  return <Loading/>
}


  return (
    <View style={styles.container}>    
      <StatusBar style='light'
      />
    
     {/* <Loading /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.colors.background,
    padding: 40,

  },
});
