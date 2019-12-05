import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

import t from 'tcomb-form-native';
const Form = t.form.Form;

const contactForm = t.struct({
    name: t.String,
    phone: t.String
});

class Contact extends React.Component {
    private _form;
    private _defaultMessage: String = "Je suis en danger";

    constructor(props: any) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            message: this._defaultMessage
        };
    }

    addContact = () => {
        const value = this._form.getValue();
        if (value && value.name && value.phone) {
            this.setState({
                name: value.name,
                phone: value.phone
            });
            console.log('value: ', value);
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.block}>
                    <Form ref={c => (this._form = c)} type={contactForm} />
                    <Button color='#35b37d' title='Submit' onPress={this.addContact} />
                </View>
                {this.state.name && this.state.phone ? (
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
        marginRight: 30,
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
