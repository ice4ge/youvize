import React, { useRef } from "react";
import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import ReactNativeModal from "react-native-modal";
import { TermsContainer, CloseButton } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faTimesCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { StyledText } from "../styles/GlobalText";
import { Theme } from "../theme";
import ScrollToBottom from "../styles/ScrollToBottom";

type TProps = {
    isShowed: boolean;
    onSwipeComplete: () => void;
};

export const TermsModal: React.FC<TProps> = props => {
    const scrollViewRef = useRef();
    const handleClick = () => {
        scrollViewRef.current.scrollToEnd({
            animated: true
        })
    };
    return (
        <ReactNativeModal
            isVisible={props.isShowed}
            style={{ margin: 15 }}
        >
                <TermsContainer
                    ref={scrollViewRef}
                >
                    <StyledText style={styles.title} fontSize={18} color={Theme.colors.primaryColor}>Youvize Terms of Use</StyledText>
                    <StyledText fontWeight={"bold"} color={Theme.colors.gray}>Youvize enables users (clients) to quickly and easily reach awesome people (advisors) for great advice.</StyledText>
                    <StyledText style={styles.content} color={Theme.colors.gray}>We try hard to minimize disputes and missed appointments while also keeping the platform simple, fair, and easy to use.  All of this depends on you (yes You!) being honest about your skills and expertise while also being respectful of the rules and each other's time. Our rules and process have been developed in collaboration with our amazing community which you are now becoming part of -so
                        <StyledText color={Theme.colors.linkColor}> send us feedback!</StyledText>
                    </StyledText>
                    <StyledText style={styles.content} color={Theme.colors.gray}><StyledText fontWeight={"bold"} color={Theme.colors.gray}>How it works:</StyledText>  To speak with an advisor, a client will find an advisor with the skills they’re seeking and request an available time slot and provide payment info. If the advisor accepts the reqest (they typically will), we will process the payment and hold it as a deposit to help everyone attend the appt. on-time.</StyledText>
                    <StyledText style={styles.content} color={Theme.colors.gray}><StyledText fontWeight={"bold"} color={Theme.colors.gray}>If the advisor misses an appointment</StyledText> without notice, the deposit will be refunded to the client and the advisor will automatically receive a negative review and will be responsible for any fees.  If said advisor wants to make amends for their  flakiness, they can offer a discount for another session.</StyledText>
                    <StyledText style={styles.content} color={Theme.colors.gray}><StyledText fontWeight={"bold"} color={Theme.colors.gray}>If the client misses an appointment</StyledText> the deposit (for up to 1 hour) will be released to the advisor less fees.  Please: Always make your appointments on-time or rescedule more than 24-hours in advance. </StyledText>
                    <StyledText fontSize={18} color={Theme.colors.primaryColor}>Youvize Full Terms of Use</StyledText>
                    <StyledText color={Theme.colors.gray}>We try hard to minimize disputes and missed appointments while also keeping the platform simple, fair, and easy to use.  All of this this depends on you (yes You!) being honest about your skills and expertise while also being respectful of the rules and eachother's time. Our rules and process has been developed in collaboration with our amazing community which you are now becomming part of</StyledText>
                    <StyledText color={Theme.colors.gray}>We try hard to minimize disputes and missed appointments while also keeping the platform simple, fair, and easy to use.  All of this this depends on you (yes You!) being honest about your skills and expertise while also being respectful of the rules and eachother's time. Our rules and process has been developed in collaboration with our amazing community which you are now becomming part of</StyledText>
                    <StyledText color={Theme.colors.gray}>We try hard to minimize disputes and missed appointments while also keeping the platform simple, fair, and easy to use.  All of this this depends on you (yes You!) being honest about your skills and expertise while also being respectful of the rules and eachother's time. Our rules and process has been developed in collaboration with our amazing community which you are now becomming part of</StyledText>
                    <StyledText color={Theme.colors.gray}>We try hard to minimize disputes and missed appointments while also keeping the platform simple, fair, and easy to use.  All of this this depends on you (yes You!) being honest about your skills and expertise while also being respectful of the rules and eachother's time. Our rules and process has been developed in collaboration with our amazing community which you are now becomming part of</StyledText>
                </TermsContainer>
                <CloseButton
                    onPress={() => props.onSwipeComplete()}
                // onPress={handleClick}
                >
                    <FontAwesomeIcon icon={faTimes} size={14} color={Theme.colors.grayForItemsArrow}/>
                </CloseButton>
                <ScrollToBottom style={styles.toBottom} onPress={handleClick} color={"#6EB943"}></ScrollToBottom>
         
        </ReactNativeModal>
    );
};

const styles = StyleSheet.create({
    flex1: { 
        flex: 1,
        backgroundColor: "white",
        borderRadius: 10,
        paddingBottom: 25,
    },
    title: {
        marginVertical: 15,
    },
    content: {
        marginBottom: 15,
        marginTop: 5,
    },
    toBottom: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        backgroundColor: "white",
        paddingVertical: 2,
        borderRadius: 20,
    }
});
