import styled from 'styled-components/native';
import { Theme } from '../../theme';

export const EarningContainer = styled.View`
    background-color: white;
    padding-vertical: 7px;
    padding-horizontal: 15px;
    margin-horizontal: 15px;
    border-radius: 24px;
    align-items: center;
`;

export const EarnDetail = styled.View`
    background-color: ${Theme.colors.grayForBoxBackground};
    flex: 1;
    margin-horizontal: 5px;
    padding-vertical: 4px;
    align-items: center;
    border-radius: 10px;
`;

export const DetailContainer = styled.View`
    flex-direction: row;
    margin-vertical: 10px;
`;

export const ListContainer = styled.View`
    flex-direction: row;
    margin-left: 20px;
`;
