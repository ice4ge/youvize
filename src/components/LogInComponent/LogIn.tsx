import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { ScrollView } from "react-navigation";
import LinearGradient from 'react-native-linear-gradient';
import IconInput from "./IconInput";
import GlobalButton from "../../styles/GlobalButton";
import GlobalLink from "../../styles/GlobalLink";
import { useNavigation } from "@react-navigation/native";
import NavigationNames from '../../navigations/NavigationNames';
import { BottomView } from './styles';
import { StyledText } from '../../styles/GlobalText';

type TProps = {};

const LogIn: React.FC<TProps> = props => {
    const navigation = useNavigation();
    return (
        <ScrollView style={styles.ScrollContainer}>
            <LinearGradient colors={['#fff', '#efefef']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.gradiendContainer}>
                <IconInput iconName="faEnvelope" placeholderName={"Email or Phone"} inputType={false} />
                <IconInput iconName="faLock" placeholderName={"Password"} inputType={true} />
                <GlobalButton onPress={() => navigation.navigate("Root")} buttonText={"Log in"} marginTop={30} />
                <GlobalLink onPress={() => { }} linkText={"Forgot Password?"} marginTop={30} fontSize={18} fontWeight={"normal"} />
                <BottomView>
                    <StyledText>By using Youvize, you agree to the </StyledText>
                    <GlobalLink onPress={() => { }} color={"#3693c1"} linkText={"Privacy Policy"} marginTop={0} fontSize={12} fontWeight={"normal"} />
                    <StyledText> and </StyledText>
                    <GlobalLink onPress={() => { }} color={"#3693c1"} linkText={"Terms of Use"} marginTop={0} fontSize={12} fontWeight={"normal"} />
                </BottomView>
            </LinearGradient>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    ScrollContainer: {
    },
    gradiendContainer: {
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 60,
        paddingTop: 30,
        minHeight: Dimensions.get("window").height - 240,
    },
});

export default LogIn;
