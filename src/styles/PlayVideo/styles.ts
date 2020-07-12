import styled from 'styled-components/native';
import { Theme } from '../../theme';

export const Container = styled.TouchableOpacity`
    align-items: center;
    flex-direction: row;
    justify-content: center;
`;

export const VideoText = styled.Text`
    font-size: 14px;
    color: ${Theme.colors.iconColor};
    font-weight: bold;
    margin-left: 5px;
`;
