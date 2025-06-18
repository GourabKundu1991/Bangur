import { Box, HStack, Image, Stack, Text, VStack } from 'native-base';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import { fontSemiBold, lightColor, MainStyle, warningColor } from '../assets/MainStyle';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { secretKey } from '../auth_provider/Config';


const HeaderComponents = ({ navigation, component, cartcount, openDialer, component2, unreadCount }) => {
  const { t } = useTranslation();

  const [userId, SetUserId] = React.useState('');
  // const [notificationCount, SetNotificationCount] = React.useState('');


  console.log("Headerrrrrr");
  console.log("UnreadCount", unreadCount);


  useEffect(() => {
    AsyncStorage.getItem('userToken').then(val => {
      if (val != null) {
        var CryptoJS = require('crypto-js');
        const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(
          CryptoJS.enc.Utf8,
        );
        SetUserId(JSON.parse(decryptData).userCode);
        // SetNotificationCount(unreadCount);
      }
    });
  }, []);

  return (
    <ImageBackground
      backgroundColor={'#091571'}
      source={require('../assets/images/bg.png')}
      imageStyle={{
        resizeMode: 'cover',
        bottom: 0,
        top: 0,
        opacity: 1,
        width: '100%',
        height: 250,
      }}>
      <HStack
        alignItems="center"
        justifyContent="space-between"
        paddingX="5"
        paddingY="4">
        <HStack space={4} alignItems="center">
          {component == 'Home' ? (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon name="menu" size={26} color={lightColor} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="arrow-back-outline" size={24} color={lightColor} />
            </TouchableOpacity>
          )}
          {component != 'Home' && (
            <Text color={lightColor} fontFamily={fontSemiBold} fontSize="md">
              {t(component)}
            </Text>
          )}
        </HStack>
        <VStack space={1} alignItems="flex-end">
          <HStack alignItems="center" space={2}>

            {component == 'Home' && (
              <TouchableOpacity onPress={openDialer}>
                <Icon name="call-outline" size={24} color={lightColor} />
              </TouchableOpacity>
            )}

            {component == 'Home' && (
              <TouchableOpacity
                onPress={() => navigation.navigate('Notification')}>
                <Icon
                  name="notifications-outline"
                  size={24}
                  color={lightColor}
                />
                {unreadCount > 0 && (
                  <View style={{
                    position: 'absolute',
                    backgroundColor: 'red',
                    borderRadius: 10,
                    width: 20,
                    height: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    top: -8,
                    right: -5,
                  }}>
                    <Text style={{ color: 'white', fontSize: 12 }}>{unreadCount}</Text>
                  </View>
                )}
              </TouchableOpacity>
            )}


            {/* {component == 'Rewards Store' && (
              <TouchableOpacity style={{ position: 'relative' }}
                onPress={() => navigation.navigate('MyCart', { pageTitle: 'My Cart' })}>
                <Icon
                  name="cart-outline"
                  size={24}
                  color={lightColor}
                />
                {cartcount != 0 && (
                  <View style={{ position: 'absolute', backgroundColor: warningColor, borderRadius: 15, overflow: 'hidden', top: -5, right: -5, paddingHorizontal: 3, paddingBottom: 1, width: 18, alignItems: 'center' }}>
                    <Text fontSize='11' fontWeight="bold" color={lightColor}>{cartcount}</Text>
                  </View>
                )}
              </TouchableOpacity>
            )}
            {component == 'Details' && (
              <TouchableOpacity style={{ position: 'relative' }}
                onPress={() => navigation.navigate('MyCart', { pageTitle: 'My Cart' })}>
                <Icon
                  name="cart-outline"
                  size={24}
                  color={lightColor}
                />
                {cartcount != 0 && (
                  <View style={{ position: 'absolute', backgroundColor: warningColor, borderRadius: 15, overflow: 'hidden', top: -5, right: -5, paddingHorizontal: 3, paddingBottom: 1, width: 18, alignItems: 'center' }}>
                    <Text fontSize='11' fontWeight="bold" color={lightColor}>{cartcount}</Text>
                  </View>
                )}
              </TouchableOpacity>
            )} */}
            <Box
              style={{
                backgroundColor: lightColor,
                padding: 5,
                borderRadius: 5,
              }}>
              <Image
                source={require('../assets/images/logo.jpg')}
                style={{ width: 60, height: 32, resizeMode: 'contain' }}
              />
            </Box>
          </HStack>
          <HStack alignItems="center" justifyContent="flex-end" space={1}>
            <Icon name="person-circle-outline" size={16} color={lightColor} />
            <Text
              color={lightColor}
              fontFamily={fontSemiBold}
              textAlign="right"
              fontSize="10">
              {userId}
            </Text>
          </HStack>
        </VStack>
      </HStack>
    </ImageBackground>
  );
};

export default HeaderComponents;
