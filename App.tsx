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
import { View, PermissionsAndroid, NativeModules } from 'react-native';
import { Button } from 'react-native-elements';

import { Contact, ContactForm } from './components/contact/contact';
import Header from './components/header';

interface State {
    contacts: ContactForm[];
}

var DirectSms = NativeModules.DirectSms;

class App extends React.Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            contacts: []
        };
    }

    addContact = (tmp: ContactForm) => {
        this.setState(prevState => ({
            contacts: [...prevState.contacts, tmp]
        }));
    };

    sendDirectSms = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                'android.permission.SEND_SMS',
                {
                    title: 'HoppR Mobile App Sms Permission',
                    message:
                        'HoppR Mobile App needs access to your inbox ' +
                        'so you can send messages in background.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK'
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                this.state.contacts.forEach(contact => {
                    DirectSms.sendDirectSms(contact.phone, contact.message);
                });
            } else {
                console.log('SMS permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    };

    render() {
        let alertButton = null;
        const buttonStyle = {
            borderRadius: 20,
            backgroundColor: 'red',
            margin: 20,
            padding: 60
        };

        if (this.state.contacts.length !== 0) {
            alertButton = (
                <Button
                    title='Je suis en danger'
                    buttonStyle={buttonStyle}
                    icon={{
                        type: 'ant-design',
                        name: 'warning'
                    }}
                    onPress={this.sendDirectSms}>
                    Je suis en danger
                </Button>
            );
        }

        return (
            <View style={{ flex: 1 }}>
                <Header />
                <Contact addContact={this.addContact} />
                {alertButton}
            </View>
        );
    }
}

export default App;
