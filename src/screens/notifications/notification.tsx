import React from "react";
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

const data = [
    {
        key: 'person',
        image: '../../assets/avatar.jpg',
        name: 'Steve Rogers',
        title: 'Youvize Redesign Consulting',
        description: 'You: I had uploaded new files to trello, please go ahead',
        time: '07:34 PM'
    }, {
        key: 'person',
        image: '../../assets/avatar.jpg',
        name: 'Stephen Strange',
        title: 'New Payoneer mobile app',
        description: 'You: I had uploaded new files to trello, please go ahead',
        time: '07:34 PM'
    }, {
        key: 'person',
        image: '../../assets/avatar.jpg',
        name: 'Steve Rogers',
        title: 'Youvize Redesign Consulting',
        description: 'You: I had uploaded new files to trello, please go ahead',
        time: '07:34 PM'
    }, {
        key: 'person',
        image: '../../assets/avatar.jpg',
        name: 'Stephen Strange',
        title: 'Youvize Redesign Consulting',
        description: 'You: I had uploaded new files to trello, please go ahead',
        time: '07:34 PM'
    }, {
        key: 'person',
        image: '../../assets/avatar.jpg',
        name: 'Steve Rogers',
        title: 'Youvize Redesign Consulting',
        description: 'You: I had uploaded new files to trello, please go ahead',
        time: '07:34 PM'
    },
]

export const NotificationScreen: React.FC<{}> = props => {
    return (
        <GlobalContainer>
            <HeaderComponent rightIcon={'plus'}></HeaderComponent>
            <ScrollView>
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => `key${index}ForMenu`}
                    renderItem={({ item }) => (
                        <NotificationBlock 
                            datas={item} 
                        />
                    )}
                />
            </ScrollView>
        </GlobalContainer>
    )
}
