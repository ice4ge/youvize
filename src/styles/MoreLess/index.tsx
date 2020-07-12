import React from 'react';
import { Container, MoreText } from './styles';

type TProps = {
    expanded?: boolean,
    color?: string,
    right?: number,
    bottom?: number,
    fontSize?: number,
    onPress?: ()=>void,
}

const MoreLess:React.FC<TProps> = props => {
    return (
        <Container onPress={props.onPress} right={props.right} bottom={props.bottom}>
            <MoreText color={props.color} fontSize={props.fontSize}>
                {props.expanded ? "Less" : "More"}
            </MoreText>
        </Container>
    );
}

export default MoreLess;
