import React from 'react';
import { IconButtonContainer } from './styles';
import { StyledText } from '../GlobalText';
import { FontAwesomeIconStyle, FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { Theme } from '../../theme';

type TProps = {
    text?: string;
    style?: React.CSSProperties;
    icon?: FontAwesomeIconStyle;
    active?: boolean;
}

const IconButton: React.FC<TProps> = props => {
    return (
        <IconButtonContainer style={props.style}>
            <StyledText color={props.active && Theme.colors.primaryColor} style={{marginRight: 10}} fontSize={16}>
                {props.text || "Contact"}
            </StyledText>
            <FontAwesomeIcon color={props.active ? Theme.colors.primaryColor : "#a1a1a1"} icon={props.icon || faPhone}/>
        </IconButtonContainer>
    );
}

export default IconButton;
