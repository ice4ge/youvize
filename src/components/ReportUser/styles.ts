import styled from 'styled-components/native';
import { Theme } from '../../theme';

export const Container = styled.TouchableOpacity`
    border-width: 1px;
    border-color: ${Theme.colors.locationColor};
    border-radius: 10px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-horizontal: 15px;
    padding-vertical: 10px;
    margin-vertical: 30px;
    width: 80%;
`;
