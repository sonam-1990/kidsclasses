import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { ACTIVITIES } from '../shared/activities';

function RenderClass({activity}) {

    if (activity) {
        return (
            <Card
                featuredTitle={activity.name}
                image={require('./images/music/music1.jpg')}
            >
                <Text style={{margin: 10}}>
                    {activity.description}
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
            activities: ACTIVITIES
        };
    }

    static navigationOptions = {
        title: 'Class Information'
    }

    render() {
        const activityId = this.props.navigation.getParam('actvityId');
        const activity = this.state.activities.filter(activity => activity.id === activityId)[0];
        return <RenderClass activity={activity} />;
    }
}

export default ClassInfo;