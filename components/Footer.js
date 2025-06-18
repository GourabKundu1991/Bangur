import { Badge, Box, HStack, Stack, Text, VStack } from 'native-base';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { ImageBackground, Pressable, TouchableOpacity } from 'react-native';
import { baseColor, fontRegular, fontSemiBold, greyColor, lightColor, lightGrey } from '../assets/MainStyle';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FooterComponents = ({ navigation, component, cartcount, canredeem }) => {

    const { t } = useTranslation();

    return (
        <Stack>
            {component == "TSO" && (
                <HStack backgroundColor={lightColor} alignItems="center" justifyContent="space-between" borderTopLeftRadius={15} borderTopRightRadius={15}>
                    <HStack width="50%" backgroundColor={baseColor} alignItems="center" justifyContent="space-evenly" paddingX="5" paddingY="4" borderTopLeftRadius={15} borderTopRightRadius={45} paddingRight={8}>
                        <TouchableOpacity onPress={() => navigation.navigate('RegisterMember', { pageTitle: "Register Member" })}>
                            <VStack alignItems="center">
                                <Icon name="person-add-outline" size={24} color={lightColor} />
                                <Text color={lightColor} fontSize="8" fontFamily={fontRegular}>{t("Register Member")}</Text>
                            </VStack>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('ViewMember', { pageTitle: "View Member" })}>
                            <VStack alignItems="center">
                                <Icon name="people-outline" size={24} color={lightColor} />
                                <Text color={lightColor} fontSize="8" fontFamily={fontRegular}>{t("View Member")}</Text>
                            </VStack>
                        </TouchableOpacity>
                    </HStack>
                    <HStack width="50%" backgroundColor={baseColor} alignItems="center" justifyContent="space-evenly" paddingX="5" paddingY="4" borderTopLeftRadius={45} borderTopRightRadius={15} paddingLeft={8}>
                        <TouchableOpacity onPress={() => navigation.navigate('TransactionApprovals', { pageTitle: "Transaction Approvals" })}>
                            <VStack alignItems="center">
                                <Icon name="bag-check-outline" size={24} color={lightColor} />
                                <Text color={lightColor} fontSize="8" fontFamily={fontRegular}>{t("Trans. Approval")}</Text>
                            </VStack>
                        </TouchableOpacity>
                        {/* <TouchableOpacity onPress={() => navigation.navigate('AllocateLifting', { pageTitle: "Allocate Lifting" })}>
                            <VStack alignItems="center">
                                <Icon name="bag-add-outline" size={24} color={lightColor} />
                                <Text color={lightColor} fontSize="8" fontFamily={fontRegular}>{t("Allocate Lifting")}</Text>
                            </VStack>
                        </TouchableOpacity> */}
                        <TouchableOpacity onPress={() => navigation.navigate('ViewTransaction', { pageTitle: "View Transaction" })}>
                            <VStack alignItems="center">
                                <Icon name="reader-outline" size={24} color={lightColor} />
                                <Text color={lightColor} fontSize="8" fontFamily={fontRegular}>{t("View Trans.")}</Text>
                            </VStack>
                        </TouchableOpacity>
                    </HStack>
                    <Pressable onPress={() => navigation.replace('Home')} backgroundColor={baseColor} style={{ position: 'absolute', top: -5, left: '44%', padding: 8, borderRadius: 30, borderColor: greyColor, borderWidth: 5 }}>
                        <Icon name="home-outline" size={20} color={lightColor} />
                    </Pressable>
                </HStack>
            )}
            {component == "Influencer" && (
                <HStack backgroundColor={lightColor} alignItems="center" justifyContent="space-between" borderTopLeftRadius={15} borderTopRightRadius={15}>
                    <HStack width="50%" backgroundColor={baseColor} alignItems="center" justifyContent="space-evenly" paddingX="5" paddingY="4" borderTopLeftRadius={15} borderTopRightRadius={45} paddingRight={8}>
                        <TouchableOpacity onPress={() => navigation.navigate('AddPurchase', { pageTitle: "Add Purchase" })}>
                            <VStack alignItems="center">
                                <Icon name="bag-add-outline" size={24} color={lightColor} />
                                <Text color={lightColor} fontSize="8" fontFamily={fontRegular}>{t("Add Purchase")}</Text>
                            </VStack>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Transaction', { pageTitle: "Transaction" })}>
                            <VStack alignItems="center">
                                <Icon name="repeat-outline" size={24} color={lightColor} />
                                <Text color={lightColor} fontSize="8" fontFamily={fontRegular}>{t("Transaction")}</Text>
                            </VStack>
                        </TouchableOpacity>
                    </HStack>
                    <HStack width="50%" backgroundColor={baseColor} alignItems="center" justifyContent="space-evenly" paddingX="5" paddingY="4" borderTopLeftRadius={45} borderTopRightRadius={15} paddingLeft={8}>
                        <TouchableOpacity onPress={() => navigation.navigate('MyPoints', { pageTitle: "My Points" })}>
                            <VStack alignItems="center">
                                <Icon name="sparkles-outline" size={24} color={lightColor} />
                                <Text color={lightColor} fontSize="8" fontFamily={fontRegular}>{t("My Points")}</Text>
                            </VStack>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('MyCart', { pageTitle: "My Cart" })}>
                            <VStack alignItems="center">
                                <Box position="relative" alignItems="center">
                                    <Icon name="cart-outline" size={24} color={lightColor} />
                                    {cartcount > 0 && (
                                        <Badge
                                            colorScheme="red"
                                            rounded="full"
                                            variant="solid"
                                            position="absolute"
                                            top="-4px"
                                            right="-4px"
                                            zIndex={1}
                                            minWidth="16px"
                                            // height="16px"
                                            alignItems="center"
                                            justifyContent="center"
                                            _text={{
                                                fontSize: "10px",
                                                color: "white",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            {cartcount}
                                        </Badge>
                                    )}
                                </Box>
                                <Text color={lightColor} fontSize="8" fontFamily={fontRegular}>{t("My Cart")} {canredeem}</Text>
                            </VStack>
                        </TouchableOpacity>
                        {/* <TouchableOpacity onPress={() => navigation.navigate('MyProfile', { pageTitle: "My Profile" })}>
                            <VStack alignItems="center">
                                <Icon name="person-outline" size={24} color={lightColor} />
                                <Text color={lightColor} fontSize="8" fontFamily={fontRegular}>{t("My Profile")}</Text>
                            </VStack>
                        </TouchableOpacity> */}
                    </HStack>
                    <Pressable onPress={() => navigation.replace('Home')} backgroundColor={baseColor} style={{ position: 'absolute', top: -5, left: '44%', padding: 8, borderRadius: 30, borderColor: greyColor, borderWidth: 5 }}>
                        <Icon name="home-outline" size={20} color={lightColor} />
                    </Pressable>
                </HStack>
            )}
            {component == "Dealer" && (
                <HStack backgroundColor={lightColor} alignItems="center" justifyContent="space-between" borderTopLeftRadius={15} borderTopRightRadius={15}>
                    <HStack width="50%" backgroundColor={baseColor} alignItems="center" justifyContent="space-evenly" paddingX="5" paddingY="4" borderTopLeftRadius={15} borderTopRightRadius={45} paddingRight={8}>
                        <TouchableOpacity onPress={() => navigation.navigate('ViewMember', { pageTitle: "My Contrators" })}>
                            <VStack alignItems="center">
                                <Icon name="people-outline" size={24} color={lightColor} />
                                <Text color={lightColor} fontSize="8" fontFamily={fontRegular}>{t("My Contrators")}</Text>
                            </VStack>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('AddContractors', { pageTitle: "Add Contrator" })}>
                            <VStack alignItems="center">
                                <Icon name="person-add-outline" size={24} color={lightColor} />
                                <Text color={lightColor} fontSize="8" fontFamily={fontRegular}>{t("Add Contarctor")}</Text>
                            </VStack>
                        </TouchableOpacity>
                    </HStack>
                    <HStack width="50%" backgroundColor={baseColor} alignItems="center" justifyContent="space-evenly" paddingX="5" paddingY="4" borderTopLeftRadius={45} borderTopRightRadius={15} paddingLeft={8}>
                        <TouchableOpacity onPress={() => navigation.navigate('ViewTransaction', { pageTitle: "View Transaction" })}>
                            <VStack alignItems="center">
                                <Icon name="reader-outline" size={24} color={lightColor} />
                                <Text color={lightColor} fontSize="8" fontFamily={fontRegular}>{t("View Trans.")}</Text>
                            </VStack>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('AllocateLifting', { pageTitle: "Allocate Lifting" })}>
                            <VStack alignItems="center">
                                <Icon name="bag-add-outline" size={24} color={lightColor} />
                                <Text color={lightColor} fontSize="8" fontFamily={fontRegular}>{t("Allocate Lifting")}</Text>
                            </VStack>
                        </TouchableOpacity>
                    </HStack>
                    <Pressable onPress={() => navigation.replace('Home')} backgroundColor={baseColor} style={{ position: 'absolute', top: -5, left: '44%', padding: 8, borderRadius: 30, borderColor: greyColor, borderWidth: 5 }}>
                        <Icon name="home-outline" size={20} color={lightColor} />
                    </Pressable>
                </HStack>
            )}
            {(component == "TTO" || component == "STH") && (
                <HStack backgroundColor={lightColor} alignItems="center" justifyContent="space-between" borderTopLeftRadius={15} borderTopRightRadius={15}>
                    <HStack width="50%" backgroundColor={baseColor} alignItems="center" justifyContent="space-evenly" paddingX="5" paddingY="4" borderTopLeftRadius={15} borderTopRightRadius={45} paddingRight={8}>
                        <TouchableOpacity onPress={() => navigation.navigate('RegistrationApprovals', { pageTitle: "Registration Approvals" })}>
                            <VStack alignItems="center">
                                <Icon name="shield-checkmark-outline" size={24} color={lightColor} />
                                <Text color={lightColor} fontSize="8" fontFamily={fontRegular}>{t("Regist. Approvals")}</Text>
                            </VStack>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('ViewMember', { pageTitle: "View Member" })}>
                            <VStack alignItems="center">
                                <Icon name="people-outline" size={24} color={lightColor} />
                                <Text color={lightColor} fontSize="8" fontFamily={fontRegular}>{t("View Member")}</Text>
                            </VStack>
                        </TouchableOpacity>
                    </HStack>
                    <HStack width="50%" backgroundColor={baseColor} alignItems="center" justifyContent="space-evenly" paddingX="5" paddingY="4" borderTopLeftRadius={45} borderTopRightRadius={15} paddingLeft={8}>
                        <TouchableOpacity onPress={() => navigation.navigate('TransactionApprovals', { pageTitle: "Transaction Approvals" })}>
                            <VStack alignItems="center">
                                <Icon name="bag-check-outline" size={24} color={lightColor} />
                                <Text color={lightColor} fontSize="8" fontFamily={fontRegular}>{t("Trans. Approval")}</Text>
                            </VStack>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('ViewTransaction', { pageTitle: "View Transaction" })}>
                            <VStack alignItems="center">
                                <Icon name="reader-outline" size={24} color={lightColor} />
                                <Text color={lightColor} fontSize="8" fontFamily={fontRegular}>{t("View Trans.")}</Text>
                            </VStack>
                        </TouchableOpacity>
                    </HStack>
                    <Pressable onPress={() => navigation.replace('Home')} backgroundColor={baseColor} style={{ position: 'absolute', top: -5, left: '44%', padding: 8, borderRadius: 30, borderColor: greyColor, borderWidth: 5 }}>
                        <Icon name="home-outline" size={20} color={lightColor} />
                    </Pressable>
                </HStack>
            )}
        </Stack>
    );
}

export default FooterComponents;