import {Box, HStack, Image, Stack, Text, VStack} from 'native-base';
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {ImageBackground, TouchableOpacity} from 'react-native';
import {fontSemiBold, lightColor} from '../assets/MainStyle';
import {useTranslation} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {secretKey} from '../auth_provider/Config';

const HeaderComponents = ({navigation, component}) => {
  const {t} = useTranslation();

  const [userId, SetUserId] = React.useState('');

  useEffect(() => {
    AsyncStorage.getItem('userToken').then(val => {
      if (val != null) {
        var CryptoJS = require('crypto-js');
        const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(
          CryptoJS.enc.Utf8,
        );
        SetUserId(JSON.parse(decryptData).userCode);
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
            <TouchableOpacity onPress={() => navigation.replace("Home")}>
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
          <HStack alignItems="center" space={3}>
            {component == 'Home' && (
              <TouchableOpacity
                onPress={() => navigation.navigate('Notification')}>
                <Icon
                  name="notifications-outline"
                  size={24}
                  color={lightColor}
                />
              </TouchableOpacity>
            )}
            <Box
              style={{
                backgroundColor: lightColor,
                padding: 5,
                borderRadius: 5,
              }}>
              <Image
                source={require('../assets/images/logo.jpg')}
                style={{width: 60, height: 32, resizeMode: 'contain'}}
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
