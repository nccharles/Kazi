import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import Introduction from '../Welcome/Welcome';
import SignupScreen from '../screens/signup/signupScreen';
import NotificationScreen from '../screens/Notifications';
import LoginScreen from '../screens/signup/LoginScreen';
import careerScreen from '../screens/signup/careerScreen';
import JobScreen from '../screens/joblistScreen';
import addWorkScreen from '../screens/addWorkScreen';
import jobInfoScreen from '../screens/jobInfoScreen';
const StackNavigator = createStackNavigator(
  {
    HomeScreen: {
      screen: MainTabNavigator,
    },
    Notification: {
      screen: NotificationScreen,
    },
    AddWork: {
      screen: addWorkScreen
    },
    Job: {
      screen: JobScreen
    },
    JobInfo: {
      screen: jobInfoScreen
    }
  }, {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  });

const SignStackNavigator = createStackNavigator(
  {
    Signup: {
      screen: SignupScreen,
    },
    Career: {
      screen: careerScreen,
    },
    Job: {
      screen: JobScreen
    }
  }, {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  })
const SwitchNavigator = createSwitchNavigator(
  {
    IntroScreen: {
      screen: Introduction,
    },
    Login: {
      screen: LoginScreen
    },
    SignScreen: {
      screen: SignStackNavigator,
    },
    TabScreen: {
      screen: StackNavigator,
    }
  }
);
const AppContainer = createAppContainer(SwitchNavigator);
export default AppContainer;