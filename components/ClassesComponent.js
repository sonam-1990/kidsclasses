import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { ACTIVITIES } from '../shared/activities';

class Classes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activities: ACTIVITIES
        };
    }

    static navigationOptions = {
        title: 'Classes'
    }

    render() {
        const { navigate } = this.props.navigation;
        const renderClassItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    onPress={() => navigate('ClassInfo', { activityId: item.id })}
                    leftAvatar={{ source: require('./images/music/music1.jpg')}}
                />
            );
        };

        return (
            <FlatList
                data={this.state.activities}
                renderItem={renderClassItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}
           

export default Classes;