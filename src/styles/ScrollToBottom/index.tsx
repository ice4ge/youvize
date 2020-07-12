import React from 'react';
import { ScrollToBottomButton } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

type TProps = {
    onPress?: () => void,
    style?: React.CSSProperties,
    color?: string,
}
const ScrollToBottom: React.FC<TProps> = props => {
    return (
        <ScrollToBottomButton style={props.style} onPress={props.onPress}>
            <FontAwesomeIcon icon={faChevronDown} color={props.color} size={20}/>
        </ScrollToBottomButton>
    );
}

export default ScrollToBottom;
