import { View, Text, StyleSheet, Image } from "react-native";
import React from 'react';
import {
    NotificationCard,
    TextDescription,
    UserName,
    BlockTitle,
} from './styles';
import { Avatar } from '../avatar';

export const NotificationBlock: React.FC<TProps> = props => {
    console.log('image avatar', props)
    return (
        <NotificationCard>
            <Avatar source={props.datas.image} style={styles.userAvatar} />
            <TextDescription>
                <UserName>{props.datas.name}</UserName>
                <BlockTitle>{props.datas.title}</BlockTitle>
                <Text>{props.datas.description}</Text>
            </TextDescription>
        </NotificationCard>
    )
}

const styles = StyleSheet.create({
    userAvatar: {
        width: 70,
        height: 70,
    }
})
