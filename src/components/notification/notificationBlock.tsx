import { View, Text, StyleSheet, Image } from "react-native";
import React from 'react';
import {
    NotificationCard,
    TextDescription,
    UserName,
    BlockTitle,
    RigthBlockEnd,
    ToRightIcon,
    AlertDescription,
    HighLight,
    RightClose,
    RightBlockClose,
    UserAvatar,
    OnlineCircle,
} from './styles';
import { Avatar } from '../avatar';
import RightIcon from './rightIcon';
import CloseButton from './close';

type TProps = {
    userData: any,
    backColor: any,
}

export const NotificationBlock: React.FC<TProps> = props => {
    return (
        <NotificationCard background={props.backColor}>
            {props.userData.key == 'person' &&
                <>
                    <UserAvatar>
                        <Avatar source={{ uri: props.userData.image }} style={styles.userAvatar} />
                        {props.userData.isOnline && 
                            <OnlineCircle></OnlineCircle>
                        }
                    </UserAvatar>
                    <TextDescription>
                        <UserName>{props.userData.name}</UserName>
                        <BlockTitle>{props.userData.title}</BlockTitle>
                        <Text numberOfLines={1}>{props.userData.description}</Text>
                    </TextDescription>
                    <RigthBlockEnd>
                        <Text style={styles.time}>{props.userData.time}</Text>
                        <ToRightIcon>
                            <RightIcon></RightIcon>
                        </ToRightIcon>
                    </RigthBlockEnd>
                </>
            }
            {props.userData.key == 'alert' &&
                <>
                    <AlertDescription>{props.userData.textFirst}<HighLight>{props.userData.highlightedFirst}</HighLight>
                        <Text>{props.userData.textSecond}</Text><HighLight>{props.userData.highlightedSecond}</HighLight></AlertDescription>
                    <RigthBlockEnd>
                        <Text style={styles.date}>{props.userData.time}</Text>
                        <RightBlockClose>
                            <RightClose><CloseButton></CloseButton></RightClose>
                        </RightBlockClose>

                    </RigthBlockEnd>
                </>
            }

        </NotificationCard>
    )
}

const styles = StyleSheet.create({
    userAvatar: {
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },
    date: {
        paddingRight: 20,
        color: '#999999',
    },
    time: {
        paddingRight: 20,
        color: '#999999',
    }, 
})
