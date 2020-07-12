import styled from 'styled-components/native';
import { Theme } from '../../theme';

export const IconButtonContainer = styled.TouchableOpacity`
    border-width: 1px;
    border-color: ${Theme.colors.grayForItemsArrow}
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    flex: 1;
    padding-vertical: 6px;
    margin-right: 7px;
`;
