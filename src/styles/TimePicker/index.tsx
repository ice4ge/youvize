import React from 'react';
import { Button } from './styles';
import { StyledText } from '../GlobalText';

type TProps = {
    onPress?: () => void,
    value?: string,
    style?: object,
}

const TimePicker: React.FC<TProps> = props => {
    const { onPress, value, style } = props;
    return (
        <Button onPress={onPress} style={style}><StyledText>{value}</StyledText></Button>
    );
}

export default TimePicker;
