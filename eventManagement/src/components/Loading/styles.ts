import { StyleSheet } from 'react-native';
import themes from '../../themes/themes';

const styles = StyleSheet.create({
  loadingIndicator:{
    flex:1,
    backgroundColor: themes.colors.background,
    justifyContent: 'center'
  }
});

export default styles;