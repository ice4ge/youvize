import React, {useRef} from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Picker,
    ScrollView,
    Image,
} from "react-native";
import { GlobalContainer } from "../../styles/GlobalContainer";
import { HeaderComponent } from "../../components/header";
import { NotificationBlock } from '../../components/notification';
import LinearGradient from 'react-native-linear-gradient';
import ScrollToBottom from '../../styles/ScrollToBottom';

const data = [
    {
        key: 'person',
        image: 'https://image.shutterstock.com/image-photo/young-woman-taking-self-portrait-260nw-702198103.jpg',
        name: 'Steve Rogers',
        title: 'Youvize Redesign Consulting',
        description: 'You: I had uploaded new files to trello, please go ahead',
        time: '07:34 PM',
        isOnline: false,
        isHighlighted: true,
    }, {
        key: 'person',
        image: 'https://image.shutterstock.com/image-photo/photographer-taking-picture-nature-on-260nw-567398461.jpg',
        name: 'Stephen Strange',
        title: 'New Payoneer mobile app',
        description: 'You: I had uploaded new files to trello, please go ahead',
        time: '07:34 PM',
        isOnline: true,
        isHighlighted: false,
    },{
        key: 'alert',
        highlightedFirst: 'weekly earnings where $410',
        highlightedSecond: '3 thumbs up',
        textFirst: 'The week has ended',
        textSecond: 'and you got',
        time: 'Oct 21',
        isHighlighted: false,
    },{
        key: 'person',
        image: 'https://image.shutterstock.com/image-photo/hospital-medical-education-health-care-260nw-283871402.jpg',
        name: 'Steve Rogers',
        title: 'Youvize Redesign Consulting',
        description: 'You: I had uploaded new files to trello, please go ahead',
        time: '07:34 PM',
        isOnline: true,
        isHighlighted: false,
    }, {
        key: 'person',
        image: 'https://github.com/publsoft/publsoft.github.io/raw/master/projects/medical-demo/assets/images/doctor1.jpg',
        name: 'Stephen Strange',
        title: 'Youvize Redesign Consulting',
        description: 'You: I had uploaded new files to trello, please go ahead',
        time: '07:34 PM',
        isOnline: false,
        isHighlighted: false,
    }, {
        key: 'alert',
        highlightedFirst: 'weekly earnings where $410',
        highlightedSecond: '3 thumbs up',
        textFirst: 'The week has ended',
        textSecond: 'and you got',
        time: 'Oct 21',
        isHighlighted: false,
    },{
        key: 'person',
        image: 'https://github.com/publsoft/publsoft.github.io/raw/master/projects/medical-demo/assets/images/doctor2.jpg',
        name: 'Steve Rogers',
        title: 'Youvize Redesign Consulting',
        description: 'You: I had uploaded new files to trello, please go ahead',
        time: '07:34 PM',
        isOnline: true,
        isHighlighted: false,
    },
]

export const NotificationScreen: React.FC<{}> = props => {
    const scrollViewRef = useRef();
    const handleClick = () => {
        scrollViewRef.current.scrollToEnd({
            animated: true
        })
    };
    return (
        <GlobalContainer style={styles.totalContainer}>
            <HeaderComponent rightIcon={'plus'}></HeaderComponent>
            <ScrollView ref={scrollViewRef}>
                    <FlatList
                        data={data}
                        keyExtractor={(item, index) => `key${index}ForMenu`}
                        renderItem={({ item }) => (
                            <NotificationBlock
                                userData = {item}
                                backColor={item.isHighlighted ? '#FBF0E6' : 'white'}
                                nameColor={item.isHighlighted ? 'black' : '#4d4d4d'}
                                descriptionColor={item.isHighlighted ? 'black' : '#a6a6a6'}
                            />
                        )}
                    />
            </ScrollView>
            <ScrollToBottom onPress={handleClick} style={styles.toBottom} color={'#999999'}></ScrollToBottom>
        </GlobalContainer>
    )
}

const styles = StyleSheet.create({
    totalContainer: {
        paddingBottom: 90,
    },
})
