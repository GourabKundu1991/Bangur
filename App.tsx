/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Alert, AppState, AppStateStatus, BackHandler, LogBox, NativeModules, Platform, SafeAreaView } from 'react-native';
import { PermissionsAndroid } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import notifee,{ AndroidImportance } from '@notifee/react-native';
// import NotificationHandler from './screens/NotificationHandler';

import SplashScreen from './screens/Splash';
import IntroScreen from './screens/Intro';
import LoginScreen from './screens/Login';
import TermsConditionsScreen from './screens/TermsConditions';
import RegistrationScreen from './screens/Registration';
import HomeScreen from './screens/Home';
import LeftMenuBarScreen from './screens/LeftMenuBar';
import MyProfileScreen from './screens/MyProfile';
import AddPurchaseScreen from './screens/AddPurchase';
import RegistrationApprovalsScreen from './screens/RegistrationApprovals';
import TransactionApprovalsScreen from './screens/TransactionApprovals';
import MyPerformanceScreen from './screens/MyPerformance';
import RegisterMemberScreen from './screens/RegisterMember';
import AddContractorScreen from './screens/AddContractor';
import ViewTransactionScreen from './screens/ViewTransaction';
import ViewMemberScreen from './screens/ViewMember';
import MemberDetailsScreen from './screens/MemberDetails';
import PurchaseHistoryScreen from './screens/PurchaseHistory';
import MyPointsScreen from './screens/MyPoints';
import AboutProgramScreen from './screens/AboutProgram';
import ChangeLanguageScreen from './screens/ChangeLanguage';
import AllocateLiftingScreen from './screens/AllocateLifting';
import RewardsStoreScreen from './screens/RewardsStore';
import TrackRewardsScreen from './screens/TrackRewards';
import MyCartScreen from './screens/MyCart';
import NotificationScreen from './screens/Notification';
import GalleryScreen from './screens/Gallery';
import FAQScreen from './screens/FAQ';
import NewsLetterScreen from './screens/NewsLetter';
import ContactUsScreen from './screens/ContactUs';
import TransactionScreen from './screens/Transaction';
import { hashKey, URL } from './auth_provider/Config';
// import {fetch} from 'react-native-ssl-pinning';

import {
  initializeSslPinning,
  addSslPinningErrorListener,
} from 'react-native-ssl-public-key-pinning';
import { useFreeRasp } from 'freerasp-react-native';
import DeleteAccountScreen from './screens/DeleteAccount';
import ProductDetailsScreen from './screens/ProductDetails';
import RedeemptionConfirmationScreen from './screens/RedeemptionConfirmation';
import AddressScreen from './screens/Address';
import RedeemsonOTP from './screens/RedeemsonOTP';
import OrderPlacessSuccessfullyScreen from './screens/OrderPlacessSuccessfully';
import ViewOrdersScreen from './screens/ViewOrder';
import UpdateKYCScreen from './screens/UpdateKYC';
import RedemptionStatusScreen from './screens/RedemptionStatus';
import RedemptionDetailsScreen from './screens/RedemptionDetails';
import AddSpouseScreen from './screens/AddSpouse';
import MySpouseScreen from './screens/SpouseDetails';
import AddressVerificationScreen from './screens/AddressVerification';
import GalleryDetailsScreen from './screens/GalleryDetails';
import { startFridaMonitoring } from './src/security';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();



const { SecurityServiceManager } = NativeModules;

const App = () => {

  useEffect(() => {
    const monitor = startFridaMonitoring(5000); 
    return () => clearInterval(monitor); 
  }, []);

  const checkRootAndEmulator = async () => {
    try {
      let isRootedNative = await SecurityServiceManager.isDeviceRooted();
      let isEmulatorNative = await SecurityServiceManager.isEmulator();

      if (
        //isRootedNative || isEmulatorNative
        false
      ) {
        Alert.alert(
          'Security Alert',
          `The app cannot run on rooted devices or emulators.`,
          [{ text: 'OK', onPress: () => BackHandler.exitApp() }],
        );
        return;
      }
    } catch (error) {
      console.error('Error checking root or emulator status:', error);
    }
  };

  const createNotificationChannel = async () => {
    try {
      const channelId = await notifee.createChannel({
        id: "15",
        name: 'Default Channel',
        importance: AndroidImportance.HIGH,
      });

      if (channelId) {
        console.log("Notification Channel Created Successfully:", channelId);
      } else {
        console.log("Failed to Create Notification Channel");
      }
    } catch (error) {
      console.error("Error Creating Notification Channel:", error);
    }
  };

  const requestPermissionAndroid = async () => {

    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      //Alert.alert('Permission Granted');
      getToken();
      createNotificationChannel();
    } else {
      //Alert.alert('Permission Denied');
    }

  };

  
  const getToken = async () => {
    const token = await messaging().getToken();
    console.log("Token", token);
  };

  useEffect(() => {
    requestPermissionAndroid();
  
    //  Handle foreground notifications
    const unsubscribeForeground = messaging().onMessage(async remoteMessage => {
      if (remoteMessage?.notification) {
        // Create a notification channel
        await notifee.createChannel({
          id: 'default',
          name: 'Default Channel',
          importance: AndroidImportance.HIGH,
        });
  
        // Display the notification
        await notifee.displayNotification({
          title: remoteMessage.notification.title || 'Notification',
          body: remoteMessage.notification.body || '',
          android: {
            channelId: 'default',
            importance: AndroidImportance.HIGH,
          },
        });
      }
    });
  
    // Handle notification click when app is in background
    const unsubscribeOpenedApp = messaging().onNotificationOpenedApp(remoteMessage => {
      if (remoteMessage?.notification) {
        console.log(' Notification Clicked - Background');
        Alert.alert(
          remoteMessage.notification.title || 'Notification',
          remoteMessage.notification.body || ''
        );
      }
    });
  
    // Handle notification click when app was completely closed (killed)
    messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage?.notification) {
        console.log(' Notification Clicked - Killed State');
        Alert.alert(
          remoteMessage.notification.title || 'Notification',
          remoteMessage.notification.body || ''
        );
      }
    });
  
  
    // Cleanup listeners to avoid memory leaks
    return () => {
      unsubscribeForeground();
      unsubscribeOpenedApp();
    };
  }, []);
  
  
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      if (remoteMessage?.notification) {
        Alert.alert('Notification!', remoteMessage.notification.body);
      }
    });

    return unsubscribe;
  }, []);



  useEffect(() => {
    checkRootAndEmulator();

    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      if (nextAppState === 'active') {
        checkRootAndEmulator();
      }
    };

    const subscription = AppState.addEventListener(
      'change',
      handleAppStateChange,
    );

    return () => {
      subscription.remove();
    };
  });

  useEffect(() => {
    LogBox.ignoreLogs([
      'Animated: `useNativeDriver`',
      'Sending `onAnimatedValueUpdate` with no listeners registered.',
      'Please pass alt prop to Image component',
    ]);
  }, []);

  function MyStack() {
    return (
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="TermsConditions"
          component={TermsConditionsScreen}
        />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MyProfile" component={MyProfileScreen} />
        <Stack.Screen name="AddPurchase" component={AddPurchaseScreen} />
        <Stack.Screen
          name="RegistrationApprovals"
          component={RegistrationApprovalsScreen}
        />
        <Stack.Screen
          name="TransactionApprovals"
          component={TransactionApprovalsScreen}
        />
        <Stack.Screen name="MyPerformance" component={MyPerformanceScreen} />
        <Stack.Screen name="RegisterMember" component={RegisterMemberScreen} />
        <Stack.Screen name="AddContractors" component={AddContractorScreen} />
        <Stack.Screen name="AddSpouse" component={AddSpouseScreen} />
        <Stack.Screen name="SpouseDetails" component={MySpouseScreen} />
        <Stack.Screen
          name="ViewTransaction"
          component={ViewTransactionScreen}
        />
        <Stack.Screen name="ViewMember" component={ViewMemberScreen} />
        <Stack.Screen name="MemberDetails" component={MemberDetailsScreen} />
        <Stack.Screen
          name="PurchaseHistory"
          component={PurchaseHistoryScreen}
        />
        <Stack.Screen name="MyPoints" component={MyPointsScreen} />
        <Stack.Screen name="AboutProgram" component={AboutProgramScreen} />
        <Stack.Screen name="ChangeLanguage" component={ChangeLanguageScreen} />
        <Stack.Screen
          name="AllocateLifting"
          component={AllocateLiftingScreen}
        />
        <Stack.Screen name="Rewards" component={RewardsStoreScreen} />
        <Stack.Screen name="TrackRewards" component={TrackRewardsScreen} />
        <Stack.Screen name="MyCart" component={MyCartScreen} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
        <Stack.Screen name="Gallery" component={GalleryScreen} />
        <Stack.Screen name="Faq" component={FAQScreen} />
        <Stack.Screen name="Newsletter" component={NewsLetterScreen} />
        <Stack.Screen name="ContactUs" component={ContactUsScreen} />
        <Stack.Screen name="Transaction" component={TransactionScreen} />
        <Stack.Screen name="DeleteAccount" component={DeleteAccountScreen} />
        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
        <Stack.Screen name="RedemptionStatus" component={RedemptionStatusScreen} />
        <Stack.Screen name="RedemptionDetails" component={RedemptionDetailsScreen} />
        <Stack.Screen name="RedeemptionConfirmation" component={RedeemptionConfirmationScreen} />
        <Stack.Screen name="Address" component={AddressScreen} />
        <Stack.Screen name="RedeemsonOTP" component={RedeemsonOTP} />
        <Stack.Screen name="OrderPlacessSuccessfully" component={OrderPlacessSuccessfullyScreen} />
        <Stack.Screen name="ViewOrder" component={ViewOrdersScreen} />
        <Stack.Screen name="UpdateKYC" component={UpdateKYCScreen} />
        <Stack.Screen name="AddressVerificationPending" component={AddressVerificationScreen} />
        <Stack.Screen name="GalleryDetails" component={GalleryDetailsScreen} />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
        <Drawer.Navigator
          drawerContent={props => <LeftMenuBarScreen {...props} />}>
          <Drawer.Screen
            name="Welcome"
            options={{ headerShown: false, swipeEnabled: false }}
            component={MyStack}
          />
        </Drawer.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
