import React from 'react';
import { Container, VideoText } from './styles';
import PlayIcon from './PlayIcon';

type TProps = {

}

const PlayVideo: React.FC<TProps> = props => {
    return (
        <Container>
            <PlayIcon></PlayIcon>
            <VideoText>Play Video</VideoText>
        </Container>
    );
}

export default PlayVideo;
