import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
    position: absolute;
    top: ${props=> 0 || props.top}px;
    right: ${props=> 0 || props.right}px;
    z-index: 999;
`;
