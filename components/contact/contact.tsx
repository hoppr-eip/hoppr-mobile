import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

import { Input } from 'react-native-elements';

interface ContactForm {
    name: string;
    phone: string;
    message: string;
}

interface State extends ContactForm {
    phoneErrorMessage: string;
    nameErrorMessage: string;
    validate: boolean;
}

class Contact extends React.Component<any, State> {
    formResult: ContactForm;

    inputPhoneRegex = /^(\+\d+(\s|-))?0\d(\s|-)?(\d{2}(\s|-)?){4}$/;
    inputNameRegex = /^[a-z ,.'-]+$/i;

    constructor(props: any) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            message: 'Je suis en danger',
            phoneErrorMessage: '',
            nameErrorMessage: '',
            validate: false
        };
        this.formResult = this.state;
    }

    addContact = () => {
        let isError = false;

        this.setState({
            nameErrorMessage: '',
            phoneErrorMessage: ''
        });
        if (!this.formResult.phone.match(this.inputPhoneRegex)) {
            this.setState({ phoneErrorMessage: 'Mauvais numéro de téléphone' });
            isError = true;
        }
        if (!this.formResult.name.match(this.inputNameRegex)) {
            this.setState({ nameErrorMessage: "Ce nom n'est pas valide" });
            isError = true;
        }
        if (isError == false) {
            this.setState({
                ...this.formResult,
                validate: true
            });
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.block}>
                    <Text> Proche de confiance </Text>
                    <Input
                        errorMessage={this.state.nameErrorMessage}
                        onChangeText={name => (this.formResult.name = name)}
                        placeholder='Nom'
                        leftIcon={{
                            type: 'font-awesome',
                            name: 'user'
                        }}
                    />
                    <Input
                        errorMessage={this.state.phoneErrorMessage}
                        onChangeText={phone => (this.formResult.phone = phone)}
                        placeholder='Numéro de téléphone'
                        keyboardType='number-pad'
                        leftIcon={{
                            type: 'font-awesome',
                            name: 'phone'
                        }}
                    />
                    <Input
                        disabled
                        placeholder={this.state.message}
                        leftIcon={{
                            type: 'font-awesome',
                            name: 'comment'
                        }}
                    />
                    <Button
                        color='#35b37d'
                        title='Ajouter'
                        onPress={this.addContact}
                    />
                </View>
                {this.state.validate == true ? (
                    <View style={[styles.contact, styles.block]}>
                        <Text>Contact Name: {this.state.name}</Text>
                        <Text>Phone Number: {this.state.phone}</Text>
                        <Text>Message: {this.state.message}</Text>
                    </View>
                ) : null}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 30,
        marginRight: 30
    },
    block: {
        paddingTop: 10,
        padding: 20,
        borderRadius: 30,
        backgroundColor: '#F3F3F3'
    },
    button: {
        backgroundColor: '#35b37d'
    },
    contact: {
        marginTop: 20
    }
});

export default Contact;
