import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './src/Login'
import Compo from './src/Compo';

const Navi = createStackNavigator(
  {
    LoginScreen : Login,
    Component : Compo,

  },
  {
    initialRouteName : 'LoginScreen',
    defaultNavigationOptions:{
      title : 'Todo App'
    },
  }
);

export default createAppContainer(Navi)