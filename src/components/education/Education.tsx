import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { educationType } from '../../models/ProfileModel';
import { Educations, EducationList, RightView, FlexView } from './styles';
import { StyledText } from '../../styles/GlobalText';
import UniversityIcon from '../../styles/UniversityIcon';
import CertificationIcon from '../../styles/CertificationIcon';
import StarCheck from '../../styles/StarCheck';
import { Theme } from '../../theme';

type TProps = {
    education?: educationType[]
}

const Education: React.FC<TProps> = props => {
    const { education } = props;

    return (
        <Educations>
            {education?.map((item, index) => {
                const uni = item.type === "university" ? true : false;
                return <EducationList key={index}>
                    {uni ? <UniversityIcon /> : item.type === "certification" ? <CertificationIcon /> : null}
                    <RightView>
                        <FlexView>
                            <StyledText style={styles.title} color={Theme.colors.black} fontSize={uni ? 14 : 10} fontWeight="bold">{item.title}</StyledText>
                            <StarCheck />
                        </FlexView>
                        <StyledText color={Theme.colors.black} fontSize={uni ? 18 : 14}>{item.content}</StyledText>
                    </RightView>
                </EducationList>
            })}
        </Educations>
    );
}

const styles = StyleSheet.create({
    title: {
        marginRight: 10,
    }
})

export default Education;
