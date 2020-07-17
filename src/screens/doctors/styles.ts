import styled from 'styled-components/native';

import { Theme } from '../../theme';

export const SelectArea = styled.View`
    width: 100%;
    padding: 0px 20px;
    height: 50px;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`;

export const CategorySelect = styled.View`
    width: 50%;
    height: 40px;
    background-color: ${Theme.colors.white};
    border-radius: 10px;
    justify-content: center;
    border: 1px solid ${Theme.colors.pickColor};
`;

export const LengthSelect = styled.View`
    width: 40%;
    height: 40px;
    justify-content: center;
    border-radius: 10px;
    background-color: ${Theme.colors.white};
    border: 1px solid ${Theme.colors.pickColor};
`;
