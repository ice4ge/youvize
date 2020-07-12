import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavigationNames from '../../navigations/NavigationNames';
import { GlobalContainer } from '../../styles/GlobalContainer';
import LogInComponent from '../../components/LogInComponent';

const LogInScreen = () => {
    const navigation = useNavigation();
  return (
    <GlobalContainer>
        <LogInComponent />
    </GlobalContainer>
  );
}

export default LogInScreen;
