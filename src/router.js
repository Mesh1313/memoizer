import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MemosScreen from './screens/memos';
import MemoDetailsScreen from './screens/details';

const screens = {
  Memos: { screen: MemosScreen },
  Details: { screen: MemoDetailsScreen },
};

const navConfig = {
  initialRouteName: 'Memos',
  headerMode: 'none'
}

const rootNav = createStackNavigator(screens, navConfig);

export default createAppContainer(rootNav);