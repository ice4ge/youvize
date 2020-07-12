import styled from 'styled-components/native'
import { Theme } from '../../theme';

export const ButtonContainer = styled.TouchableOpacity`
    width: 96px;
    height: 24px;
    border-radius: 6px;
    border-width: 1px;
    border-color: ${Theme.colors.primaryColor};
    align-items: center;
    justify-content: center;
    background-color: white;
    margin-top: ${props => props.marginTop ? props.marginTop : 10}px;
`;
