import React, { useState, useEffect, useRef } from "react";
import {
    StyleSheet,
    Text,
} from "react-native";
import {Picker} from '@react-native-community/picker';
import { GlobalContainer } from "../../styles/GlobalContainer";
import {
    SelectArea,
    CategorySelect,
    LengthSelect,
    TimeContainer,
    TimeSection,
    Hours,
    MainArea,
    BottomFixedArrow,
    ButtonGoPayment,
    ScrollViewArea,
} from './styles';

import { HeaderComponent } from "../../components/header";
import { useNavigation } from "@react-navigation/native";
import CalendarStrip from 'react-native-calendar-strip';
import { Theme } from "../../theme";
import ScrollToBottom from '../../styles/ScrollToBottom';

import GlobalButton from "../../styles/GlobalButton";

import {BookingFooter} from "../../components/BookingFooter";



export const BookAppointmentScreen: React.FC<{}> = props => {
    const navigation = useNavigation();
    const BookingTimes = [
        {
            Title: 'Morning',
            Time: [
                '10:00-11:00 am',
                '10:00-11:00 am',
                '10:00-11:00 am',
                '10:00-11:00 am',
                '10:00-11:00 am',
                '10:00-11:00 am',
                '10:00-11:00 am',
                '10:00-11:00 am',
                '10:00-11:00 am',
            ],
        },
        {
            Title: 'Afternoon',
            Time: [
                '10:00-11:00 am',
                '10:00-11:00 am',
                '10:00-11:00 am',
                '10:00-11:00 am',
                '10:00-11:00 am',
                '10:00-11:00 am',
                '10:00-11:00 am',
                '10:00-11:00 am',
                '10:00-11:00 am',
            ],
        },
        {
            Title: 'Evening',
            Time: [
                '10:00-11:00 am',
                '10:00-11:00 am',
                '10:00-11:00 am',
                '10:00-11:00 am',
                '10:00-11:00 am',
                '10:00-11:00 am',
                '10:00-11:00 am',
                '10:00-11:00 am',
                '10:00-11:00 am',
            ],
        },
    ];
    const categoryList = [
        'category', 'figma', 'scatch'
    ];
    const lengthList = [
        'Length', 50, 40
    ];
    const scrollViewRef = useRef();
    const handleClick = () => {
        scrollViewRef.current.scrollToEnd({
            animated: true
        })
    };
    const [category, setCategory] = useState(categoryList[0]);
    const [length, setLength] = useState(lengthList[0]);

    return (
        <GlobalContainer>
            <HeaderComponent HideSearchKey="BookAppointment"></HeaderComponent>
            <ScrollViewArea ref={scrollViewRef} style={styles.container} showsVerticalScrollIndicator={true}>
                <SelectArea>
                    <CategorySelect>
                        <Picker style={styles.picker} selectedValue={'category'} onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}>
                            <Picker.Item label='category' value='category' />
                            <Picker.Item label='figma' value='figma' />
                            <Picker.Item label='scatch' value='scatch' />
                        </Picker>
                    </CategorySelect>
                    <LengthSelect>
                        <Picker style={styles.picker} selectedValue={'length'} onValueChange={(itemValue, itemIndex) => setLength(itemValue)}>
                            <Picker.Item label='Length' value='Length' />
                            <Picker.Item label='50' value='50' />
                            <Picker.Item label='30' value='30' />
                        </Picker>
                    </LengthSelect>
                </SelectArea>
                <MainArea>
                    <CalendarStrip
                        style={{ height: 120, paddingTop: 10, paddingBottom: 10 }}
                        dateNumberStyle={{
                            backgroundColor: Theme.header.colors.backgroundColor,
                            height: 35,
                            width: 35,
                            paddingTop: 4,
                            borderRadius: 30,
                            color: Theme.colors.gray,
                        }}
                        dateNameStyle={{ color: Theme.colors.gray, paddingBottom: 10 }}
                        highlightDateNumberStyle={{
                            backgroundColor: Theme.colors.iconColor,
                            height: 35,
                            width: 35,
                            paddingTop: 4,
                            borderRadius: 30,
                            color: Theme.colors.white,
                        }}
                        highlightDateNameStyle={{ color: Theme.colors.gray, paddingBottom: 10 }}
                    />
                    <TimeContainer>
                        {BookingTimes.map((Times, i) =>
                            <TimeSection key={i}>
                                <Text style={styles.TimeTitle}>{Times.Title}</Text>
                                {Times.Time.map((Hour, k) =>
                                    <Hours key={k}>
                                        <Text style={styles.HourText}>{Hour}</Text>
                                    </Hours>
                                )}
                            </TimeSection>
                        )}
                    </TimeContainer>
                </MainArea>
                <ButtonGoPayment>
                    <GlobalButton Flag={'ArrowTrue'} onPress={() => navigation.navigate("ConfirmPaymentScreen")} buttonText={"Go To Payment"} marginTop={20} />
                </ButtonGoPayment>
                <BookingFooter></BookingFooter>
            </ScrollViewArea>
            <ScrollToBottom onPress={handleClick} style={styles.toBottom} color={Theme.colors.gray}></ScrollToBottom>
        </GlobalContainer>
    )
}
const styles = StyleSheet.create({
    container: { paddingVertical: 10, backgroundColor: "#F8F8F8", },
    picker: {
        height: 25,
        fontSize: 5,
        color: '#a6a6a6'
    },
    TimeTitle: {
        textAlign: "center",
        color: Theme.colors.calendarTimeColor,
    },
    HourText: {
        fontSize: 10,
        color: Theme.colors.calendarTimeColor,
    },
    Scroll: {
        justifyContent: "center",
    },
    toBottom: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        paddingVertical: 2,
        borderRadius: 20,
        backgroundColor: 'white',
    }
});
