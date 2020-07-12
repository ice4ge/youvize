import React from "react";
import { LogInInput, IconInputContainer } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLock, faEnvelope, faAnchor, IconName } from '@fortawesome/free-solid-svg-icons';
import { StyleSheet } from "react-native";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import EmailIcon from './EmailIcon';
import LockIcon from './LockIcon';

type TProps = {
    iconName?: String,
    placeholderName?: String,
    inputType?: Boolean,
}

const IconInput: React.FC<TProps> = (props) => {
    console.log(props);
    return (
        <IconInputContainer>
            {props.iconName === "faEnvelope" && <EmailIcon />}
            {props.iconName === "faLock" && <LockIcon />}
            <LogInInput placeholder={props.placeholderName} secureTextEntry={props.inputType} />
        </IconInputContainer>
    );
}

export default IconInput;
