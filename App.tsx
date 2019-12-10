/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { View } from 'react-native';

import Contact from './components/contact/contact';
import Header from './components/header';

class App extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header />
                <Contact />
            </View>
        );
    }
}

export default App;
