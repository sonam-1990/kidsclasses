import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
//import { ACTIVITIES } from '../shared/activities';
import { PARTNERS } from '../shared/partners';

function RenderClass({partner}) {

    if (partner) {
        return (
            <Card
                featuredTitle={partner.name}
                image={require('./images/music/susan-mohr-pMCP8c8_xi4-unsplash.jpg')}
            >
                <Text style={{margin: 10}}>
                    {partner.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class ClassInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            partners: PARTNERS
        };
    }

    static navigationOptions = {
        title: 'Class Information'
    }

    render() {
        const partnerId = this.props.navigation.getParam('partnerId');
        const partner = this.state.partners.filter(partner => partner.id === partnerId)[0];
        return <RenderClass partner={partner} />;
    }
}

export default ClassInfo;