import React from 'react'
import { Image, View, StyleSheet } from 'react-native'

import logoTxt from '../assets/Logo_HoppR_2_w_txt.png';

class Header extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={logoTxt}></Image>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#F3F3F3',
        borderBottomWidth: 5,
        marginBottom: 20
    },
    logo: {
        flex: 1,
        width: 200,
        height: undefined,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'center'
    }
});

export default Header;
