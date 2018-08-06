import { AppRegistry, YellowBox } from 'react-native';
import App from './App';
// retirado warnig provido por react navigation
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

AppRegistry.registerComponent('UdemyCRN', () => App);
