import styled from 'styled-components/native';

import { Theme } from '../../theme';

export const HighlightedCard = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 40px;
    height: 420px;
`;

export const CardBody = styled.View`
    width: 85%;
    height: 100%;
    background-color: #f2f2f2;
    box-shadow: 10px 5px 15px black;
    elevation: 5;
    shadow-color: #999999;
    border: 1px solid #b3b3b3;
    border-radius: 10px;
    align-items: center;
`;

export const CardHeader = styled.View`
    background-color: #cccccc;
    width: 100%;
    height: 70px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom-color: #737373;
    border-bottom-width: 1px;
    justify-content: center;
    align-items: center;
`;

export const EmailInput = styled.View`
    margin-top: 20px;
`;

export const InputContainer = styled.View`
    width: 200px;
    align-items: center;
    margin-top: 10px;
`;

export const IconContainer = styled.View`
    flex-direction: row;
`;

export const ZipInputContainer = styled.View`
    width: 100%;
    align-items: flex-start;
    margin-top: 20px;
`;

export const CheckBoxContainer = styled.View`
    width: 100%;
    align-items: center;
    height: 40px;
    margin-top: 20px;
    border: 1px solid #b3b3b3;
    flex-direction: row;
    justify-content: center;
    border-radius: 5px;
`;

export const ButtonPaymentConfirm = styled.View`
    width: 100%;
    align-items: center;
`;
