import React from 'react';
import { useNavigation } from "@react-navigation/native";
import NavigationNames from '../../navigations/NavigationNames';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
    HeaderContainer,
    MenuButton,
    MenuContainer,
    SearchContainer,
    LogoButton,
    LogoImage,
    ProfileButton,
    ProfileImage,
    SearchBox,
    SearchInput,
    BookMarkBox,
    BookAppointmentView,
    BookTitle,
    ActionLeft,
} from './styles';

import MenuIcon from './MenuIcon';
import BookIcon from './book';
import SearchIcon from './SearchIcon';
import SettingIcon from './SettingIcon';
import StarIcon from './StarIcon';
import PlusIcon from './plusIcon';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import {
    StyleSheet,
    Text,
} from "react-native";
import { Theme } from '../../theme';

export const HeaderComponent: React.FC<TProps> = props => {
    const navigation = useNavigation();
    return (
        <HeaderContainer>
            <MenuContainer>
                <MenuButton onPress={() => navigation.navigate(NavigationNames.DashBoardTab, { screen: NavigationNames.MenuScreen })}>
                    <MenuIcon></MenuIcon>
                </MenuButton>
                <LogoButton>
                    <LogoImage source={require("../../assets/logo.png")}></LogoImage>
                </LogoButton>
                <ProfileButton onPress={() => navigation.navigate(NavigationNames.ProfileScreen)}>
                    <ProfileImage source={require("../../assets/avatar.jpg")}></ProfileImage>
                </ProfileButton>
            </MenuContainer>
            {props.HideSearchKey != 'BookAppointment' && <SearchContainer>
                <SearchBox>
                    <SearchIcon></SearchIcon>
                    <SearchInput placeholder="What do you want advise on?"></SearchInput>
                    <TouchableOpacity><SettingIcon></SettingIcon></TouchableOpacity>
                </SearchBox>
                <BookMarkBox>
                    {props.rightIcon != 'plus' &&
                        <StarIcon></StarIcon>
                    }
                    {props.rightIcon == 'plus' && 
                        <PlusIcon></PlusIcon>
                    }
                </BookMarkBox>
            </SearchContainer>}
            {props.HideSearchKey == 'BookAppointment' &&
                <BookAppointmentView>
                    <ActionLeft>
                        <FontAwesomeIcon color={Theme.colors.gray} size={20} icon={faChevronLeft}></FontAwesomeIcon>
                    </ActionLeft>

                    <BookTitle>
                        <BookIcon></BookIcon>
                        <Text style={styles.BookTitle}>Book Appointment!</Text>
                    </BookTitle>
                    <BookMarkBox>
                        <StarIcon></StarIcon>
                    </BookMarkBox>
                </BookAppointmentView>}
        </HeaderContainer>
    );
}
const styles = StyleSheet.create({
    BookTitle: {
        color: '#4A4A4A',
    }
});
