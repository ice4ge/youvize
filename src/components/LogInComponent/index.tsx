import React, { useEffect } from 'react';
import { Image, StyleSheet, View, Dimensions, Text } from 'react-native';
import LogInNavigation from './LogInNavigation';
import { connect } from 'react-redux';
import { firstLoad } from '../../state/ducts/actions/actions';

type TProps = {
};

const LogInComponent: React.FC<TProps> = props => {
    return (
        <LogInNavigation />
    );
}

export default connect()(LogInComponent);
