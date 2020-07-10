import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoadingScreen from "./screens/LoadingScreen";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/RegisterScreen";

import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCTmuVIal-HOSbdEnYDDbs0arE_zp0rTiA",
  authDomain: "socialapp-68195.firebaseapp.com",
  databaseURL: "https://socialapp-68195.firebaseio.com",
  projectId: "socialapp-68195",
  storageBucket: "socialapp-68195.appspot.com",
  messagingSenderId: "801005329987",
  appId: "1:801005329987:web:23d532404ffe3908effef6",
};

firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Home: HomeScreen,
});

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: "Loading",
    }
  )
);
