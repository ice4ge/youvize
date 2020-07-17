import styled from 'styled-components/native';
import { Theme } from '../../theme';


export const ReaquestButton = styled.TouchableOpacity`
    width: 70%;
    height: 35px;
    margin-top: 20px;
    border-radius: 5px;
    border: 1px solid ${Theme.colors.avatarBorderColor};
    justify-content: center;
    align-items: center;
    background-color: white;
`;
export const RequestText = styled.Text`
    color: ${Theme.colors.avatarBorderColor};
`;
export const AvatarContainer = styled.View`
    flex-direction: row;
    justify-content: center;
`;

export const Profile = styled.View `
    align-items: center;
    justify-content: center;
    margin-left: 35px;
    width: 150px;
`;

export const AvatarBorder = styled.View`
    width: 140px;
    height: 140px;
    border-width: 4px;
    border-radius: 100px;
    border-color: ${Theme.colors.avatarBorderColor};
    border-bottom-color: transparent;
    justify-content: center;
    align-items: center;
`;

export const SemiCircle = styled.View`
    width: 140px;
    height: 140px;
    position: absolute;
    border-width: 4px;
    border-radius: 100px;
    border-color: ${Theme.colors.avatarBorderColor};
    border-bottom-color: transparent;
    justify-content: center;
    transform: rotateZ(-20deg);
`;

export const EdgeCircle = styled.View`
    background-color: ${Theme.colors.avatarBorderColor};
    width: 4px;
    height: 4px;
    position: absolute;
    bottom: 3px;
    border-radius: 2px;
    left: 35px;
`;

export const NameContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const NameText = styled.Text`
    color: ${Theme.colors.black};
    font-weight: bold;
    font-size: 18px;
    margin-horizontal: 5px;
`;

export const LocationCotainer = styled.View`
    flex-direction: row;
    align-items: center;
    margin-vertical: 3px;
`;

export const LocationText = styled.Text`
    display: flex;
    align-items: center;
    color: ${Theme.colors.locationColor};
    margin-left: 10px;
    font-size: 12px;
`;

export const HourlText = styled.Text`
    color: ${Theme.colors.gray};
    font-size: 14px;
`;

export const RateContainer = styled.View`
    flex-direction: row;
    align-items: center;
    margin-vertical: 4px;
`;

export const SuccessText = styled.Text`
    margin-left: 10px;
    font-size: 10px;
`;

export const SkillContainer = styled.View`
    padding-horizontal: 20px;
    padding-vertical: 15px;
    margin-horizontal: 15px;
    background-color: white;
    margin-top: 10px;
    border-radius: 20px;
`;

export const SkillTitle = styled.Text`
    color: ${Theme.colors.black};
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 5px;
`;

export const Skills = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
`;

export const SkillSet = styled.TouchableOpacity`
    border-radius: 10px;
    padding-horizontal: 9px;
    padding-vertical: 4px;
    margin-top: 5px;
    margin-right: 5px;
    background-color: ${Theme.colors.avatarBorderColor}1f;
`;

export const SkillText = styled.Text`
    font-size: 11px;
    color: ${Theme.colors.primaryColor};
`;

export const Buttons = styled.View`
    flex-direction: row;
    padding-horizontal: 27px;
    margin-bottom: 20px;
`;

export const Button = styled.TouchableOpacity`
    margin-right: 8px;
    height: 25px;
    border-radius: 10px;
    border-width: 1px;
    border-color: ${Theme.colors.primaryColor};
    background-color: ${props=>props.selected ? Theme.colors.primaryColor : "white"};
    color: ${props=>props.selected ? "white" : Theme.colors.gray}
    margin-top: ${props => props.marginTop ? props.marginTop : 10}px;
    align-items: center;
    justify-content: center;
    flex: 1;
`;
