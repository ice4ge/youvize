import React from "react";
import { StyleSheet, ViewStyle, TouchableOpacity, View, Text } from "react-native";
import { 
    FooterContainer,
    FooterColumeSection,
} from './styles';

export const BookingFooter: React.FC<TProps> = props => {
    return (
        <FooterContainer>
            <FooterColumeSection>
                <Text style={styles.Normal}>60 minutes</Text>
                <Text style={styles.Highlight}> X </Text>
                <Text style={styles.Normal}>$ 2.49/min</Text>
            </FooterColumeSection>
            <View>
                <Text style={styles.Total}>Total: $149.40</Text>
            </View>
        </FooterContainer>
    );
};

const styles = StyleSheet.create({
    Normal: {
        color: '#999999',
        fontSize: 18,
    },
    Total: {
        color: '#4d4d4d',
        fontSize: 20,
    },
    Highlight: {
        color: '#00cc00',
        fontSize: 17,
    }
});
