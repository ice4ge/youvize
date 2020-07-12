import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { ButtonContainer } from "./styles";
import LeftIcon from './ToLeftIcon';

type TProps = {
    buttonText?: String,
    marginTop?: Number,
    onPress?: Function,
}

const GlobalButton: React.FC<TProps> = props => {
    return (
        <ButtonContainer marginTop={props.marginTop} onPress={props.onPress}>
            {props.Flag != 'ArrowTrue' && <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#3DCA97', '#35D257']} style={styles.gradient}>
                <Text style={styles.text}>{props.buttonText}</Text>
            </LinearGradient>}
            {props.Flag == 'ArrowTrue' &&
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#3DCA97', '#35D257']} style={styles.gradientWithIcon}>
                    <Text style={styles.textWithIcon}>{props.buttonText}</Text>
                    <LeftIcon></LeftIcon>
                </LinearGradient>}
        </ButtonContainer>
    );
}

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        borderRadius: 6,
        flexDirection: 'row',
    },
    gradientWithIcon: {
        flex: 1,
        justifyContent: 'space-between',
        paddingLeft: 25,
        paddingRight: 10,
        alignItems: 'center',
        borderRadius: 6,
        flexDirection: 'row',
    },
    textWithIcon:{
        color: 'white',
        fontSize: 18,
    },
    text: {
        color: 'white',
        fontSize: 18,
    },
    Arrow: {
        paddingLeft: 20,
    }
});

export default GlobalButton;
