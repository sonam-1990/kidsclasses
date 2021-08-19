import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';

class Contact extends Component {
    static navigationOptions = {
        title: 'Contact Us'
    }
    render() {
        return (
            <ScrollView wrapperStyle={{ margin: 20 }}>
                <Card title="Contact Information">

                    <Text style={{ marginBottom: 10 }}>
                        101 Belmont Way{"\n"}
                        Seattle, WA 4107{"\n"}
                        U.S.A.
                    </Text>
                    <Text> Phone: 1-497-555-1234{"\n"}
                        Email: learning@kidsclasses.com </Text>

                </Card>

            </ScrollView>
        );

    }

}
export default Contact;