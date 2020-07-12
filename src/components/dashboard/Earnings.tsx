import React from 'react';
import { StyledText } from '../../styles/GlobalText';
import { EarningModel, EarnListModel } from 'src/models';
import { earnings } from '../../services/DashboardService';
import { EarningContainer, EarnDetail, DetailContainer, ListContainer } from './styles';
import { Theme } from '../../theme';
import { StyleSheet } from 'react-native';

type TProps = {
    earnings?: EarningModel;
}

const Earnings: React.FC<TProps> = props => {
    return (
        <EarningContainer>
            <StyledText color={Theme.colors.black} fontSize={14} fontWeight={"bold"}>{earnings.date}</StyledText>
            <DetailContainer>
                <EarnDetail>
                    <StyledText color={Theme.colors.black} fontSize={18} fontWeight={"bold"}>
                        {earnings.minutes}
                    </StyledText>
                    <StyledText fontSize={10}>Minutes</StyledText>
                </EarnDetail>
                <EarnDetail>
                    <StyledText color={Theme.colors.black} fontSize={18} fontWeight={"bold"}>
                        ${earnings.hourly}
                    </StyledText>
                    <StyledText fontSize={10}>Per Minutes</StyledText>
                </EarnDetail>
                <EarnDetail>
                    <StyledText color={Theme.colors.black} fontSize={18} fontWeight={"bold"}>
                        ${(earnings.minutes * earnings.hourly).toFixed(2)}
                    </StyledText>
                    <StyledText fontSize={10}>Total</StyledText>
                </EarnDetail>
            </DetailContainer>
            {earnings.earnlist?.map((earned: EarnListModel, index: number) =>
                <ListContainer key={index}>
                    <StyledText style={styles.earnList} color={Theme.colors.primaryColor}>{earned.date},</StyledText>
                    <StyledText style={styles.earnList} color={Theme.colors.primaryColor}>{earned.bookTime}</StyledText>
                    <StyledText style={styles.earnList} color={Theme.colors.black} fontWeight={"bold"} padding={'0px 20px'}>{earned.clientName}</StyledText>
                    <StyledText style={styles.earnList} color={Theme.colors.primaryColor}>{earned.minutes} m</StyledText>
                    <StyledText style={styles.earnList} color={Theme.colors.primaryColor}>${earned.earned.toFixed(2)}</StyledText>
                </ListContainer>
            )}
        </EarningContainer>
    );
}

const styles = StyleSheet.create({
    earnList: {
        flex: 1,
        fontSize: 10,
    }
})

export default Earnings;
