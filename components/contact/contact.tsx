import React from 'react';
import { View, Button, Text } from 'react-native';

import t from 'tcomb-form-native';
const Form = t.form.Form

const contactForm = t.struct({
    name: t.String,
    phone: t.String
});

class Contact extends React.Component {
    private _form;

    constructor(props: any) {
        super(props);
        this.state = {
            name: '',
            phone: ''
        }
    }

    addContact = () => {
        const value = this._form.getValue();
        this.setState({
            name: value.name,
            phone: value.phone
        });
        console.log('value: ', value);
    }

    render() {
        return (
            <View>
                <Form
                    ref={c => this._form = c}
                    type={ contactForm }/>
                <Button
                    title="Submit"
                    onPress={this.addContact}
                />
                {(this.state.name && this.state.phone) ?
                    <View>
                        <Text>Contact Name: { this.state.name }</Text>
                        <Text>Phone Number: {this.state.phone }</Text>
                    </View>
                    : null
                }
            </View>
        );
    }
}

export default Contact;
