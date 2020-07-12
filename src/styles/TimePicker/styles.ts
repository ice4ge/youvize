import styled from 'styled-components/native';
import { Theme } from '../../theme';

export const Button = styled.TouchableOpacity`
    border-radius: 6px;
    border-color: ${Theme.colors.locationColor};
    flex: 1;
    border-width: 1px;
    padding-vertical: 8px;
    justify-content: center
    align-items: center;
    background: white;
`;
