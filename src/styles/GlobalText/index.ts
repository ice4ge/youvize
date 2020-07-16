import styled from 'styled-components/native';
import { Props } from 'react-native-image-zoom-viewer/built/image-viewer.type';

export const StyledText = styled.Text`
    color: ${props => !props.color ? "#a1a1a1" : props.color};
    font-size: ${props => !props.fontSize ? 12 : props.fontSize}px;
    font-weight: ${props => !props.fontWeight ? "normal" : props.fontWeight};
    padding-left: ${props => !props.paddingLeft ? 0 : props.paddingLeft};
`;
