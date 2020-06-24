import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile71136Navigator from '../features/UserProfile71136/navigator';
import Tutorial71135Navigator from '../features/Tutorial71135/navigator';
import NotificationList71107Navigator from '../features/NotificationList71107/navigator';
import Settings71106Navigator from '../features/Settings71106/navigator';
import Settings71098Navigator from '../features/Settings71098/navigator';
import UserProfile71096Navigator from '../features/UserProfile71096/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile71136: { screen: UserProfile71136Navigator },
Tutorial71135: { screen: Tutorial71135Navigator },
NotificationList71107: { screen: NotificationList71107Navigator },
Settings71106: { screen: Settings71106Navigator },
Settings71098: { screen: Settings71098Navigator },
UserProfile71096: { screen: UserProfile71096Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
