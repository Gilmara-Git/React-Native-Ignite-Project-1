// import "./styles";
import { View, ActivityIndicator } from 'react-native';
import themes from '../../themes/themes';
import styles from './styles';


export const Loading =()=>{
  return (
          <View style={styles.loadingIndicator}>
          <ActivityIndicator color={themes.colors.purple} size="large" />
          </View>
          )
  
};