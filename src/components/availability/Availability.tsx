import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { availabilityType } from '../../models/ProfileModel';
import { Container, DayList } from './styles';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import TimePicker from '../../styles/TimePicker';
import { StyledText } from '../../styles/GlobalText';
import { Theme } from '../../theme';
import { RightView } from '../education/styles';
import EditButton from '../../styles/EditButton';

type TProps = {
    availability?: availabilityType[]
}

const Availability: React.FC<TProps> = props => {
    const { availability } = props;
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const weeks = [
        "Sunday",
        "Monday",
        "TuesDay",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date: Date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };
    return (
        <Container>
            {/* <StyledText style={styles.title} color={Theme.colors.black} fontSize={18}>General Availability</StyledText> */}
            <EditButton top={-5} right={0}></EditButton>
            <DayList>
                <StyledText style={styles.flex_1} color={Theme.colors.black}>Available From</StyledText>
                <StyledText style={styles.flex_1} color={Theme.colors.black}>To</StyledText>
            </DayList>
            {availability?.map((day: availabilityType, index: number) =>
                <DayList key={index}>
                    <StyledText style={styles.alignRight} fontSize={12} color={Theme.colors.black}>{day.day}</StyledText>
                    <TimePicker onPress={showDatePicker} value={day.from} style={styles.timePicker}></TimePicker>
                    <TimePicker onPress={showDatePicker} value={day.to} style={styles.timePicker}></TimePicker>
                </DayList>
            )}
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="time"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
            <StyledText style={styles.bottom} color={Theme.colors.black} fontSize={14}>Exceptions and Details Available in Calendar</StyledText>
        </Container>
    );
}

const styles = StyleSheet.create({
    flex_1: {
        width: "33%",
        textAlign: "center",
    },

    alignRight: {
        flex: 1,
        textAlign: "right",
    },
    timePicker: {
        width: "40%",
        marginLeft: 10,
    },
    title: {
        alignSelf: "center",
        marginBottom: 25,
    },
    bottom: {
        alignSelf: "center",
        marginTop: 12,
    }
})

export default Availability;
