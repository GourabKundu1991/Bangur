import { Box, HStack, NativeBaseProvider, Text, VStack, Stack, Button, Avatar, Input, Select, Actionsheet, useDisclose } from 'native-base';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { ActivityIndicator, Alert, Image, Linking, Pressable, ScrollView, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import { APP_VERSION, AccessToken, BASE_URL, OS_TYPE } from '../auth_provider/Config';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MainStyle, baseColor, baseLightColor, baseSemiColor, dangerColor, darkColor, darkGrey, fontBold, fontRegular, fontSemiBold, greyColor, lightColor, lightGrey, successColor, warningColor } from '../assets/MainStyle';
import Toast from 'react-native-simple-toast';
import HeaderComponents from '../components/Header';
import moment from 'moment';

const MemberDetailsScreen = ({ navigation, route }) => {

    const { t } = useTranslation();
    const [loading, setLoading] = React.useState(false);

    const [memberDetails, setMemberDetails] = React.useState("");


    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setMemberDetails(route.params.details);
            console.log(route.params.details);
        });
        return unsubscribe;
    }, []);

    return (
        <NativeBaseProvider>
            <StatusBar barStyle="dark-content" backgroundColor={lightColor} />
            <VStack flex={1} backgroundColor={"#000000"}>
                <HeaderComponents component="View Details" navigation={navigation} />
                <ScrollView backgroundColor={lightColor} borderTopLeftRadius={12} borderTopRightRadius={12} width={'94%'} alignSelf="center">
                    <VStack space={5} padding={6}>
                        <Stack backgroundColor={baseLightColor} borderRadius={8} overflow="hidden">
                            <HStack space={6} padding={4} borderColor={lightColor} borderBottomWidth={4} alignItems="center">
                                <Avatar borderColor={baseSemiColor} resizeMode="contain" borderWidth="2" size="60" source={memberDetails.profile_image == "" ? require('../assets/images/avatar.png') : { uri: memberDetails.profile_image }}></Avatar>
                                <VStack justifyContent="center" width={'70%'}>
                                    <Text color={baseColor} fontSize="lg" fontFamily={fontBold} textTransform="capitalize">{memberDetails.name}</Text>
                                    <HStack space={2} alignItems="center">
                                        <Text color={darkGrey} fontSize="xs" fontFamily={fontSemiBold}>{t("Member Id")}:</Text>
                                        <Text color={darkGrey} fontSize="xs" fontFamily={fontBold}>{memberDetails.emp_id}</Text>
                                    </HStack>
                                    <HStack space={2} alignItems="center">
                                        <Text color={darkGrey} fontSize="xs" fontFamily={fontSemiBold}>{t("Contact No.")}:</Text>
                                        <Pressable onPress={() => Linking.openURL(`tel:${memberDetails.ph_number}`)}>
                                            <Text color={darkGrey} fontSize="xs" fontFamily={fontBold}> {memberDetails.ph_number}</Text>
                                        </Pressable>
                                    </HStack>
                                </VStack>
                            </HStack>
                            <VStack padding={4} space={1}>
                                <Text marginBottom={1} color={baseColor} fontSize="sm" fontFamily={fontBold}>{t("Member Details")}</Text>
                                <HStack alignItems="center">
                                    <Text width={'40%'} color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{("Date of Registration")}:</Text>
                                    <Text width={'57%'} color={darkColor} fontSize="xs" fontFamily={fontBold} textAlign="right">{moment(memberDetails.DateOfRegistration).format('DD-MM-YYYY')}</Text>
                                </HStack>
                                {memberDetails.aadnarNumber != "" && (
                                    <HStack alignItems="center">
                                        <Text width={'40%'} color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{("Aadhaar No.")}:</Text>
                                        <Text width={'57%'} color={darkColor} fontSize="xs" fontFamily={fontBold} textAlign="right">{memberDetails.aadnarNumber}</Text>
                                    </HStack>
                                )}
                                <HStack alignItems="center">
                                    <Text width={'40%'} color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{("PAN No.")}:</Text>
                                    <Text width={'57%'} color={darkColor} fontSize="xs" fontFamily={fontBold} textAlign="right">{memberDetails.panNumber}</Text>
                                </HStack>
                                <HStack alignItems="center">
                                    <Text width={'40%'} color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{("Date of Birth")}:</Text>
                                    <Text width={'57%'} color={darkColor} fontSize="xs" fontFamily={fontBold} textAlign="right">{moment(memberDetails.dob).format('DD-MM-YYYY')}</Text>
                                </HStack>
                                <VStack space={1}>
                                    <HStack alignItems="center">
                                        <Text width={'40%'} color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{("Gender")}:</Text>
                                        <Text width={'57%'} color={darkColor} fontSize="xs" fontFamily={fontBold} textAlign="right">{memberDetails.gender}</Text>
                                    </HStack>
                                    <HStack alignItems="center">
                                        <Text width={'40%'} color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{("Address")}:</Text>
                                        <Text width={'57%'} color={darkColor} fontSize="xs" fontFamily={fontBold} textAlign="right">{memberDetails.line1}</Text>
                                    </HStack>
                                    <HStack alignItems="center">
                                        <Text width={'40%'} color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{("Pincode")}:</Text>
                                        <Text width={'57%'} color={darkColor} fontSize="xs" fontFamily={fontBold} textAlign="right">{memberDetails.post_code}</Text>
                                    </HStack>
                                    <HStack alignItems="center">
                                        <Text width={'40%'} color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{("State")}:</Text>
                                        <Text width={'57%'} color={darkColor} fontSize="xs" fontFamily={fontBold} textAlign="right">{memberDetails.stateName}</Text>
                                    </HStack>
                                    <HStack alignItems="center">
                                        <Text width={'40%'} color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{("District")}:</Text>
                                        <Text width={'57%'} color={darkColor} fontSize="xs" fontFamily={fontBold} textAlign="right">{memberDetails.districtName}</Text>
                                    </HStack>
                                    <HStack alignItems="center">
                                        <Text width={'40%'} color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{("City")}:</Text>
                                        <Text width={'57%'} color={darkColor} fontSize="xs" fontFamily={fontBold} textAlign="right">{memberDetails.city}</Text>
                                    </HStack>
                                    <HStack alignItems="center">
                                        <Text width={'40%'} color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{("Registered By")}:</Text>
                                        {memberDetails.selfRegistered == 0 ?
                                            <Text width={'57%'} color={darkColor} fontSize="xs" fontFamily={fontBold} textAlign="right">{memberDetails.UploadedByName} ({memberDetails.UploadedByExternalId})</Text>
                                            :
                                            <Text width={'57%'} color={darkColor} fontSize="xs" fontFamily={fontBold} textAlign="right">Self</Text>
                                        }
                                    </HStack>
                                    {memberDetails.is_approved != 0 && (
                                        <HStack alignItems="center">
                                            {memberDetails.is_approved == 1 && (
                                                <Text width={'40%'} color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{("Approved By")}:</Text>
                                            )}
                                            {memberDetails.is_approved == 2 && (
                                                <Text width={'40%'} color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{("Rejected By")}:</Text>
                                            )}
                                            <Text width={'57%'} color={darkColor} fontSize="xs" fontFamily={fontBold} textAlign="right">{memberDetails.verifiedByName}</Text>
                                        </HStack>
                                    )}
                                </VStack>
                            </VStack>
                            <VStack space={1} padding={4} borderColor={lightColor} borderTopWidth={4}>
                                <Text marginBottom={1} color={baseColor} fontSize="sm" fontFamily={fontBold}>{t("Dealer Details")}</Text>
                                <HStack alignItems="center">
                                    <Text width={'40%'} color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{("Name")}:</Text>
                                    <Text width={'57%'} color={darkColor} fontSize="xs" fontFamily={fontBold} textAlign="right">{memberDetails.dealerName}</Text>
                                </HStack>
                                <HStack alignItems="center">
                                    <Text width={'40%'} color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{("ID")}:</Text>
                                    <Text width={'57%'} color={darkColor} fontSize="xs" fontFamily={fontBold} textAlign="right">{memberDetails.dealerId}</Text>
                                </HStack>
                                <HStack alignItems="center">
                                    <Text width={'40%'} color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{("Contact No.")}:</Text>
                                    <Text width={'57%'} color={darkColor} fontSize="xs" fontFamily={fontBold} textAlign="right">{memberDetails.dealerPhone}</Text>
                                </HStack>
                                <HStack alignItems="center">
                                    <Text width={'40%'} color={darkGrey} fontSize="xs" fontFamily={fontRegular}>{("District")}:</Text>
                                    <Text width={'57%'} color={darkColor} fontSize="xs" fontFamily={fontBold} textAlign="right">{memberDetails.dealerDistrictName}</Text>
                                </HStack>
                            </VStack>
                        </Stack>
                    </VStack>
                </ScrollView>
            </VStack>
            {loading && (
                <View style={MainStyle.spincontainer}>
                    <ActivityIndicator animating={loading} size="large" color={warningColor} />
                </View>
            )}
        </NativeBaseProvider>
    );
};

const styles = StyleSheet.create({
});

export default MemberDetailsScreen;