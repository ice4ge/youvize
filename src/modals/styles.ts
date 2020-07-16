import styled from 'styled-components/native';
import { Theme } from '../../src/theme';

export const TermsContainer = styled.ScrollView`
    flex: 1;
    border-radius: 10px;
    padding-horizontal: 15px;
    padding-top: 12px;
    padding-vertical: 140px;
    background-color: white;
`;

export const CloseButton = styled.TouchableOpacity`
    position: absolute;
    border-radius: 15px;
    justify-content: center;
    background-color: white;
    align-items: center;
    width: 30px;
    height: 30px;
    border-width: 1px;
    border-color: ${Theme.colors.grayForItemsArrow};
    top: ${props => props.top || 15}px;
    right: ${props => props.right || 12}px;
`;
