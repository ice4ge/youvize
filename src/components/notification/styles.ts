import styled from 'styled-components/native';

export const NotificationCard = styled.TouchableOpacity`
    width: 86%;
    height: 70px;
    background-color: red;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 7%;
    flex-direction: row;
    border-radius: 10px;
`;

export const TextDescription = styled.View`
    width: 60%;
`;

export const UserName = styled.Text`
    font-size: 17px;
    font-weight: bold;
`;

export const BlockTitle = styled.Text`
    font-size: 15px;
`;
