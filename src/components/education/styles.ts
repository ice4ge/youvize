import styled from 'styled-components/native';
import { Theme } from '../../theme';

export const Educations = styled.View`
    margin-horizontal: 15px;
    padding-horizontal: 19px;
`;

export const EducationList = styled.View`
    border-radius: 10px;
    background-color: ${Theme.colors.formBackground};
    margin-bottom: 6px;
    padding-horizontal: 13px;
    flex-direction: row;
    align-items: center;
    padding-vertical: 13px;
`;

export const RightView = styled.View`
    flex:1;
    margin-left: 10px;
`;

export const FlexView = styled.View`
    flex-direction: row;
    align-items: center;
`;
