import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { LinkContainer, LinkText } from "./styles";

type TProps = {
    linkText?: String,
    marginTop?: Number,
    fontSize?: Number,
    fontWeight?: String,
    onPress?: Function,
    color?: String,
}

const GlobalLink: React.FC<TProps> = props => {
    return (
        <LinkContainer marginTop={props.marginTop} onPress={props.onPress}>
            <LinkText fontSize={props.fontSize} fontWeight={props.fontWeight} color={props.color}>{props.linkText}</LinkText>
        </LinkContainer>
    );
}

export default GlobalLink;
