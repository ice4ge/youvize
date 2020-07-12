import styled from 'styled-components/native'

export const ButtonContainer = styled.TouchableOpacity`
    width: 182px;
    height: 38px;
    border-radius: 6px;
    background-color: red;
    margin-top: ${props => props.marginTop ? props.marginTop : 10}px;
`;
