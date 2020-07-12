import React from "react";
import { LogInContainer, StyledLogoImage } from './styles';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

type TProps = {
    navigationState?: any,
    navigation?: any,
    activeTintColor?: any,
    inactiveTintColor?: any,
}

const Header: React.FC<TProps> = props => {
    const {
        navigationState,
        navigation,
        activeTintColor,
        inactiveTintColor
    } = props;
    const activeTabIndex = navigation.state.index;

    return (
        <LinearGradient colors={['#fff', '#efefef']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.containerHeader}>
            <StyledLogoImage source={require("../../assets/logo.png")} />
            <View style={styles.tabContainer}>
                {navigationState.routes.map((route: any, index: Number) => {
                    const isRouteActive = index === activeTabIndex;
                    const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;

                    return (
                        <TouchableWithoutFeedback
                            onPress={() => navigation.navigate(route.routeName)}
                            key={route.routeName}
                        >
                            <View
                                style={{
                                    flex: 1,
                                    borderBottomWidth: 2,
                                    paddingBottom: 3,
                                    borderBottomColor: `${isRouteActive ? "#3AC658" : "#d8d8d8"}`,
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 17,
                                        
                                    }}
                                >
                                    {route.routeName === "LogIn" ? "Sign in" : "Sign Up"}
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    );
                })}
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    containerHeader: {
        // fontFamily: "Rubic",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    textContainer: {
        marginTop: 70
    },
    tabContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingHorizontal: 60,
        height: "20%",
        alignItems: "center",
        marginTop: 10,
    }
});
export default Header;
