import { Box, HStack, NativeBaseProvider, Text, VStack, Stack, Button, Avatar, Input, Select, Actionsheet, useDisclose } from 'native-base';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { ActivityIndicator, Alert, Image, Linking, Pressable, ScrollView, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import { APP_VERSION, AccessToken, BASE_URL, OS_TYPE, secretKey } from '../auth_provider/Config';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MainStyle, baseColor, baseLightColor, baseSemiColor, dangerColor, darkColor, darkGrey, fontBold, fontRegular, fontSemiBold, greyColor, lightColor, lightGrey, successColor, warningColor } from '../assets/MainStyle';
import Toast from 'react-native-simple-toast';
import HeaderComponents from '../components/Header';
import moment from 'moment';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import FooterComponents from '../components/Footer';
import { useFocusEffect } from '@react-navigation/native';

const RedemptionStatusScreen = ({ navigation, route }) => {

    const { t } = useTranslation();
    const [loading, setLoading] = React.useState(false);

    const [approvalList, setApprovalList] = React.useState([]);
    const [searchTerms, setSearchTerms] = React.useState("");
    const [searchDate, setSearchDate] = React.useState("");
    const [isReset, setIsReset] = React.useState(false);
    const [userType, setUserType] = React.useState("");
    const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
    const [pageNumber, setPageNumber] = React.useState(1);
    const [totalPage, setTotalPage] = React.useState("");
    const [memberId, setMemberId] = React.useState("");
    const [contactHier, setContactHier] = React.useState(null);
    const [selectedTSO, setSelectedTSO] = React.useState("");
    const [showDropdown, setShowDropdown] = React.useState(false);
    const [tsoList, setTsoList] = React.useState([]);
    const [selectedTSOIds, setSelectedTSOIds] = React.useState([]);


    const [filterStatus, setFilterStatus] = React.useState("");

    useFocusEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setLoading(true);
            getAllData(searchDate, filterStatus);
        });
        return unsubscribe;
    }, []);

    const onSetFilter = (filterVal) => {
        setLoading(true);
        setFilterStatus(filterVal);
        getAllData(searchDate, filterVal);
        setPageNumber(1);
    }

    const getAllData = (dateValue, filterVal) => {
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                var CryptoJS = require("crypto-js");
                const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(CryptoJS.enc.Utf8);
                setUserType(JSON.parse(decryptData).user_type);
                let formdata = new FormData();
                formdata.append("os_type", `${OS_TYPE}`);
                formdata.append("app_ver", `${APP_VERSION}`);
                formdata.append("page", 1);
                formdata.append("search_value", searchTerms);
                formdata.append("registration_date", (dateValue == "" ? "" : moment(dateValue).format("DD-MM-YYYY")));
                formdata.append("status", 1);
                formdata.append("tsoId", selectedTSOIds);
                console.log("TSO ID-> ", selectedTSOIds);
                fetch(`${BASE_URL}/registration-approval`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'accesstoken': `${AccessToken}`,
                        'Useraccesstoken': JSON.parse(decryptData).token
                    },
                    body: formdata
                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        console.log("Approval:", responseJson);
                        if (responseJson.bstatus == 1) {
                            setLoading(false);
                            setApprovalList(responseJson.influncers);
                            setTotalPage(responseJson.total_pages);
                            if (responseJson.influncers.length > 0) {
                                const influencerIds = responseJson.influncers.map(influencer => influencer.id);
                                setMemberId(influencerIds);
                            }

                            getProfileData();
                        } else {
                            setLoading(false);
                            //Toast.show(responseJson.message, Toast.LONG);
                            setApprovalList([]);
                            if (responseJson.msg_code == "msg_0047") {
                                AsyncStorage.clear();
                                navigation.replace('Intro');
                            }
                        }
                    })
                    .catch((error) => {
                        setLoading(false);
                        //console.log("Error:", error);
                        Toast.show(t("Sorry! Somthing went Wrong. Maybe Network request Failed"));
                    });
            } else {
                setLoading(false);
                AsyncStorage.clear();
                navigation.replace('Intro');
            }
        });
    }

    const loadMore = () => {
        let num = pageNumber + 1;
        setLoading(true);
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                var CryptoJS = require("crypto-js");
                const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(CryptoJS.enc.Utf8);
                setUserType(JSON.parse(decryptData).user_type);
                let formdata = new FormData();
                formdata.append("os_type", `${OS_TYPE}`);
                formdata.append("app_ver", `${APP_VERSION}`);
                formdata.append("page", num);
                formdata.append("search_value", searchTerms);
                formdata.append("registration_date", (searchDate == "" ? "" : moment(searchDate).format("DD-MM-YYYY")));
                formdata.append("status", 1);
                formdata.append("tsoId", selectedTSOIds);
                console.log("TSO ID Loadmore-> ", selectedTSOIds);
                fetch(`${BASE_URL}/registration-approval`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'accesstoken': `${AccessToken}`,
                        'Useraccesstoken': JSON.parse(decryptData).token
                    },
                    body: formdata
                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        console.log("Approval:", responseJson);
                        if (responseJson.bstatus == 1) {
                            setLoading(false);
                            setTotalPage(responseJson.total_pages);
                            setPageNumber(num);
                            if (responseJson.influncers.length > 0) {
                                const newIds = responseJson.influncers.map(influencer => influencer.id);
                                setMemberId(prevIds => [...prevIds, ...newIds]);
                            }
                            let newArrya = approvalList.concat(responseJson.influncers);
                            setApprovalList(newArrya);
                        } else {
                            setLoading(false);
                            setPageNumber(1);
                            setApprovalList([]);
                        }
                    })
                    .catch((error) => {
                        setLoading(false);
                        //console.log("Rewards Error:", error);
                        Toast.show(t("Sorry! Somthing went Wrong. Maybe Network request Failed"));
                    });
            } else {
                setLoading(false);
                AsyncStorage.clear();
                navigation.navigate('Intro');
            }
        });
    };


    const getProfileData = () => {
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                var CryptoJS = require("crypto-js");
                const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(CryptoJS.enc.Utf8);
                let formdata = new FormData();
                formdata.append("os_type", `${OS_TYPE}`);
                formdata.append("app_ver", `${APP_VERSION}`);
                fetch(`${BASE_URL}/view-profile`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'accesstoken': `${AccessToken}`,
                        'Useraccesstoken': JSON.parse(decryptData).token
                    },
                    body: formdata
                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        setLoading(false);
                        console.log("profile:", responseJson);
                        setContactHier(responseJson?.profile?.contactHier);
                        if (responseJson.bstatus == 1) {
                            //  Events.publish('profileData', responseJson);
                            //  setProfileData(responseJson.profile);
                            //setPoints(responseJson.available_point);
                        }
                    })
                    .catch((error) => {
                        setLoading(false);
                        //console.log("Error:", error);
                        Toast.show({ description: t("Sorry! Somthing went Wrong. Maybe Network request Failed") });
                    });
            } else {
                setLoading(false);
                AsyncStorage.clear();
                navigation.replace('Intro');
            }
        });
    }

    const fetchTSOMembers = async () => {
        try {
            setShowDropdown(true);
            const val = await AsyncStorage.getItem('userToken');
            if (val != null) {
                const CryptoJS = require("crypto-js");
                const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(CryptoJS.enc.Utf8);

                let formdata = new FormData();
                formdata.append("os_type", OS_TYPE);
                formdata.append("app_ver", APP_VERSION);

                const response = await fetch(`${BASE_URL}/get-tso`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'accesstoken': AccessToken,
                        'Useraccesstoken': JSON.parse(decryptData).token
                    },
                    body: formdata
                });

                const result = await response.json();
                console.log("TSO list:", result);


                const tsoDetails = result?.details;

                if (result.bstatus === 1 && Array.isArray(tsoDetails)) {
                    setTsoList(tsoDetails);
                } else {
                    setTsoList([]);
                    // Toast.show("No TSO members found");
                    if (result.msg_code === "msg_0046") {
                        await AsyncStorage.clear();
                        navigation.replace('Intro');
                    }
                }
            }
        } catch (err) {
            console.error(err);
            setTsoList([]); // prevent null reference
            Toast.show("Error loading TSO members");
        }
    };

    const onSearch = () => {
        setLoading(true);
        getAllData(searchDate, filterStatus);
        setPageNumber(1);
    }

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        hideDatePicker();
        setLoading(true);
        getAllData(date, filterStatus);
        setIsReset(true);
    };

    const handleTSOSelect = (name, id = null) => {
        //console.log("Selected name:", name, "Selected ID:", id);
        setSelectedTSO(name);
        setShowDropdown(false);

        if (name === "") {
            setSelectedTSOIds('');
        } else {
            setSelectedTSOIds(id);
        }
    };

    useEffect(() => {
        if (selectedTSOIds !== undefined) {
            //console.log("TSO ID (useEffect):", selectedTSOIds);
            getAllData("", "");
        }
    }, [selectedTSOIds]);



    const onReset = () => {
        setLoading(true);
        getAllData("", "");
        setIsReset(false);
    }
    useEffect(() => {
        console.log("Updated MemberID:", memberId);
    }, [memberId]);

    const onMore = (itemValue) => {
        console.log(itemValue);
        navigation.navigate("RedemptionDetails", { details: itemValue, memberId: itemValue.id });
    };


    return (
        <NativeBaseProvider>
            <StatusBar barStyle="dark-content" backgroundColor={lightColor} />
            <VStack flex={1} backgroundColor={"#000000"}>
                <HeaderComponents component={route.params.pageTitle} navigation={navigation} />
                <ScrollView backgroundColor={lightColor} borderTopLeftRadius={12} borderTopRightRadius={12} width={'94%'} alignSelf="center">
                    <VStack space={5} padding={6}>
                        <View>
                            {/* Search Bar + Buttons */}
                            <View style={MainStyle.inputbox}>
                                <HStack alignItems="center">
                                    <Input
                                        flex={1}
                                        fontFamily={fontRegular}
                                        size="sm"
                                        variant="unstyled"
                                        placeholder="Name / Mobile / Member ID"
                                        onChangeText={(text) => setSearchTerms(text)}
                                        InputLeftElement={
                                            <Icon
                                                name="search-outline"
                                                size={12}
                                                color={darkGrey}
                                                style={{ marginLeft: 10 }}
                                            />
                                        }
                                    />

                                    <Button
                                        size="xs"
                                        style={[MainStyle.solidbtn, { backgroundColor: baseColor, height: 37, marginRight: 4 }]}
                                        onPress={onSearch}
                                    >
                                        <Text color={lightColor} fontFamily={fontSemiBold} fontSize="xs">
                                            {t("Search")}
                                        </Text>
                                    </Button>
                                    {["TTO", "STH"].includes(contactHier?.trim?.()) ? (
                                        <Button
                                            size="xs"
                                            onPress={() => {
                                                fetchTSOMembers();
                                                setShowDropdown(true);
                                            }}
                                            style={[MainStyle.solidbtn, {
                                                backgroundColor: baseColor,
                                                height: 37,
                                                marginRight: 4
                                            }]}
                                            leftIcon={<Icon name="options-outline" size={18} color={lightColor} />}
                                        />
                                    ) : (
                                        <Button
                                            size="xs"
                                            onPress={onReset}
                                            style={[MainStyle.solidbtn, {
                                                backgroundColor: baseColor,
                                                height: 37,
                                                marginRight: 4
                                            }]}
                                            leftIcon={<Icon name="refresh-outline" size={18} color={lightColor} />}
                                        />
                                    )}

                                </HStack>
                            </View>
                            {showDropdown && (
                                <View>
                                    <Text style={[MainStyle.lable, { marginTop: 18, marginLeft: 5, fontWeight: 'bold' }]} fontSize="xs">
                                        {t('Select Your TSO')} <Text color={dangerColor}></Text>
                                    </Text>

                                    <View style={MainStyle.inputbox}>
                                        <Select
                                            variant="unstyled"
                                            size="md"
                                            height={43}
                                            selectedValue={selectedTSO}
                                            onValueChange={value => handleTSOSelect(value)}
                                            placeholder={t('All')}
                                            style={{ paddingLeft: 15 }}
                                            fontFamily={fontRegular}
                                            dropdownCloseIcon={
                                                <Icon
                                                    name="chevron-down-outline"
                                                    style={{ marginRight: 10 }}
                                                    size={20}
                                                />
                                            }
                                            dropdownOpenIcon={
                                                <Icon
                                                    name="chevron-up-outline"
                                                    style={{ marginRight: 10 }}
                                                    size={20}
                                                />
                                            }
                                            _selectedItem={{
                                                backgroundColor: greyColor,
                                                endIcon: (
                                                    <Icon
                                                        name="checkmark-circle"
                                                        size={20}
                                                        color={successColor}
                                                        style={{ right: 0, position: 'absolute' }}
                                                    />
                                                ),
                                            }}
                                        >
                                            <Select.Item label="All" value=""/>
                                            {tsoList.length > 0 ? (
                                                tsoList.map((tso, index) => (
                                                    <Select.Item
                                                        key={index}
                                                        label={tso.name}
                                                        value={tso.name}
                                                        onPress={() => handleTSOSelect(tso.name, tso.id)}
                                                    />
                                                ))
                                            ) : (
                                                <Select.Item label="No TSO Found" value="" isDisabled />
                                            )}
                                        </Select>
                                    </View>
                                </View>
                            )}

                        </View>

                        {approvalList.length == 0 && (
                            <VStack space={6} backgroundColor={lightColor} borderRadius={8} overflow="hidden" height={300} justifyContent="center" alignItems="center">
                                <Image source={require('../assets/images/hour.gif')} alt="hours" style={{ width: 100, height: 100, resizeMode: 'contain', position: 'relative' }} />
                                <Text color={darkColor} fontSize="lg" fontFamily={fontBold}>{t("Sorry! No Data Found")}</Text>
                            </VStack>
                        )}
                        {approvalList.map((item, index) =>
                            <Stack key={index} backgroundColor={baseLightColor} borderRadius={8} overflow="hidden" borderColor={item.is_approved == "0" ? "#FBC711" : item.is_approved == "2" ? "#F21515" : "#447A50"} borderLeftWidth={3}>
                                <HStack space={6} padding={4} paddingBottom={6} alignItems="center">
                                    <Avatar borderColor={baseSemiColor} resizeMode="contain" borderWidth="2" size="60" source={item.profile_image == "" ? require('../assets/images/avatar.png') : { uri: item.profile_image }}></Avatar>
                                    <VStack justifyContent="center" width={'70%'}>
                                        <Text color="#111111" fontSize="md" fontFamily={fontBold} textTransform="capitalize">{item.name}</Text>
                                        <HStack space={2} alignItems="center">
                                            <Text color={darkGrey} fontSize="10" fontFamily={fontSemiBold}>{t("Member Id")}:</Text>
                                            <Text color={darkGrey} fontSize="xs" fontFamily={fontBold}>{item.emp_id}</Text>
                                        </HStack>
                                        <HStack space={2} alignItems="center">
                                            <Text color={darkGrey} fontSize="10" fontFamily={fontSemiBold}>{t("Contact No.")}:</Text>
                                            <Pressable onPress={() => Linking.openURL(`tel:${item.ph_number}`)}>
                                                <Text color={darkGrey} fontSize="xs" fontFamily={fontBold}> {item.ph_number}</Text>
                                            </Pressable>
                                        </HStack>
                                        <HStack space={2} alignItems="center">
                                            <Text color={darkGrey} fontSize="10" fontFamily={fontSemiBold}>{t("Total Points")}:</Text>
                                            <Text color={darkGrey} fontSize="xs" fontFamily={fontBold}>{item.total_point}</Text>
                                        </HStack>
                                        <HStack space={2} alignItems="center">
                                            <Text color={darkGrey} fontSize="10" fontFamily={fontSemiBold}>{t("Redeemed Points")}:</Text>
                                            <Text color={darkGrey} fontSize="xs" fontFamily={fontBold}>{item.redeemed_point}</Text>
                                        </HStack>
                                        <HStack space={2} alignItems="center">
                                            <Text color={darkGrey} fontSize="10" fontFamily={fontSemiBold}>{t("Available Points")}:</Text>
                                            <Text color={darkGrey} fontSize="xs" fontFamily={fontBold}>{item.available_point}</Text>
                                        </HStack>
                                        <HStack space={2} alignItems="center">
                                            <Text color={darkGrey} fontSize="10" fontFamily={fontSemiBold}>{t("status")}:</Text>
                                            <Text color={item.is_approved == "0" ? "#FBC711" : item.is_approved == "2" ? "#F21515" : "#447A50"} fontSize="xs" fontFamily={fontBold}> {item.is_approved == "0" ? "Pending" : item.is_approved == "2" ? "Rejected" : "Approved"}</Text>
                                        </HStack>
                                    </VStack>
                                    <View style={{ position: 'absolute', bottom: 8, right: 15, borderBottomWidth: 1, borderColor: baseColor }}>
                                        <Pressable onPress={() => onMore(item)}><Text textAlign="right" color={baseColor} fontSize="xs" fontFamily={fontSemiBold}>{t("Redemption Details")}</Text></Pressable>
                                    </View>
                                </HStack>
                            </Stack>
                        )}
                        {pageNumber < totalPage && (
                            <HStack paddingY="3" paddingX="6" justifyContent="center">
                                <Button variant="outline" size={'xs'} rounded={30} onPress={() => loadMore()}>
                                    <Text color="#bbbbbb">{t("Load More")}</Text>
                                </Button>
                            </HStack>
                        )}
                    </VStack>
                </ScrollView>
                <FooterComponents navigation={navigation} component={userType} />
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

export default RedemptionStatusScreen;