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
    height: 30px;
    background-color: ${Theme.colors.white};
    border-radius: 5px;
    border: 1px solid ${Theme.colors.pickColor};
`;

export const LengthSelect = styled.View`
    width: 40%;
    height: 30px;
    background-color: ${Theme.colors.white};
    border-radius: 5px;
    border: 1px solid ${Theme.colors.pickColor};
`;

export const TimeContainer = styled.View`
    width: 100%;
    padding: 0px 5%;
    flex-direction: row;
    justify-content: center;
`;

export const TimeSection = styled.View`
    padding: 2px;
    justify-content: center;
`;

export const Hours = styled.View`
    text-align: center;
    padding: 5px 10px;
    border: 1px solid ${Theme.colors.pickColor};
    background-color: #f2f2f2;
    border-radius: 5px;
    margin: 2px;
`;
export const MainArea = styled.View`
    width: 94%;
    background-color: white;
    margin-left: 3%;
    border-radius: 10px;
`;

export const BottomFixedArrow = styled.TouchableOpacity`
    width: 100%;
`;

export const ButtonGoPayment = styled.View`
    width: 100%;
    align-items: center;
`;
export const ScrollViewArea = styled.ScrollView`
    height: auto;
`;
