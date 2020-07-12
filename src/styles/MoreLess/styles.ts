import styled from 'styled-components/native';
import { Theme } from '../../theme';

export const MoreText = styled.Text`
    color: ${props=>props.color || Theme.colors.primaryColor};
    fontSize: ${props=>props.fontSize || 12}px;
`;

export const Container = styled.TouchableOpacity`
    position: absolute;
    right: ${props=>props.right || 0}px;
    bottom: ${props=>props.bottom || 0}px;
`;
