import styled from 'styled-components/native';

export const StyledText = styled.Text`
    color: ${props => !props.color ? "#a1a1a1" : props.color};
    font-size: ${props => !props.fontSize ? 12 : props.fontSize}px;
    font-weight: ${props => !props.fontWeight ? "normal" : props.fontWeight};
`;
