import React from "react";
import { Text, StyleSheet } from "react-native";
import { ButtonContainer } from "./styles";
import { Theme } from "../../theme";

type TProps = {
    buttonText?: String,
    marginTop?: Number,
    onPress?: Function,
}

const BoaderButton: React.FC<TProps> = props => {
    return (
        <ButtonContainer marginTop={props.marginTop} onPress={props.onPress}>
            <Text style={styles.text}>{props.buttonText}</Text>
        </ButtonContainer>
    );
}

const styles = StyleSheet.create({
    text: {
        color: Theme.colors.primaryColor,
        fontSize: 18,
    }
});

export default BoaderButton;
