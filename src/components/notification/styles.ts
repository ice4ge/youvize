import styled from 'styled-components/native';

export const NotificationCard = styled.TouchableOpacity`
    width: 86%;
    height: 80px;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 7%;
    flex-direction: row;
    border-radius: 10px;
    border: 1px solid #cccccc;
    background-color: ${props => props.background};
    justify-content: center;
    align-items: center;
`;

export const TextDescription = styled.View`
    width: 60%;
    height: 100%;
    justify-content: center;
`;

export const UserAvatar = styled.View`
    position: relative;
`;

export const OnlineCircle = styled.View`
    width: 10px;
    height: 10px;
    background-color: #6FDB45;
    border-radius: 50px;
    position: absolute;
    margin-left: 50px;
    margin-top: 40px;
`;

export const UserName = styled.Text`
    font-size: 17px;
    font-weight: bold;
    color: #262626;
`;

export const BlockTitle = styled.Text`
    font-size: 15px;
    color: #FFA550;
`;

export const RigthBlockEnd = styled.View`
    flex-direction: column;
    justify-content: center;
    padding-bottom: 20px;
`;

export const ToRightIcon = styled.TouchableOpacity`
    color: #999999;
    align-items: flex-end;
    padding-right: 10px;
    padding-top: 5px;
`;

export const AlertDescription = styled.Text`
    width: 80%;
    font-size: 15px;
    padding-left: 10px;
`;

export const HighLight = styled.Text`
    font-size: 15px;
    color: #34AE5D;
`;

export const RightClose = styled.Text`
    padding: 10px;
    border-radius: 50px;
    background-color: #34AE5D;
    color: white;
    text-align: center;
    margin-left: auto;
    font-weight: bold;
    margin-top: 7px;
`;

export const RightBlockClose = styled.TouchableOpacity`
    flex-direction: column;
    justify-content: center;
`;
