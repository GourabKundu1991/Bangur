import AsyncStorage from '@react-native-async-storage/async-storage';
import { Box, HStack, NativeBaseProvider, Text, VStack, Toast, Stack, Actionsheet, useDisclose, Select, Button, Slider } from 'native-base';
import React, { useCallback, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { ActivityIndicator, Alert, FlatList, Image, ImageBackground, Pressable, ScrollView, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import { AccessToken, API_KEY, BASE_URL, CONTACT_HIER_ID, ORG_ID, PROGRAM_ID, secretKey } from '../auth_provider/Config';
import RangeSlider from 'react-native-range-slider-expo/src/RangeSlider';
import { useTranslation } from 'react-i18next';
import HeaderComponents from '../components/Header';
import FooterComponents from '../components/Footer';
import { baseColor, dangerColor, darkColor, fontRegular, fontSemiBold, greyColor, lightColor, MainStyle, successColor, warningColor } from '../assets/MainStyle';

const RewardsStoreScreen = ({ navigation, route }) => {

    const { t } = useTranslation();
    const [loading, setLoading] = React.useState(false);
    const [currentLanguage, setLanguage] = React.useState('Eng');

    const [dataFound, setDataFound] = React.useState("");

    const [pageNumber, setPageNumber] = React.useState(1);
    const [isLoadMore, setIsLoadMore] = React.useState(true);
    const [allProducts, setAllProducts] = React.useState([]);
    const [inCart, setInCart] = React.useState("");
    const [allCategory, setAllCategory] = React.useState([]);

    const [cateId, setCateId] = React.useState(0);
    const [sortBy, setSortBy] = React.useState("");

    const { isOpen, onOpen, onClose } = useDisclose();
    const [pointRange, setPointRange] = React.useState("");
    const [fromValue, setFromValue] = React.useState("");
    const [toValue, setToValue] = React.useState("");

    const [userType, setUserType] = React.useState("");
    const [cartcount, setCartCount] = React.useState("");

    const [imageBase, setImageBase] = React.useState("");
    const [availablePoint, setAvailablePoint] = React.useState("");
    const [filtervalue, setFilterValue] = React.useState("");
    const [filteration, setFiltertion] = React.useState(false);

    const [canRedeem, setCanRedeem] = React.useState(0);
    const [canSubmitKYC, setCanSubmitKYC] = React.useState(0);
    const [canSubmitKYCText, setCanSubmitKYCText] = React.useState("");

    const [loadMoreShow, setLoadMoreShow] = React.useState(0);


    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setLoading(true);
            AsyncStorage.getItem('language').then(val => {
                if (val != null) {
                    setLanguage(val);
                    i18n
                        .changeLanguage(val)
                        .then(() => console.log(val))
                        .catch(err => console.log(err));
                }
            });
            AsyncStorage.getItem('filterData').then(valFilt => {
                if (valFilt != null) {
                    const value = JSON.parse(valFilt);
                    setCateId(value.selectedCat);
                    setSortBy(value.sortBy);
                    setFromValue(value.fromValue);
                    setToValue(value.toValue);
                    getAllData(value.selectedCat, value.sortBy, value.fromValue, value.toValue);
                    setFiltertion(true);
                } else {
                    getAllData(cateId, sortBy, fromValue, toValue);
                }
            })
        });
        return unsubscribe;
    }, []);

    const getAllData = (cate_Id, sort_By, from_Value, to_Value) => {
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {

                var CryptoJS = require("crypto-js");
                const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(CryptoJS.enc.Utf8);
                setUserType(JSON.parse(decryptData).user_type);

                let formdata = new FormData();
                formdata.append("pageNumber", 1);
                formdata.append("categoryId", cate_Id);
                formdata.append("min", from_Value);
                formdata.append("max", to_Value);
                formdata.append("sort", sort_By);
                formdata.append("sort_by", "price");
                fetch(`${BASE_URL}/catalog/products`, {
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
                        console.log("Rewards:", responseJson);
                        setCanRedeem(responseJson.can_redeem);
                        setCanSubmitKYC(responseJson.can_submit_kyc);
                        setCanSubmitKYCText(responseJson.can_submit_kyc_text);
                        if (responseJson.status == 'success') {
                            countCart();
                            setAllProducts(responseJson.products);
                            setAllCategory(responseJson.categories);
                            setPointRange(responseJson.minMax);
                            setImageBase(responseJson.BaseUrl);
                            setAvailablePoint(responseJson.available_point);
                            setLoadMoreShow(responseJson.more);
                            setDataFound("found");
                            if (fromValue == "") {
                                setFromValue(responseJson.minMax.min);
                            }
                            if (toValue == "") {
                                setToValue(responseJson.minMax.max);
                            }
                        } else {
                            Toast.show({ description: responseJson.message });
                            setAllProducts([]);
                            setDataFound("notfound");
                            setTimeout(function () {
                                setLoading(false);
                                if (responseJson.msg_code == "msg_1000") {
                                    AsyncStorage.clear();
                                    navigation.navigate('Intro');
                                }
                            }, 1000);
                        }
                    })
                    .catch((error) => {
                        setLoading(false);
                        //console.log("Rewards Error:", error);
                        Toast.show({ description: t("Sorry! Somthing went Wrong. Maybe Network request Failed") });
                    });
            } else {
                setLoading(false);
                AsyncStorage.clear();
                navigation.navigate('Intro');
            }
        });
    }

    const countCart = () => {
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                var CryptoJS = require("crypto-js");
                const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(CryptoJS.enc.Utf8);

                fetch(`${BASE_URL}/cart/count`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'accesstoken': `${AccessToken}`,
                        'Useraccesstoken': JSON.parse(decryptData).token
                    },

                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        setLoading(false);
                        console.log("cartCount:", responseJson);
                        setCartCount(responseJson.cart_count);
                    })
                    .catch((error) => {
                        setLoading(false);
                        console.log("Error:", error);

                    });
            } else {
                setLoading(false);
                AsyncStorage.clear();
                navigation.navigate('Intro');
            }
        });
    }

    const openFilter = (type) => {
        setFilterValue(type)
        onOpen();
    }

    const onApply = () => {
        setLoading(true);
        onClose();
        getAllData(cateId, sortBy, fromValue, toValue);
        const filterData = {
            sortBy: sortBy,
            fromValue: fromValue,
            toValue: toValue,
            selectedCat: cateId,
        };
        AsyncStorage.setItem('filterData', JSON.stringify(filterData));
        setFiltertion(true);
    }

    const onClear = () => {
        setLoading(true);
        onClose();
        setPageNumber(1);
        setIsLoadMore(true);
        if (filtervalue == "Category") {
            setCateId(0);
            getAllData(0, sortBy, fromValue, toValue);
        } else if (filtervalue == "Sort") {
            setSortBy("");
            getAllData(cateId, "", fromValue, toValue);
        } else if (filtervalue == "Points") {
            setFromValue(pointRange.min);
            setToValue(pointRange.max);
            getAllData(cateId, sortBy, pointRange.min, pointRange.max);
        }
    }

    const AddToCard = (prod_idd, price_in_pointss, prod_namee) => {
        setLoading(true);
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                var CryptoJS = require("crypto-js");
                const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(CryptoJS.enc.Utf8);

                const formdata = new FormData();
                formdata.append("prod_id", prod_idd);
                formdata.append("price_in_points", price_in_pointss);
                formdata.append("prod_name", prod_namee);
                formdata.append("quantity", 1);

                fetch(`${BASE_URL}/cart/add`, {
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
                        Toast.show({ description: t(responseJson.message) });
                        if (responseJson.bstatus == 1) {
                            countCart();
                        } else {
                            setLoading(false);
                        }
                    })
                    .catch((error) => {
                        setLoading(false);
                        console.log("Error:", error);

                    });
            } else {
                setLoading(false);
                AsyncStorage.clear();
                navigation.navigate('Intro');
            }
        });
    };

    const renderProduct = ({ item, index }) => {
        return (
            <VStack key={index} style={styles.productbox}>
                <TouchableOpacity onPress={() => AddToCard(item.productId, item.pricePoints, item.productName)} style={{ position: 'absolute', bottom: 5, right: 5, zIndex: 99 }} >
                    <Icon name="add-circle-outline" size={28} color="#808080" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("ProductDetails", {
                    detaildata: item.ProductDesc,
                    productname: item.productName,
                    productID: item.productId,
                    pricePoints: item.pricePoints,
                    pricePoint: item.pricePoints,
                    availablepoint: availablePoint,
                    productimage: imageBase + item.ProductImage,
                    productParams: item.ProductParams
                }
                )}>
                    <Box style={styles.productimage}>
                        <Image source={{ uri: imageBase + item.ProductImage }} style={{ width: 100, height: 90 }} resizeMode='contain' />
                    </Box>
                    <Text fontSize='sm' mb="2">{item.productName.substring(0, 30)}</Text>
                    <Text fontWeight="bold" fontSize='md' color={darkColor}>{item.pricePoints} {t("points")}</Text>
                    <Text style={{ textDecorationLine: 'underline' }} fontSize='xs' color={baseColor}>{t("View Details")}</Text>
                </TouchableOpacity>
            </VStack>
        );
    }

    const loadMore = () => {
        let num = pageNumber + 1;
        console.log(num);
        setLoading(true);
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {

                var CryptoJS = require("crypto-js");
                const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(CryptoJS.enc.Utf8);

                let formdata = new FormData();
                formdata.append("pageNumber", num);
                formdata.append("categoryId", cateId);
                formdata.append("min", fromValue);
                formdata.append("max", toValue);
                formdata.append("sort", sortBy);
                formdata.append("sort_by", "price");
                fetch(`${BASE_URL}/catalog/products`, {
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
                        console.log("jegjhgwergewjr", responseJson);
                        setLoadMoreShow(responseJson.more);
                        if (responseJson.status == 'success') {
                            setLoading(false);
                            let newArrya = allProducts.concat(responseJson.products);
                            setAllProducts(newArrya);
                            setPageNumber(num);
                        } else {
                            setLoading(false);
                            setIsLoadMore(false);
                            setPageNumber(1);
                        }
                    })
                    .catch((error) => {
                        setLoading(false);
                        //console.log("Rewards Error:", error);
                        Toast.show({ description: t("Sorry! Somthing went Wrong. Maybe Network request Failed") });
                    });
            } else {
                setLoading(false);
                AsyncStorage.clear();
                navigation.navigate('Intro');
            }
        });
    };

    const onClearAllFilter = () => {
        setLoading(true);
        setCateId(0);
        setSortBy("");
        setFromValue(pointRange.min);
        setToValue(pointRange.max);
        getAllData(0, "", pointRange.min, pointRange.max);
        setFiltertion(false);
        AsyncStorage.removeItem('filterData');
    }

    return (
        <NativeBaseProvider>
            <StatusBar barStyle="dark-content" backgroundColor={lightColor} />
            <VStack flex={1} backgroundColor={"#000000"}>
                <HeaderComponents navigation={navigation} component={route.params.pageTitle} />
                <ScrollView backgroundColor={lightColor} borderTopLeftRadius={12} borderTopRightRadius={12} width={'94%'} alignSelf="center">
                    {filteration && (
                        <HStack flexWrap="wrap" paddingX={5} marginTop={5} space={2}>
                            <HStack style={{ backgroundColor: greyColor }} space={2} paddingX={2} paddingY={1} borderRadius={5} overflow="hidden">
                                <Text fontSize='xs' color={darkColor} fontWeight="bold">{t("Clear All Filter")}</Text>
                                <Icon onPress={() => onClearAllFilter()} name="close-outline" size={18} color={darkColor} />
                            </HStack>
                            {/* <HStack style={{ backgroundColor: greyColor }} space={2} paddingX={2} paddingY={1} borderRadius={5} overflow="hidden">
                                {allCategory.map((item, index) => (
                                    <Text fontSize='xs' key={index} color={darkColor} fontWeight="bold">{item.categoryId == cateId && (item.categoryName)}</Text>
                                ))}

                                <Icon
                                    onPress={() => {
                                        setSelectedCat("")
                                        setCategory(0);
                                    }}
                                    name="close-outline" size={18} color={darkColor} />
                            </HStack>
                            <HStack style={{ backgroundColor: greyColor }} space={2} paddingX={2} paddingY={1} borderRadius={5} overflow="hidden">
                                <View>
                                    <Text fontSize='xs' color={darkColor} >{
                                        // <Text style={MainStyle.lable} textAlign="center" fontSize="lg" >
                                        <Text fontSize='xs' color={darkColor} fontWeight="bold">
                                            {sortBy}

                                        </Text>}
                                    </Text>
                                    <TouchableOpacity onPress={() => {
                                        setLowheightonoff(false);
                                        setSoryBy("")
                                        GetAllDatarewards()
                                    }}>
                                        <Icon name="close-outline" size={18} color={darkColor} />
                                    </TouchableOpacity>
                                </View>
                            </HStack>
                            <HStack style={{ backgroundColor: greyColor }} space={2} paddingX={2} paddingY={1} borderRadius={5} overflow="hidden">
                                <View>
                                    <Text fontSize='xs' color={darkColor} >{
                                        // <Text style={MainStyle.lable} textAlign="center" fontSize="lg" >
                                        <Text fontSize='xs' color={darkColor} fontWeight="bold">
                                            {fromValue} {t("Points")} - {toValue} {t("Points")}</Text>}
                                    </Text>
                                    <TouchableOpacity onPress={() => {
                                        setPriseonoff(0);
                                        setSliderTouched(false)
                                        // getAllData()
                                        GetAllDatarewards()
                                    }}>
                                        <Icon name="close-outline" size={18} color={darkColor} />
                                    </TouchableOpacity>
                                </View>
                            </HStack> */}


                        </HStack>
                    )}
                    <Box padding="5">
                        {dataFound == "notfound" && (
                            <Stack space={5} style={[styles.productbox, { height: 350, width: '100%', marginHorizontal: 0, justifyContent: 'center', alignItems: 'center', padding: 30 }]}>
                                <Icon name="hourglass-outline" size={80} color="#999999" />
                                <Text fontSize='lg' fontWeight="bold" textAlign="center" color="#111111">{t("Result Not Found")}</Text>
                                <Text fontSize='sm' fontWeight="medium" textAlign="center" color="#666666">{t("Whoops... This Information is not available for a moment")}</Text>
                            </Stack>
                        )}
                        {dataFound == "found" && (
                            <HStack flexWrap="wrap">
                                <FlatList
                                    scrollEnabled={false}
                                    data={allProducts}
                                    renderItem={renderProduct}
                                    numColumns={2}
                                />
                            </HStack>
                        )}
                        {loadMoreShow !== 0 && (
                            <HStack paddingY="3" paddingX="6" justifyContent="center">
                                <Button variant="outline" size={'xs'} rounded={30} onPress={() => loadMore()}>
                                    <Text color="#bbbbbb">{t("Load More")}</Text>
                                </Button>
                            </HStack>
                        )}
                    </Box>
                </ScrollView>
                <HStack justifyContent="space-evenly" backgroundColor={baseColor}>
                    <Pressable onPress={() => openFilter("Category")}>
                        <HStack space={2} alignItems="center" padding={3}>
                            <Icon name="grid-outline" size={18} color={lightColor} />
                            <Text fontWeight="bold" fontSize='xs' color={lightColor}>{t("Category Type")}</Text>
                        </HStack>
                    </Pressable>
                    <Pressable onPress={() => openFilter("Sort")} style={{ borderColor: '#ffffff', borderLeftWidth: 1, borderRightWidth: 1 }}>
                        <HStack space={2} alignItems="center" padding={3}>
                            <Icon name="filter-outline" size={18} color={lightColor} />

                            <HStack space={1} alignItems="baseline">
                                <Text fontWeight="bold" fontSize='xs' color={lightColor}>{t("Sort By")}</Text>
                                <Text fontSize='10' color={lightColor}>{sortBy}</Text>

                            </HStack>
                        </HStack>
                    </Pressable>
                    <Pressable onPress={() => { openFilter("Points"); }}>
                        <HStack space={2} alignItems="center" padding={3}>
                            <Icon name="funnel-outline" size={18} color={lightColor} />
                            <Text fontWeight="bold" fontSize='xs' color={lightColor}>{t("Filter By Points")}</Text>
                        </HStack>
                    </Pressable>
                </HStack>
                <HStack justifyContent="space-between" padding={4} backgroundColor="#ffffff">
                    <Text fontWeight="bold" fontSize='md' color={darkColor}>{t("Available Points")}</Text>
                    <Text fontWeight="bold" fontSize='md' color={darkColor}>{availablePoint ? availablePoint : ""}</Text>
                </HStack>
                <FooterComponents navigation={navigation} component={userType} cartcount={cartcount} />
                <Actionsheet isOpen={isOpen} onClose={onClose}>
                    <Actionsheet.Content>
                        <ScrollView style={{ width: '100%', paddingHorizontal: 15 }}>
                            {filtervalue == "Category" && (
                                <VStack space={1} marginBottom={2}>
                                    <Text style={MainStyle.lable} fontSize="xs">{t('Category')} <Text color={dangerColor}>*</Text></Text>
                                    <View style={MainStyle.inputbox}>
                                        <Select
                                            variant="unstyled"
                                            size="md"
                                            height={43}
                                            selectedValue={cateId}
                                            onValueChange={value => setCateId(value)}
                                            style={{ paddingLeft: 15 }}
                                            placeholder={t('Select')}
                                            fontFamily={fontRegular}
                                            dropdownCloseIcon={
                                                <Icon name="chevron-down-outline" style={{ marginRight: 10 }} size={20} />
                                            }
                                            dropdownOpenIcon={
                                                <Icon name="chevron-up-outline" style={{ marginRight: 10 }} size={20} />
                                            }
                                            _selectedItem={{
                                                backgroundColor: greyColor,
                                                endIcon: (
                                                    <Icon name="checkmark-circle" size={20} color={successColor} style={{ right: 0, position: 'absolute' }} />
                                                ),
                                            }}>
                                            {allCategory.map((item, index) => (
                                                <Select.Item key={index} label={item.categoryName} value={item.categoryId} />
                                            ))}
                                        </Select>
                                    </View>
                                </VStack>
                            )}
                            {filtervalue == "Sort" && (
                                <VStack space={1} marginBottom={2}>
                                    <Text style={MainStyle.lable} fontSize="xs">{t('Sort By')} <Text color={dangerColor}>*</Text></Text>
                                    <View style={MainStyle.inputbox}>
                                        <Select
                                            variant="unstyled"
                                            size="md"
                                            height={43}
                                            selectedValue={sortBy}
                                            onValueChange={value => setSortBy(value)}
                                            style={{ paddingLeft: 15 }}
                                            placeholder={t('Select')}
                                            fontFamily={fontRegular}
                                            dropdownCloseIcon={
                                                <Icon name="chevron-down-outline" style={{ marginRight: 10 }} size={20} />
                                            }
                                            dropdownOpenIcon={
                                                <Icon name="chevron-up-outline" style={{ marginRight: 10 }} size={20} />
                                            }
                                            _selectedItem={{
                                                backgroundColor: greyColor,
                                                endIcon: (
                                                    <Icon name="checkmark-circle" size={20} color={successColor} style={{ right: 0, position: 'absolute' }} />
                                                ),
                                            }}>
                                            <Select.Item label={t("Low to High")} value="l-h" />
                                            <Select.Item label={t("High to Low")} value="h-l" />
                                        </Select>
                                    </View>
                                </VStack>
                            )}
                            {filtervalue == "Points" && (
                                <VStack space={1}>
                                    <Text textAlign="center" mt="5" fontWeight="bold">{t("Points Range")} ({fromValue} - {toValue})</Text>
                                    <HStack justifyContent="space-between" alignItems="center">
                                        <RangeSlider min={+pointRange.min} max={+pointRange.max} step={100}
                                            fromValueOnChange={(value) => setFromValue(value)}
                                            toValueOnChange={(value) => setToValue(value)}
                                            initialFromValue={+fromValue}
                                            initialToValue={+toValue}
                                            fromKnobColor={'#111111'}
                                            toKnobColor={'#111111'}
                                            knobSize={25}
                                            barHeight={8}
                                            showValueLabels={false}
                                            valueLabelsBackgroundColor='#444444'
                                            inRangeBarColor={darkColor}
                                        />
                                    </HStack>
                                </VStack>
                            )}
                        </ScrollView>
                        <HStack width="100%" paddingY="3" paddingX="6" mt={5} justifyContent="space-between">
                            <Button variant={"outline"} width='48%' borderRadius={8} overflow="hidden" onPress={() => onClear()}>
                                <Text color={baseColor} fontSize="md" fontWeight="normal">{t("Clear Filter")}</Text>
                            </Button>
                            <Button backgroundColor={baseColor} width='48%' borderRadius={8} overflow="hidden" onPress={() => onApply()}>
                                <Text color="#ffffff" fontSize="md" fontWeight="normal">{t("Apply")}</Text>
                            </Button>
                        </HStack>
                    </Actionsheet.Content>
                </Actionsheet>
            </VStack>

            {canRedeem === 1 && (
                <View style={MainStyle.spincontainer}>
                    <Stack backgroundColor="#ffffff" style={{ width: '70%', borderRadius: 10, overflow: 'hidden' }}>
                        <VStack space={1} w="100%" paddingY="10" paddingX="5" alignItems="center" justifyContent="center">
                            <Image source={require('../assets/images/logo.jpg')} style={MainStyle.logo} />
                            <Text mt={5} mb={3} fontSize="xl" fontWeight="bold" color={warningColor}>{canSubmitKYC == 0 ? t('Pending') : t('Warning')}!</Text>
                            <Text textAlign="center" fontSize="sm" fontWeight="medium" color="#111111" mb={3}>{canSubmitKYCText}</Text>
                            {canSubmitKYC == 1 && (
                                <Button
                                    size="sm"
                                    style={{
                                        backgroundColor: warningColor,
                                        width: 150,
                                        borderRadius: 8,
                                        overflow: 'hidden',
                                    }}
                                    onPress={() => navigation.navigate("UpdateKYC", { pageTitle: t("Update KYC") })}
                                    marginY={4}>
                                    <Text color="#ffffff" fontSize="sm" fontWeight="medium">
                                        {t("Update")}
                                    </Text>
                                </Button>
                            )}
                            <Button
                                size="sm"
                                style={{
                                    backgroundColor: '#111111',
                                    width: 150,
                                    borderRadius: 8,
                                    overflow: 'hidden',
                                }}
                                onPress={() => navigation.goBack()}>
                                <Text color="#ffffff" fontSize="sm" fontWeight="medium">
                                    {t('Close')}
                                </Text>
                            </Button>
                        </VStack>
                    </Stack>
                </View>
            )}


            {loading && (
                <View style={MainStyle.spincontainer}>
                    <ActivityIndicator animating={loading} size="large" color={warningColor} />
                </View>
            )}
        </NativeBaseProvider>
    );
};

const styles = StyleSheet.create({
    bgimage: { flex: 1, justifyContent: 'center' },
    solidBtn: { width: '48%', borderColor: '#111111', borderWidth: 2, backgroundColor: '#111111', borderRadius: 10 },
    outlineBtn: { width: '48%', borderColor: '#111111', borderWidth: 2, backgroundColor: 'none', borderRadius: 10 },
    inputbox: { backgroundColor: 'rgba(0,0,0,0.06)', borderRadius: 12, width: '100%', overflow: 'hidden', marginVertical: 7 },
    noti: { color: '#ffffff', width: 18, height: 18, borderRadius: 20, position: 'absolute', top: -5, right: -3, fontSize: 11, lineHeight: 18, paddingTop: 1, textAlign: 'center', overflow: 'hidden' },
    productbox: { position: 'relative', borderRadius: 15, width: '44%', marginHorizontal: '3%', marginBottom: '6%', backgroundColor: '#f6f6f6', padding: 15, borderColor: '#ffffff', borderWidth: 2, elevation: 10, shadowColor: '#666666', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.4, shadowRadius: 10, overflow: 'hidden' },
    productimage: { borderColor: '#dddddd', backgroundColor: '#ffffff', marginBottom: 10, borderWidth: 1, borderRadius: 10, width: '100%', height: 90, justifyContent: 'center', alignItems: 'center', overflow: 'hidden' },
    spincontainer: { position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)' },
});

export default RewardsStoreScreen;