import React, { useState, useEffect, useRef } from "react";
import { GlobalContainer } from "../../styles/GlobalContainer";
import {
    StyleSheet,
    ScrollView,
    Text,
    CheckBox,
    View,
    FlatList,
    TouchableOpacity,
    Picker,
} from "react-native";
import {
    HighlightedCard,
    CardBody,
    CardHeader,
    InputContainer,
    IconContainer,
    EmailInput,
    ZipInputContainer,
    CheckBoxContainer,
    ButtonPaymentConfirm,
} from './styles';
import { BookingFooter } from "../../components/BookingFooter";
import { IconInput } from './InputIcon';
import GlobalButton from "../../styles/GlobalButton";

import NavigationNames from "../../navigations/NavigationNames";
import { useNavigation } from "@react-navigation/native";

export const CardComponent: React.FC<{}> = props => {
    const navigation = useNavigation();
    return (
        <ScrollView>
            <HighlightedCard>
                <CardBody>
                    <CardHeader>
                        <Text style={styles.DepositText}>Deposit Payment Information</Text>
                        <Text style={styles.ProcessText}>Processed By Stripe</Text>
                    </CardHeader>
                    <EmailInput>
                        <IconInput Inputwidth={200} iconName={'email'} placeholderName='stephen@marvel.com' />
                    </EmailInput>

                    <InputContainer>
                        <IconInput Inputwidth={200} iconName={'card'} placeholderName='Card Number' />
                        <IconContainer style={styles.iconContainer}>
                            <IconInput Inputwidth={100} iconName={'date'} Type={'date'} />
                            <IconInput Inputwidth={100} iconName={'lock'} placeholderName='CVC' />
                        </IconContainer>
                        <ZipInputContainer>
                            <IconInput Inputwidth={100} iconName={'zip'} placeholderName='ZIP' />
                        </ZipInputContainer>
                        <CheckBoxContainer>
                            <CheckBox />
                            <Text style={styles.ZipInput}>Remember payment info</Text>
                        </CheckBoxContainer>
                        <ButtonPaymentConfirm>
                            <GlobalButton Flag={'ArrowTrue'} onPress={() => navigation.navigate('PaymentSuccessScreen')} buttonText={"Pay & Confirm"} marginTop={20} />
                        </ButtonPaymentConfirm>
                    </InputContainer>
                </CardBody>
            </HighlightedCard>
            <BookingFooter></BookingFooter>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    DepositText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#333333',
    },
    ProcessText: {
        fontSize: 15,
        color: '#4d4d4d',
    },
    ZipInput: {
        color: '#999999',
    }
});
