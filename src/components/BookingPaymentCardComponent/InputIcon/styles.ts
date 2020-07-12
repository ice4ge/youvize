import styled from 'styled-components/native';
import { Input } from 'react-native-elements';

export const IconInputContainer = styled.View`
    display: flex;
    flex-direction: row;
    position: relative;
    border: 1px solid #e0e0e0;
    height: 38px;
    border-radius: 6px;
    align-items: center;
    padding-horizontal: 10px;
    background-color: white;
`;

export const InputTag = styled.TextInput`
    font-family: Rubik;
    padding-vertical: 0;
    padding-horizontal: 10px;
    flex: 1;
    font-size: 16px;
`;



