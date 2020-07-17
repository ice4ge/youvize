import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { aboutBioType, workHistoryType } from '../../models/ProfileModel';
import { ProfileContainer, VerificationContainer, HistoryContainer, FlexView } from './styles';
import { StyledText } from '../../styles/GlobalText';
import EditButton from '../../styles/EditButton';
import MoreLess from '../../styles/MoreLess';
import PlayVideo from '../../styles/PlayVideo';
import StarCheck from '../../styles/StarCheck';
import { Theme } from '../../theme';
import { FlatList } from 'react-native';
import { Rating } from 'react-native-ratings';
import { Item } from 'react-navigation-header-buttons';

type TProps = {
    aboutBioData?: aboutBioType
}

const AboutBio: React.FC<TProps> = props => {
    const [expanded, setExpanded] = useState(false);
    const { aboutBioData } = props;

    const moreClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <View style={styles.contain}>
                <ProfileContainer>
                    <StyledText style={styles.profileTitle} fontSize={18} color={Theme.colors.black} fontWeight={"bold"}>
                        {aboutBioData?.title}
                    </StyledText>
                    <StyledText>
                        {aboutBioData?.content}
                    </StyledText>
                    {/* <MoreLess onPress={moreClick} expanded={expanded} bottom={-20} right={20}></MoreLess> */}
                    <EditButton top={-20} right={0}></EditButton>
                </ProfileContainer>
                <PlayVideo></PlayVideo>
            </View>
            <ProfileContainer style={styles.verification}>
                <StyledText color={"#4A4A4A"} fontSize={14} fontWeight={"bold"} style={styles.verifyTitle}>Verifications</StyledText>
                {aboutBioData?.verifications?.map((item: any, index: number) =>
                    <VerificationContainer key={index}>
                        <StyledText color={Theme.colors.black}>{item.item}:   </StyledText>
                        <StyledText>{item.verification}   </StyledText>
                        {item.checked && <StarCheck></StarCheck>}
                        <StyledText>  {item.result}</StyledText>
                    </VerificationContainer>
                )}
            </ProfileContainer>
            <ProfileContainer>
                <StyledText color={Theme.colors.black} fontSize={18} fontWeight={"bold"}>Work History and Feedback</StyledText>
            </ProfileContainer>
            <FlatList
                data={aboutBioData?.workHistory}
                renderItem={(row) =>
                    <HistoryContainer style={styles.historyCard}>
                        <FlexView>
                            <FlexView>
                                <Rating
                                    imageSize={13}
                                    readonly
                                    startingValue={row.item.rate}
                                ></Rating>
                                <StyledText style={styles.rateNumber} color={Theme.colors.black}>{row.item.rate?.toFixed(1)}</StyledText>
                            </FlexView>
                            <FlexView>
                                <StyledText>{row.item.duration}</StyledText>
                            </FlexView>
                        </FlexView>
                        <StyledText style={styles.historyTitle} color={Theme.colors.primaryColor} fontSize={14}>{row.item.title}</StyledText>
                        <StyledText color={Theme.colors.black}>{row.item.content}</StyledText>
                        <FlexView style={styles.earnedText}>
                            <StyledText color={Theme.colors.black}>${row.item.earned?.toFixed(2)}</StyledText>
                            <StyledText color={Theme.colors.black}>${row.item.hourly}/Hr</StyledText>
                            <StyledText color={Theme.colors.black}>{row.item.hours} Hours</StyledText>
                        </FlexView>
                    </HistoryContainer>
                }
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                keyExtractor={(item, index) => `key${index}ForCampaign`}
            />
        </>
    );
}

const styles = StyleSheet.create({
    contain: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: '95%',
        paddingBottom: 20,
    },
    verification: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: '95%',
        paddingTop: 10,
        paddingBottom: 10,
    },
    profileTitle: {
        marginBottom: 8,
    },
    verifyTitle: {
        marginBottom: 14,
    },
    rateNumber: {
        marginLeft: 5,
    },
    historyTitle: {
        marginVertical: 5,
    },
    earnedText: {
        marginVertical: 5,
        paddingHorizontal: 9,
    },
    historyCard: {
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 20,
        paddingTop: 10,
        paddingBottom: 10,
    }
})

export default AboutBio;
