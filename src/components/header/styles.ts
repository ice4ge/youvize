import styled from 'styled-components/native';
import { Theme } from '../../theme';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { TouchableOpacity } from 'react-native-gesture-handler';

export const HeaderContainer = styled.View`
    height: 124px;
    border-bottom-right-radius: 24px;
    border-bottom-left-radius: 24px;
    background-color: ${Theme.header.colors.backgroundColor};
    padding-left: 13px;
    padding-right: 17px;
    padding-top: 15px;
    padding-bottom: 11px;
    justify-content: space-between;
`;

export const MenuContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const SearchContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const MenuButton = styled.TouchableOpacity`
    margin-right: 15px;
    margin-bottom: 5px;
    margin-left: 6px;
`;

export const LogoButton = styled.TouchableOpacity`
`;

export const ProfileButton = styled.TouchableOpacity`
    margin-left: auto;
`;

export const LogoImage = styled.Image`
    width: 132px;
    height: 31px;
`;

export const ProfileImage = styled.Image`
    width: 40px;
    height: 40px;
    border-top-right-radius: 21px;
    border-top-left-radius: 21px;
    border-bottom-right-radius: 21px;
`;

export const SearchBox = styled.View`
    flex-direction: row;
    border: 1px solid #e0e0e0;
    border-radius: 15px;
    background-color: white;
    flex: 1;
    align-items: center;
    padding-horizontal: 15px;
`;

export const SearchInput = styled.TextInput`
    margin-left: 7px;
    font-size: 14px;
    flex: 1;
`;

export const BookMarkBox = styled.TouchableOpacity`
    background-color: white;
    width: 35px;
    height: 35px;
    border-radius: 18px;
    margin-left: 16px;
    justify-content: center;
    align-items: center;
`;

export const BookAppointmentView = styled.View`
    height: 40px;
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`;
export const BookTitle = styled.View`
    flex-direction: row;
    width: 50%;
    justify-content: space-between;
`;
export const ActionLeft = styled.TouchableOpacity`
    padding-left: 10px;
`;
