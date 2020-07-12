import React from "react";
import { InputTag, IconInputContainer } from './styles';
import EmailIcon from './EmailIcon';
import CardIcon from './CardIcon';
import DateIcon from './DateIcon';
import LockIcon from './LockIcon';
import DatePicker from 'react-native-datepicker';
import {
    TextInput
} from "react-native";

type TProps = {
    iconName?: String,
    placeholderName?: String,
    inputType?: Boolean,
}

export const IconInput: React.FC<TProps> = (props) => {
    return (
        <IconInputContainer width={props.Inputwidth}>
            {props.iconName == 'email' && <EmailIcon />}
            {props.iconName == 'card' && <CardIcon />}
            {props.iconName == 'date' && <DateIcon />}
            {props.iconName == 'lock' && <LockIcon />}
            {props.Type != 'date' && <InputTag placeholder={props.placeholderName} inputType={props.Type} />}
            {props.Type == 'date' && <DatePicker style={{ width: 65, fontSize: 20}}
                mode="date"
                placeholder="MM / YY"
                format="MM/YYYY"
                minDate="01/2016"
                maxDate="01/2050"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                    dateIcon: {
                        display: 'none',
                    },
                    dateInput: {
                        borderLeftWidth: 0,
                        borderRightWidth: 0,
                        borderTopWidth: 0,
                        borderBottomWidth: 0,
                    }
                }} />}
        </IconInputContainer>
    );
}

