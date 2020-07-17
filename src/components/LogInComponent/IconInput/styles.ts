import styled from 'styled-components/native';

export const IconInputContainer = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
    border: 1px solid #e0e0e0;
    height: 45px;
    border-radius: 6px;
    align-items: center;
    padding-horizontal: 10px;
    background-color: white;
    margin-vertical: 6px;
`;

export const LogInInput = styled.TextInput`
    font-family: Rubik;
    width: 100%;
    padding-vertical: 0;
    padding-horizontal: 10px;
    flex: 1;
    font-size: 16px;
`;
