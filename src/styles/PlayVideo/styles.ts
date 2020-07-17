import styled from 'styled-components/native';
import { Theme } from '../../theme';

export const Container = styled.TouchableOpacity`
    align-items: center;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    width: 80%;
    border: 1px solid #cccccc;
    margin-left: 10%;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 5px;
`;

export const VideoText = styled.Text`
    font-size: 14px;
    color: ${Theme.colors.iconColor};
    font-weight: bold;
    margin-left: 5px;
`;
