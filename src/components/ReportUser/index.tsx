import React from 'react';
import { Container } from './styles';
import { StyledText } from '../../styles/GlobalText';
import { Theme } from '../../theme';
import FlagIcon from './FlagIcon';

type TProps = {

}

const ReportUser: React.FC<TProps> = props => {
    return (
        <Container>
            <FlagIcon></FlagIcon>
            <StyledText fontSize={14} fontWeight={"bold"} color={Theme.colors.reportColor}>Flag and Report This User</StyledText>
        </Container>
    );
}

export default ReportUser;
