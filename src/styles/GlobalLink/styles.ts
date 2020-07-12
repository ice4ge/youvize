import styled from 'styled-components/native';

export const LinkContainer = styled.TouchableOpacity`
    
    margin-top: ${props => props.marginTop}px;
    
`;

export const LinkText = styled.Text`
    color: ${props => !props.color ? "#33A9FE" : props.color};
    font-size: ${props => !props.fontSize? 18 : props.fontSize}px;
    font-weight: ${props => !props.fontWeight? "normal" : props.fontWeight};
`;
